import { INVALID_MOVE } from 'boardgame.io/core';
//import Player, { CatanPlayer } from "./Player.js";
//import { Location } from "./Location.js";
import { roadData } from "./roadData.js";
import { placeData } from "./placeData.js";
import { setImgRoad , setImgSet , setImgCity , showSPlayerPop, hideSPlayerPop}  from './Board';

//FINAL TO_DO: Exportar los datos de cada turno a un txt.

//IMPORTANT TO_DO: MODIFICAR TODAS LOS PROMPT PARA QUE SEA CLICKANDO CON LA INTERFAZ
//IMPORTANT TO_DO: EL JUGADOR 2 (TERCERO) NO PUEDE TIRAR --> NO SE ACTIVA LA STAGE ----- PARECE QUE FUNCIONA LOL

//GENERAL TO_DO: STAGE DE COMERCIO
//GENERAL TO_DO: LONGEST ROAD
//GENERAL TO_DO: PUERTOS
//GENERAL TO_DO: SISTEMA DE COMERCIO ENTRE PLAYERS

//GENERAL TO_DO: No puedes usar una carta de desarrollo nada mas comprarla

//OPTIONAL TO_DO: En caso de que no queden sitios para construir para un jugador
//OPTIONAL TO_DO: TIRAR DADOS PARA VER QUIEN EMPIEZA

//DUDA: SE PUEDE CAMBIAR EL SISTEMA DE RECURSOS POR NUMEROS DEL 0 AL 4 PARA REFERIRSE A CADA RSS DENTRO DE LAS FUNCIONES?


export const Catan = {
    setup: (ctx) => createInitialState(ctx),

    minPlayers: 2,
    maxPlayers: 4,
   
    turn: {
        onEnd: (G) => {
          G.devCardUsed = false;
        }
      },

    phases: {
        firstBuilds:{
          moves: {buildFirstSettlement, buildFirstRoad,

            addRss: (G, ctx, num) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.resources.lumber += num;
              cPlayer.resources.brick += num;
              cPlayer.resources.ore += num;
              cPlayer.resources.wool += num;
              cPlayer.resources.grain += num;
            },
            addPoint: (G, ctx) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.points++;
            },},

          start: true,
          next: 'play',
          endIf: (G, ctx) => { //ACABA CUANDO TODOS LOS JUGADORES TIENEN 2 POBLADOS Y 2 CARRETERAS INICIALES
            let end = true;
            for(let i = 0; i<ctx.numPlayers; i++){
              let cPlayer = G.players[i];
              if(cPlayer.settlements.length !== 2 || cPlayer.roads.length !== 2)
                end = false;
            }
            if(end){
              ctx.events.setActivePlayers({
                value: {
                  '0': 'throwDiceStage',
                }
              });
              alert("Fase de preparacion terminada, empieza el juego!");
            }
            return end;
          },

          turn: {
            moveLimit: 2,
          }
        },

        play:{

          turn: {
            stages: {
              throwDiceStage: {
                moves: { 
                  throwDice, 
                },
                moveLimit: 1,
              },
              placeRobber: {
                moves: { 
                  placeRobber,
                  stealRssFromRobber, 
                },
                moveLimit: 1,
              },
              buildRoadCard: {
                moves: { 
                  buildRoad,
                },
                moveLimit: 2,
              }
            },
            //TO-DO: Faltaria stage de comercio de jugadores
          },

          moves: {
            buildRoad,
            buildSettlement,
            buildCity,
            buyDevCard,
            useKnight,
            useInvent,
            useMonopoly,
            useRoadBuild,
            tradeBank,
            
            addRss: (G, ctx, num) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.resources.lumber += num;
              cPlayer.resources.brick += num;
              cPlayer.resources.ore += num;
              cPlayer.resources.wool += num;
              cPlayer.resources.grain += num;
            },
            addPoint: (G, ctx) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.points++;
            },

            setLArmy:  (G, ctx) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.largestArmy = true;           
             },
            
            setLRoad:  (G, ctx) => { //ADMIN ACTION

            let cPlayer = G.players[ctx.currentPlayer];
  
            cPlayer.longestRoad = true;           
            },


            endTurn,
          
          }
              
                
          /* SIN STAGES
          moves: {
            throwDice,
            buildRoad,
            buildSettlement,
            buildCity,
            buyDevCard,
            useKnight,
            useInvent,
            useMonopoly,
            useRoadBuild,
            tradeBank,

            addRss: (G, ctx, num) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.resources.lumber += num;
              cPlayer.resources.brick += num;
              cPlayer.resources.ore += num;
              cPlayer.resources.wool += num;
              cPlayer.resources.grain += num;
            },
            addPoint: (G, ctx) => { //ADMIN ACTION

              let cPlayer = G.players[ctx.currentPlayer];
    
              cPlayer.points++;
            },
          },
          */

        },
    },

    endIf: (G, ctx) => {
      if (IsVictory(G, ctx)) {
        alert("GAME FINISHED");
        return { winner: ctx.currentPlayer };
      }
    },
      
  };

  //FUNCIONES TECNICAS DE JAVASCRIPT

  function shuffle (array) {
    //ESTADO: TERMINADA REVISADA
    //FUNCION: Baraja el array que se le pase por parametro

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function removeItemFromArr ( arr, item ) {
    //ESTADO: TERMINADO REVISADO
    //FUNCION: Borra un elemento de un array

    var i = arr.indexOf( item );
    arr.splice( i, 1 );
  }


  //FUNCIONES DE ACCIONES DEL JUEGO

  function placeRobber(G, ctx, id){

    let cPlayer = G.players[ctx.currentPlayer];
    G.selectPlayers = [];

    if(id !== G.robberPos){

      G.terrainCells[G.robberPos].robber = false;
      G.terrainCells[id].robber = true;
      G.robberPos = id;
      console.log("El jugador "+cPlayer.name+" coloca el ladron en: "+id);

      //let possiblePlayers = [];
      //let possiblePlayersNames = [];

      for(let i = 0; i< ctx.numPlayers; i++){ //mete a los jugadores cercanos en el arra possiblePlayers
        if(cPlayer !== G.players[i]){
          let auxPlayer = G.players[i];
          let added = false;
          for(let j = 0; j<auxPlayer.ownedTiles.length; j++){
            if(auxPlayer.ownedTiles[j].id === id && !added){

              G.selectPlayers.push(auxPlayer);
              added = true;
            }
          }
        }
      }

      if(G.selectPlayers.length === 0){
        console.log("No hay jugadores al lado del ladron, por lo que no se roba ninguna carta");
        ctx.events.endStage()
      }
      else{
        showSPlayerPop();
      }

      //stealRssFromRobber(G,ctx,id);
    }
    else
     alert("No puedes dejar el ladron en la misma casilla")
  }

  function selectRandomCard(G,ctx, selPlayer){
    //ESTADO: TERMINADO SIN REVISAR
    //FUNCION: Traspasa un recurso al azar de selPlayer al jugador actual

    let cPlayer = G.players[ctx.currentPlayer];

    let keys = Object.keys(selPlayer.resources);
    let values = Object.values(selPlayer.resources);
    let mixDeck = [];

    for(let i = 0; i< keys.length; i++){
      for(let j=0; j<values[i]; j++){
        mixDeck.push(keys[i])
      }
    }

    mixDeck = shuffle(mixDeck);
    //console.log("Mix Deck: "+mixDeck);

    let card = mixDeck[0];
    switch(card){
      case "ore":
        selPlayer.resources.ore--;
        cPlayer.resources.ore++;
        console.log("El jugador: "+cPlayer.name+ " roba 1 de ore de "+selPlayer.name);    
        break;
      case "grain": 
        selPlayer.resources.grain--;
        cPlayer.resources.grain++;
        console.log("El jugador: "+cPlayer.name+ " roba 1 de grain de "+selPlayer.name);
        break;
      case "wool":
        selPlayer.resources.wool--;
        cPlayer.resources.wool++;
        console.log("El jugador: "+cPlayer.name+ " roba 1 de wool de "+selPlayer.name);
        break;
      case "brick":
        selPlayer.resources.brick--;
        cPlayer.resources.brick++;
        console.log("El jugador: "+cPlayer.name+ " roba 1 de brick de "+selPlayer.name);
        break;
      case "lumber":
        selPlayer.resources.lumber--;
        cPlayer.resources.lumber++;
        console.log("El jugador: "+cPlayer.name+ " roba 1 de lumber de "+selPlayer.name);
        break;
      default:
        throw new Error("Non existing rss in function selectRandomCard");
    }
  }

  function stealRssFromRobber(G, ctx, playerN){
    //ESTADO: TERMINADO SIN REVISAR
    //FUNCION: Roba una carta a un jugador, si hay, coolindante al ladron
      
    let found = -1;

    let playerNames = [];

    for(let i=0; i<G.selectPlayers.length; i++){
      let name = G.selectPlayers[i].name;
      playerNames.push(name);
    }


    found = playerNames.indexOf(playerN);

    if(found === -1){
      alert("Jugador no valido, prueba otra vez");
      return;
    }
    else{
      
    }

    let id_selPlayer = G.selectPlayers[found].id;
    let selPlayer = G.players[id_selPlayer]
    hideSPlayerPop();

    if(countCards(selPlayer)>0){
      selectRandomCard(G,ctx,selPlayer);
    }
    else{
      alert("El jugador elegido no tiene cartas, mala suerte");
    }

    ctx.events.endStage()
  }

  function endTurn(G, ctx){
    //ESTADO: TERMINADA REVISADA
    //FUNCION: Termina el turno e inicia de nuevo la fase de dados para el siguiente jugador

    ctx.events.endTurn();
    ctx.events.setActivePlayers({currentPlayer: 'throwDiceStage'});
    G.devCardUsed = false;
  }

  function diceRoll() {
    //ESTADO: TERMINADA REVISADA
    //FUNCION: Suma dos dados con valor posible 1-6 

    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
  };

  function countCards(cPlayer){
    //ESTADO: TERMINADA SIN REVISAR
    //FUNCION: Devuelve el numero de cartas que tiene un jugador (sin contar dev)

    var sumTotal = 0;
    for(var stat of Object.values(cPlayer['resources'])){
      sumTotal = sumTotal+stat
    }

    return sumTotal;
  }

  function checkDiscard(G,ctx){
    //ESTADO: TERMINADA SIN REVISAR
    //FUNCION: Cada jugador se descarta de la mitad de sus cartas aleatoriamente si tiene mas de 7

    for(let i=0; i<ctx.numPlayers; i++){
      let cPlayer = G.players[i];

      let cPlayerCards = countCards(cPlayer);

      if(cPlayerCards > 7){
        alert("El jugador "+cPlayer.name+" tiene "+cPlayerCards+" cartas, se descartará aleatoriamente de la mitad");
        console.log("El jugador "+cPlayer.name+" tiene mas de 7 cartas, debe descartarse");
        
        let cardsLeft = Math.floor(cPlayerCards/2); //cartas que aun tiene que descartar
        let rssList = ["brick", "wool", "grain", "ore", "lumber"];

        while(cardsLeft > 0){
          let valid = false;
          while(!valid){
            //let rssName = prompt("Te quedan "+cardsLeft+ " por elegir, elige (ore, lumber, grain, brick, wool):");

            let random = Math.floor(Math.random() * rssList.length);
            let rssName = rssList[random];

            switch(rssName){
              case "ore":
                if(cPlayer.resources.ore > 0){
                  cPlayer.resources.ore--;
                  console.log("El jugador "+cPlayer.name+ " descarta 1 de ore");
                  valid = true;
                }      
                break;
              case "grain":
                if(cPlayer.resources.grain > 0){
                  cPlayer.resources.grain--;
                  console.log("El jugador "+cPlayer.name+ " descarta 1 de grain");
                  valid = true;
                }           
                break;
              case "wool":
                if(cPlayer.resources.wool > 0){
                  cPlayer.resources.wool--;
                  console.log("El jugador "+cPlayer.name+ " descarta 1 de wool");
                  valid = true;
                }           
                break;
              case "lumber":
                if(cPlayer.resources.lumber > 0){
                  cPlayer.resources.lumber--;
                  console.log("El jugador "+cPlayer.name+ " descarta 1 de lumber");
                  valid = true;
                }          
                break;
              case "brick":
                if(cPlayer.resources.brick > 0){
                  cPlayer.resources.brick--;
                  console.log("El jugador "+cPlayer.name+ " descarta 1 de brick");
                  valid = true;
                }           
                break;
              default:
                //alert("No existe ese recurso");
                break;
            }
          }
          cardsLeft--;
        }
      }
    }
  }

  function getFirstRSS(G, ctx){
    //ESTADO: TERMINADA SIN REVISAR
    //FUNCION: Cada jugador recibe los recursos correspondientes al segundo poblado inicial


    let cPlayer = G.players[ctx.currentPlayer];
    let lastBuild = cPlayer.settlements[cPlayer.settlements.length-1];

    let str = JSON.stringify(lastBuild, null, 4); // beautiful indented output.
    console.log(str); 

    for(let j=0; j<lastBuild.tiles.length; j++){
      let tileID = lastBuild.tiles[j];
      let newRSS = G.terrainCells[tileID].rss;

      switch(newRSS){
        case "ore":
          cPlayer.resources.ore++;
          G.resourcesDeck.ore--;
          console.log("El jugador "+cPlayer.name+ " roba 1 de ore");
          break;
        case "grain":
          cPlayer.resources.grain++;
          G.resourcesDeck.grain--;
          console.log("El jugador "+cPlayer.name+ " roba 1 de grain");
          break;
        case "wool":
          cPlayer.resources.wool++;
          G.resourcesDeck.wool--;
          console.log("El jugador "+cPlayer.name+ " roba 1 de wool");
          break;
        case "brick":
          cPlayer.resources.brick++;
          G.resourcesDeck.brick--;
          console.log("El jugador "+cPlayer.name+ " roba 1 de brick");
          break;
        case "lumber":
          cPlayer.resources.lumber++;
          G.resourcesDeck.lumber--;
          console.log("El jugador "+cPlayer.name+ " roba 1 de lumber");
          break;
        case "none":
          break;
        default:
          throw new Error("Non existing rss in function getFirstRSS");
      }
    }
    
  }

  function throwDice (G, ctx){
    //ESTADO: EN PROGRESO
    //TO-DO: DESCARTAR 
    //FUNCION: Tira los dados y realiza la accion correspondiente (recursos y ladron)

    let numberDice = diceRoll();
    G.diceValue = numberDice;
    console.log("Ha salido el numero "+numberDice);
    
    if(numberDice === 7){
      
      checkDiscard(G, ctx);
      alert("Seleccione donde colocar el ladron clickando en la casilla correspondiente")
      ctx.events.setActivePlayers({currentPlayer: 'placeRobber'});

    }
    else{

      for(let i=0; i<ctx.numPlayers; i++){
        /*
        let playerID = 'player_' + i;
        let cPlayer = G[playerID];
        */
        let cPlayer = G.players[i];

        for(let j=0; j<cPlayer.ownedTiles.length; j++){
          if(cPlayer.ownedTiles[j].number === numberDice && cPlayer.ownedTiles[j].robber === false){
            let rssName = cPlayer.ownedTiles[j].rss;
            switch(rssName){
              case "ore":
                if(G.resourcesDeck.ore > 0){
                  cPlayer.resources.ore++;
                  G.resourcesDeck.ore--;
                  console.log("El jugador "+i+ " roba 1 de ore");
                }
                break;
              case "grain":
                if(G.resourcesDeck.grain > 0){
                  cPlayer.resources.grain++;
                  G.resourcesDeck.grain--;
                  console.log("El jugador "+i+ " roba 1 de grain");
                }
                break;
              case "wool":
                if(G.resourcesDeck.wool > 0){
                  cPlayer.resources.wool++;
                  G.resourcesDeck.wool--;
                  console.log("El jugador "+i+ " roba 1 de wool");
                }
                break;
              case "brick":
                if(G.resourcesDeck.brick > 0){
                  cPlayer.resources.brick++;
                  G.resourcesDeck.brick--;
                  console.log("El jugador "+i+ " roba 1 de brick");
                }
                break;
              case "lumber":
                if(G.resourcesDeck.lumber > 0){
                  cPlayer.resources.lumber++;
                  G.resourcesDeck.lumber--;
                  console.log("El jugador "+i+ " roba 1 de lumber");
                }
                break;
              default:
                throw new Error("Non existing rss in function throwDice");
            }

          }
        }

      }

      ctx.events.endStage();
    }

  }

  function buildFirstSettlement (G, ctx, id){
    //ESTADO: EN PROGRESO
    //TO-DO: PUERTOS
    //FUNCION: Construye los primeros pueblos sin coste al inicio del juego

    //let playerID = 'player_' + ctx.currentPlayer;
    //let cPlayer = G[playerID];

    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.settlements.length > cPlayer.roads.length){
      alert("Primero debes construir una carretera");
      return INVALID_MOVE;
    }

    if(G.placeCells[id].type !== -1){
      alert("Ese punto ya tiene una construccion");
      return INVALID_MOVE;
    }

    if(checkProximity(G, id) === false){
      alert("No cumples la regla de proximidad con otros pueblos");
      return INVALID_MOVE;
    }

    G.placeCells[id].type = 0;
    G.placeCells[id].owner = ctx.currentPlayer;
    cPlayer.settlements.push(G.placeCells[id]);
    console.log("El jugador "+cPlayer.name+" construye un poblado inicial en: "+id);

    setImgSet(G, ctx, id);

    for(let i = 0; i<G.placeCells[id].tiles.length; i++){
      let id_t = G.placeCells[id].tiles[i];
      cPlayer.ownedTiles.push(G.terrainCells[id_t]);
    }
    cPlayer.points++; 
    
    if(cPlayer.settlements.length === 2)
      getFirstRSS(G,ctx);
  }

  function buildSettlement (G, ctx, id){
    //ESTADO: EN PROCESO
    //TO-DO: PUERTOS
    //FUNCION: Construye un pueblo con las reglas normales del juego en la localizacion id
    /*
    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    */
    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.settlements.length === 5){
      alert("Ya tienes el maximo de pueblos");
      return INVALID_MOVE;
    }

    if(cPlayer.resources.lumber < 1 || cPlayer.resources.brick <1  || cPlayer.resources.grain <1 || cPlayer.resources.wool <1){
      alert("No tienes suficientes recursos");
      return INVALID_MOVE;
    }

    if(G.placeCells[id].type !== -1){
      alert("Ese punto ya tiene una construccion");
      return INVALID_MOVE;
    }

    if(checkProximity(G, id) === false){
      alert("No cumples la regla de proximidad con otros pueblos");
      return INVALID_MOVE;
    }

    if(checkSettlementConection(G, cPlayer, id) === false){
      alert("No tienes conexion con ese punto por carretera");
      return INVALID_MOVE;
    }

    cPlayer.resources.brick--;
    cPlayer.resources.lumber--;
    cPlayer.resources.grain--;
    cPlayer.resources.wool--;

    G.placeCells[id].type = 0;
    G.placeCells[id].owner = ctx.currentPlayer;
    cPlayer.settlements.push(G.placeCells[id]);
    console.log("El jugador "+cPlayer.name+" construye un poblado en: "+id);

    setImgSet(G, ctx, id);

    for(let i = 0; i<G.placeCells[id].tiles.length; i++){
      let id_t = G.placeCells[id].tiles[i];
      cPlayer.ownedTiles.push(G.terrainCells[id_t]);
    }
    
    cPlayer.points++;    
  }

  function checkFirstRoadBuilding(G,cPlayer,id){
    //ESTADO: TERMINADA SIN REVISAR
    //FUNCIÓN: Comprueba que la carretera inicial se construya correctamente junto al poblado correspondiente

    if(cPlayer.settlements.length <= cPlayer.roads.length){
      alert("Primero debes construir un poblado");
      return false;
    }

    let lastBuild = cPlayer.settlements[cPlayer.settlements.length-1];

    if(G.roadCells[id].to !== lastBuild.id && G.roadCells[id].from !== lastBuild.id){
      alert("Debes construir junto al ultimo edificio construido");
      return false;
    }

    return true;
  }

  function buildFirstRoad (G, ctx, id){
    //ESTADO: EN PROCESO
    //TO-DO: 
    //FUNCIÓN: Construye las primeras carreteras sin coste al inicio de la partida
    /*
    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    */
    let cPlayer = G.players[ctx.currentPlayer];

    if(!checkFirstRoadBuilding(G,cPlayer,id)){
      return INVALID_MOVE;
    }

    if(G.roadCells[id].value !== -1){
      alert("La carretera ya tiene dueño");
      return INVALID_MOVE;
    }

    if(checkRoadConection(G, cPlayer, id) === false){
      alert("No tienes conexion con esa casilla de carretera");
      return INVALID_MOVE;
    }

    setImgRoad(G, ctx, id); //pone la imagen de la carretera

    //Coste 1 de madera y 1 de arcilla
    G.roadCells[id].value = ctx.currentPlayer;
    cPlayer.roads.push(G.roadCells[id]);
    console.log("El jugador "+cPlayer.name+" construye una carretera inicial en: "+id);
  }

  function buildRoad (G, ctx, id){
    //ESTADO: EN PROCESO
    //TO-DO: LONGEST ROAD (SISTEMA DE CHECKEO DE CAMINO MAS LARGO, IGUAL POR BACKTRACKING)
    //FUNCIÓN: Construye una carretera siguiendo las reglas del juego en la carretera id
    /*
    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    */
    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.roads.length >= 15){
      alert("Maximo de carreteras construido");
      return INVALID_MOVE;
    }

    if(cPlayer.resources.lumber < 1 || cPlayer.resources.brick <1){
      alert("No tienes suficientes recursos");
      return INVALID_MOVE;
    }

    if(G.roadCells[id].value !== -1){
      alert("La carretera ya tiene dueño");
      return INVALID_MOVE;
    }

    if(checkRoadConection(G, cPlayer, id) === false){
      alert("No tienes conexion con esa casilla de carretera");
      return INVALID_MOVE;
    }

    setImgRoad(G, ctx, id); //pone la imagen de la carretera

    //Coste 1 de madera y 1 de arcilla
    G.roadCells[id].value = ctx.currentPlayer;
    cPlayer.roads.push(G.roadCells[id]);
    console.log("El jugador "+cPlayer.name+" construye una carretera en: "+id);
    cPlayer.resources.brick--;
    cPlayer.resources.lumber--;

    if(ctx.activePlayers !== null)
      if(ctx.activePlayers[ctx.currentPlayer] === "buildRoadCard"){
        if(G.roadsToBuild === 1){
          G.roadsToBuild--;
          ctx.events.endStage();
        }
        else
          G.roadsToBuild--;
    }

  }

  function buildCity (G, ctx, id){
    //ESTADO: TERMINADO SIN REVISAR
    //TO-DO: 
    //FUNCION: Construye una ciudad encima de un pueblo con las reglas normales del juego en la localizacion id
    /*
    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    */
    let cPlayer = G.players[ctx.currentPlayer];

    if( cPlayer.resources.grain <2 || cPlayer.resources.ore <3){
      alert("No tienes suficientes recursos");
      return INVALID_MOVE;
    }

    if(G.placeCells[id].type !== 0){
      alert("Necesitas construir una ciudad encima de un pueblo");
      return INVALID_MOVE;
    }

    let booleanC = false;
    for(let i=0; i<cPlayer.settlements.length; i++){
      if(cPlayer.settlements[i].id === id)
        booleanC = true;
    }

    if(booleanC === false){
      alert("No posees un pueblo en la casilla seleccionada");
      return INVALID_MOVE;
    }

    //Se elimina de la lista de settlements del jugador
    let cityFilter = cPlayer.settlements.filter(obj => obj.id === id)
    removeItemFromArr(cPlayer.settlements, cityFilter[0])

    cPlayer.resources.ore -= 3;
    cPlayer.resources.grain -= 2;
    
    G.placeCells[id].type = 1;
    cPlayer.cities.push(G.placeCells[id]);
    console.log("El jugador "+cPlayer.name+" construye una ciudad en: "+id);

    setImgCity(G, ctx, id);

    //uan ciudad cuenta como dos pueblos para el recurso correspondiente
    for(let i = 0; i<G.placeCells[id].tiles.length; i++){
      let id_t = G.placeCells[id].tiles[i];
      cPlayer.ownedTiles.push(G.terrainCells[id_t]);
    }
    
    cPlayer.points++;
  }

  function buyDevCard (G, ctx){
    //ESTADO: TERMINADA SIN REVISAR
    //TO-DO: 
    //FUNCIÓN: Compra una carta de desarrollo
    /*
    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    */
    let cPlayer = G.players[ctx.currentPlayer];

    if(G.devCardsDeck.length === 0){
      alert("No quedan cartas para comprar");
      return INVALID_MOVE;
    }

    if(cPlayer.resources.ore < 1 || cPlayer.resources.grain <1 || cPlayer.resources.wool <1){
      alert("No tienes suficientes recursos");
      return INVALID_MOVE;
    }

    cPlayer.resources.ore--;
    cPlayer.resources.grain--;
    cPlayer.resources.wool--;

    let newCard = G.devCardsDeck.pop();

    if(newCard === "victoryPoint")
      cPlayer.points++;

    cPlayer.devCards.push(newCard);
    console.log("El jugador "+cPlayer.name+" compra una carta de desarrollo: "+newCard);
  }

  function checkProximity(G, id){
    //ESTADO: TERMINADA NO REVISADA
    //FUNCION: Comprueba si un pueblo cumple la regla de 2 de distancia con el resto de pueblos

    for(let i=0; i<G.placeCells.length; i++){
      for(let j=0; j<G.placeCells[i].nearTo.length; j++){
        if(G.placeCells[i].nearTo[j] === id){
          if(G.placeCells[i].owner !== -1){
            alert("No cumple la regla de distancia con casilla "+G.placeCells[i].id)
            return false
          }
        }
      }
    }
    return true; 
  }

  function checkRoadConection(G, cPlayer, id){
    //ESTADO: TERMINADA NO REVISADA
    //FUNCION: Comprueba que la carretera que va a construirse tenga conexion con otras estructuras del jugador

    //primero busca en los pueblos
    for(let i=0; i<cPlayer.settlements.length; i++){
      if(cPlayer.settlements[i].id === G.roadCells[id].to || cPlayer.settlements[i].id === G.roadCells[id].from)
        return true;
    }
    //segundo en las ciudades
    for(let i=0; i<cPlayer.cities.length; i++){
      if(cPlayer.cities[i].id === G.roadCells[id].to || cPlayer.cities[i].id === G.roadCells[id].from)
        return true;
    }
    //por ultimo por carretera
    for(let i=0; i<cPlayer.roads.length; i++){
      if(cPlayer.roads[i].from === G.roadCells[id].from || cPlayer.roads[i].from === G.roadCells[id].to ||
        cPlayer.roads[i].to === G.roadCells[id].from || cPlayer.roads[i].to === G.roadCells[id].to ){
          return true;
        }
    }

    return false;
  }

  function checkSettlementConection(G, cPlayer, id){
    //ESTADO: TERMINADA NO REVISADA
    //FUNCION: Comprueba si el pueblo que va a construirse tiene conexion por carretera con el jugador

    //solo hace falta mirar si hay carreteras conectadas
    for(let i=0; i<cPlayer.roads.length; i++){
      if(cPlayer.roads[i].from === G.placeCells[id].id || cPlayer.roads[i].to === G.placeCells[id].id){
            return true;
          }
    }
    return false; 
  }

  function rssFromTile(tile){
    //ESTADO: TERMINADA REVISADA
    //FUNCION: Devuelve el recurso de la casilla de terreno correspondiente

    let rss;
    switch(tile){
      case "Forest":
        rss = "lumber";
        break;
      case "Hills":
        rss = "brick";
        break;
      case "Mountains":
        rss = "ore";
        break;
      case "Pasture":
        rss = "wool";
        break;
      case "Dessert":
        rss = "none";
        break;
      case "Fields":
        rss = "grain";
        break;
      default:
        throw new Error("Non existing rss in function rssFromTile");
    }

    return rss;
  }

  function getRSSFromBank(G,cPlayer){
    //ESTADO: TERMINADO SIN REVISAR
    //FUNCIÓN: Coge una carta de recursos del deck que el jugador eliga, returna true si se ha completado la operacion, false si no

    let res = true;

    let newRSS = prompt("¿Que recurso quieres a cambio? (ore, lumber, brick, wool, grain): ");

    while(newRSS !== "ore" && newRSS !== "grain"  && newRSS !== "lumber" && newRSS !== "brick" && newRSS !== "wool")
      newRSS = prompt("No valido, elije: ore, grain, lumber, brick, wool");

    switch(newRSS){
      case "ore":
        if(G.resourcesDeck.ore > 0){
          cPlayer.resources.ore++;
          console.log("El jugador "+cPlayer.name+" recibe a cambio 1 de ore del banco");
          G.resourcesDeck.ore--;
        }
        else{
          alert("No queda mineral en el deck");
          res = false;
        }
        break;
      case "grain":
        if(G.resourcesDeck.grain > 0){
          cPlayer.resources.grain++;
          console.log("El jugador "+cPlayer.name+" recibe a cambio 1 de grain del banco");
          G.resourcesDeck.grain--;
        }
        else{
          alert("No queda grano en el deck");
          res = false;
        }
        break;
      case "wool":
        if(G.resourcesDeck.wool > 0){
          cPlayer.resources.wool++;
          console.log("El jugador "+cPlayer.name+" recibe a cambio 1 de wool del banco");
          G.resourcesDeck.wool--;
        }
        else{
          alert("No queda lana en el deck");
          res = false;
        }
        break;
      case "brick":
        if(G.resourcesDeck.brick > 0){
          cPlayer.resources.brick++;
          console.log("El jugador "+cPlayer.name+" recibe a cambio 1 de brick del banco");
          G.resourcesDeck.brick--;
        }
        else{
          alert("No queda ladrillo en el deck");
          res = false;
        }
        break;
      case "lumber":
        if(G.resourcesDeck.lumber > 0){
          cPlayer.resources.lumber++;
          console.log("El jugador "+cPlayer.name+" recibe a cambio 1 de lumber del banco");
          G.resourcesDeck.lumber--;
        }
        else{
          alert("No queda madera en el deck");
          res = false;
        }
        break;
      default:
        throw new Error("Non existing rss in function getRSSFromBank");
    }

    return res;
  }

  function tradeBank(G,ctx){
    //ESTADO: EN PROCESO
    //TO-DO: PUERTOS
    //FUNCIÓN: Comercia con el banco

    let cPlayer = G.players[ctx.currentPlayer];

    let rss = prompt("¿Que recurso quieres dar al banco? (ore, lumber, brick, wool, grain, none");

    switch(rss){
      case "ore":
        if(cPlayer.resources.ore < 4){
          alert("No tienes suficiente ore para comerciar!");
        }
        else{
          console.log("El jugador "+cPlayer.name+ " entrega 4 de ore al banco");
          cPlayer.resources.ore -= 4;
          let done = getRSSFromBank(G,cPlayer);
          if(!done){
            console.log("El jugador "+cPlayer.name+ " recupera 4 de ore del banco debido a falta de recursos disponibles");
            cPlayer.resources.ore += 4;
          }
        }
        break;
      case "wool":
        if(cPlayer.resources.wool < 4){
          alert("No tienes suficiente wool para comerciar!");
        }
        else{
          console.log("El jugador "+cPlayer.name+ " entrega 4 de wool al banco");
          cPlayer.resources.wool -= 4;
          let done = getRSSFromBank(G,cPlayer);
          if(!done){
            console.log("El jugador "+cPlayer.name+ " recupera 4 de wool del banco debido a falta de recursos disponibles");
            cPlayer.resources.wool += 4;
          }
        }
        break;
      case "brick":
        if(cPlayer.resources.brick < 4){
          alert("No tienes suficiente brick para comerciar!");
        }
        else{
          console.log("El jugador "+cPlayer.name+ " entrega 4 de brick al banco");
          cPlayer.resources.brick -= 4;
          let done = getRSSFromBank(G,cPlayer);
          if(!done){
            console.log("El jugador "+cPlayer.name+ " recupera 4 de brick del banco debido a falta de recursos disponibles");
            cPlayer.resources.brick += 4;
          }
        }
        break;
      case "grain":
        if(cPlayer.resources.grain < 4){
          alert("No tienes suficiente grain para comerciar!");
        }
        else{
          console.log("El jugador "+cPlayer.name+ " entrega 4 de grain al banco");
          cPlayer.resources.grain -= 4;
          let done = getRSSFromBank(G,cPlayer);
          if(!done){
            console.log("El jugador "+cPlayer.name+ " recupera 4 de grain del banco debido a falta de recursos disponibles");
            cPlayer.resources.grain += 4;
          }
        }
        break;
      case "lumber":
        if(cPlayer.resources.lumber < 4){
          alert("No tienes suficiente lumber para comerciar!");
        }
        else{
          console.log("El jugador "+cPlayer.name+ " entrega 4 de lumber al banco");
          cPlayer.resources.lumber -= 4;
          let done = getRSSFromBank(G,cPlayer);
          if(!done){
            console.log("El jugador "+cPlayer.name+ " recupera 4 de lumber del banco debido a falta de recursos disponibles");
            cPlayer.resources.lumber += 4;
          }
        }
        break;
      case "none":
        alert("Espabila")
        break;
      default:
        throw new Error("Non existing rss in function getFirstRSS");
    }

    
  }

  function tradePlayers(G,ctx){
    //ESTADO: EN PROCESO (NO UTILIZABLE)
    //TO-DO: PARTE RECEPTROA, QUE SOLO PUEDA VER EL MENSAJE DE LA OFERTA EL QUE LO RECIBE
    //FUNCIÓN: Comercia con otros jugadores si aceptan

    let cPlayer = G.players[ctx.currentPlayer];
    let playerNames = [];

    for(let i=0; i< ctx.numPlayers; i++){
      if(G.players[i] !== cPlayer)
        playerNames.push(G.players[i].name);
    }

    let selPlayer = prompt("¿Con que jugador quieres comerciar?");

    if(playerNames.indexOf(selPlayer) === -1){
      alert("Nombre de jugador no valido");
      return INVALID_MOVE;
    }

    let give;
    let giveOffer = [];
    let receive;
    let receiveOffer = [];

    while(give !== "end"){
      give = prompt("Introduce rss a tu oferta: (ore, grain, wool, brick, lumber)/ 'end' para terminar");
      switch(give){
        case "ore":
          if(cPlayer.resources.ore > 0){
            cPlayer.resources.ore--;
            giveOffer.push("ore");
          }
          else{
            alert("No tienes este recurso!");
          }
          break;
        case "wool":
          if(cPlayer.resources.wool > 0){
            cPlayer.resources.wool--;
            giveOffer.push("wool");
          }
          else{
            alert("No tienes este recurso!");
          }
          break;
        case "brick":
          if(cPlayer.resources.brick > 0){
            cPlayer.resources.brick--;
            giveOffer.push("brick");
          }
          else{
            alert("No tienes este recurso!");
          }
          break;
        case "grain":
          if(cPlayer.resources.grain > 0){
            cPlayer.resources.grain--;
            giveOffer.push("grain");
          }
          else{
            alert("No tienes este recurso!");
          }
          break;
        case "lumber":
          if(cPlayer.resources.lumber > 0){
            cPlayer.resources.lumber--;
            giveOffer.push("lumber");
          }
          else{
            alert("No tienes este recurso!");
          }
          break;
        case "end":
          break;
        default:
          alert("Nombre no valido de recurso");
          break;
      }
    }
    
    while(receive !== "end"){
      receive = prompt("¿Que quieres a cambio?: (ore, grain, wool, brick, lumber)/ 'end' para terminar");
      switch(give){
        case "ore":
          receiveOffer.push("ore");
          break;
        case "wool":
          receiveOffer.push("wool");
          break;
        case "brick":
          receiveOffer.push("brick");
          break;
        case "grain":
          receiveOffer.push("grain");
          break;
        case "lumber":
          receiveOffer.push("lumber");
          break;
        case "end":
          break;
        default:
          alert("Nombre no valido de recurso");
          break;
      }
    }

    //TO_DO: FALTA QUE EL OTRO JUGADOR ACEPTE O DECLINE LA OFERTA (EN CUYO CASO SE LE DEVUELVEN LOS RSS)
  }


  //FUNCIONES DE CARTAS DE DESARROLLO
  
  function useKnight(G, ctx){
    //ESTADO: EN PROCESO
    //TO-DO: LIMITACION DE UNA CARTA DE DESARROLLO POR TURNO (FORO BOARDGAME)
    //FUNCION: Usa la carta de caballero

    if(G.devCardUsed === true){
      alert("Solo se puede usar una carta de desarrollo por turno");
      return INVALID_MOVE;
    }

    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.devCards.length === 0){
      alert("No tienes cartas de desarrollo");
      return INVALID_MOVE;
    }

    if(cPlayer.devCards.indexOf("knight") === -1){
      alert("No tienes ninguna carta de caballero");
      return INVALID_MOVE;
    }
    else{
      cPlayer.devCards.splice(cPlayer.devCards.indexOf("knight"),1);
      console.log("El jugador "+cPlayer.name+" usa la carta de desarrollo de Caballero");
    }

    alert("Seleccione donde colocar el ladron clickando en la casilla correspondiente")
    ctx.events.setActivePlayers({currentPlayer: 'placeRobber'});

    cPlayer.usedKnights++;
    checkKnightLeader(G, ctx);
    G.devCardUsed = true;

  }

  function checkKnightLeader(G, ctx){
    //ESTADO: EN PROCESO
    //FUNCION: Comprueba si hay que cambiar la carta de mejor ejercito
    
    let cPlayer = G.players[ctx.currentPlayer];

    //si la carta no ha sido reclamada por nadie
    if(G.largestArmyId === -1){
      if(cPlayer.usedKnights >= 3){
        cPlayer.largestArmy = true;
        G.largestArmyId = ctx.currentPlayer;
        cPlayer.points += 2;
        alert("La carta de mayor ejercito pasa a ser del jugador "+ctx.currentPlayer);
      }
    }
    //si la carta ya la tiene algun jugador
    else{
      if(cPlayer.largestArmy === false){
        //let playerAuxId = 'player_' + G.largestArmyId;
        //si hay un nuevo lider se cambia la carta de duenho
        if(cPlayer.usedKnights > G.players[G.largestArmyId].usedKnights){
          cPlayer.largestArmy = true;
          cPlayer.points += 2;
          /*
          G[playerAuxId].largestArmy = false;
          G[playerAuxId].points -=2;
          */
          G.players[G.largestArmyId].largestArmy = false;
          G.players[G.largestArmyId].points -=2;
          alert("La carta de mayor ejercito pasa del jugador "+G.largestArmyId +" al jugador "+ctx.currentPlayer);
          G.largestArmyId = ctx.currentPlayer;
        }       
      }
      else{
        //El jugador ya tiene el ejercito mas grande
      }
    }

  }

  function useInvent(G, ctx, rss){
    //ESTADO: EN PROCESO
    //TO-DO: INTERFAZ PARA ELEGIR MATERIAL
    //FUNCION: Usa la carta de desarrollo invento

    if(G.devCardUsed === true){
      alert("Solo se puede usar una carta de desarrollo por turno");
      return INVALID_MOVE;
    }

    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.devCards.length === 0){
      alert("No tienes cartas de desarrollo");
      return INVALID_MOVE;
    }

    if(cPlayer.devCards.indexOf("invent") === -1){
      alert("No tienes ninguna carta de invento");
      return INVALID_MOVE;
    }
    else{
      if(G.countInvent === 1){
        cPlayer.devCards.splice(cPlayer.devCards.indexOf("invent"),1);
        console.log("El jugador "+cPlayer.name+" usa la carta de desarrollo de Invento");
      }
    }

    switch(rss){
      case "ore":
        if(G.resourcesDeck.ore > 0){
          cPlayer.resources.ore++;
          G.resourcesDeck.ore--;
        }
        else{
          alert("No queda mineral en el deck, por lo que no robas");
        }
        break;
      case "grain":
        if(G.resourcesDeck.grain > 0){
          cPlayer.resources.grain++;
          G.resourcesDeck.grain--;
        }
        else{
          alert("No queda grano en el deck, por lo que no robas");
        }
        break;
      case "wool":
        if(G.resourcesDeck.wool > 0){
          cPlayer.resources.wool++;
          G.resourcesDeck.wool--;
        }
        else{
          alert("No queda lana en el deck, por lo que no robas");
        }
        break;
      case "brick":
        if(G.resourcesDeck.brick > 0){
          cPlayer.resources.brick++;
          G.resourcesDeck.brick--;
        }
        else{
          alert("No queda ladrillo en el deck, por lo que no robas");
        }
        break;
      case "lumber":
        if(G.resourcesDeck.lumber > 0){
          cPlayer.resources.lumber++;
          G.resourcesDeck.lumber--;
        }
        else{
          alert("No queda madera en el deck, por lo que no robas");
        }
        break;
      default:
        throw new Error("Non existing rss in function useInvent");

    }
    
    if(G.countInvent === 1){
      G.devCardUsed = true;
      G.countInvent = 0;
    }
    else{
      G.countInvent = 1;
    }

  }

  function useMonopoly(G, ctx, rss){
    //ESTADO: TERMINADO SIN REVISAR
    //TO-DO: 
    //FUNCION: Usa la carta de desarrollo monopolio

    if(G.devCardUsed === true){
      alert("Solo se puede usar una carta de desarrollo por turno");
      return INVALID_MOVE;
    }

    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.devCards.length === 0){
      alert("No tienes cartas de desarrollo");
      return INVALID_MOVE;
    }

    if(cPlayer.devCards.indexOf("monopoly") === -1){
      alert("No tienes ninguna carta de monopolio");
      return INVALID_MOVE;
    }
    else{
      cPlayer.devCards.splice(cPlayer.devCards.indexOf("monopoly"),1);
    }
    /*
    let newRSS = prompt("Elije: ore, grain, lumber, brick, wool");

    while(newRSS !== "ore" && newRSS !== "grain"  && newRSS !== "lumber" && newRSS !== "brick" && newRSS !== "wool")
      newRSS = prompt("No valido, elije: ore, grain, lumber, brick, wool");

    console.log("El jugador "+cPlayer.name+" usa carta de desarrollo Monopolio con el recurso: "+newRSS);
    */
    stealRssFromPlayers(cPlayer, G, ctx, rss);
    G.devCardUsed = true;
  }

  function stealRssFromPlayers(cPlayer, G, ctx, newRSS){
    //ESTADO: Terminado revisado
    //FUNCION: Roba el recurso elegido de todos los jugadores

    switch(newRSS){
      case "ore":
        for(let i = 0; i< ctx.numPlayers; i++){
          let auxPlayer = G.players[i];
          if(cPlayer.color !== auxPlayer.color){
            while(auxPlayer.resources.ore > 0){
              auxPlayer.resources.ore--;
              cPlayer.resources.ore++;
              console.log("El jugador "+cPlayer.name+" recibe 1 de ore de: "+auxPlayer.name);
            }
          }
        }
        break;
      case "grain":
        for(let i = 0; i< ctx.numPlayers; i++){
          let auxPlayer = G.players[i];
          if(cPlayer.color !== auxPlayer.color){
            while(auxPlayer.resources.grain > 0){
              auxPlayer.resources.grain--;
              cPlayer.resources.grain++;
              console.log("El jugador "+cPlayer.name+" recibe 1 de grain de: "+auxPlayer.name);
            }
          }
        }
        break;
      case "wool":
        for(let i = 0; i< ctx.numPlayers; i++){
          let auxPlayer = G.players[i];
          if(cPlayer.color !== auxPlayer.color){
            while(auxPlayer.resources.wool > 0){
              auxPlayer.resources.wool--;
              cPlayer.resources.wool++;
              console.log("El jugador "+cPlayer.name+" recibe 1 de wool de: "+auxPlayer.name);
            }
          }
        }
        break;
      case "brick":
        for(let i = 0; i< ctx.numPlayers; i++){
          let auxPlayer = G.players[i];
          if(cPlayer.color !== auxPlayer.color){
            while(auxPlayer.resources.brick > 0){
              auxPlayer.resources.brick--;
              cPlayer.resources.brick++;
              console.log("El jugador "+cPlayer.name+" recibe 1 de brick de: "+auxPlayer.name);
            }
          }
        }
        break;
      case "lumber":
        for(let i = 0; i< ctx.numPlayers; i++){
          let auxPlayer = G.players[i];
          if(cPlayer.color !== auxPlayer.color){
            while(auxPlayer.resources.lumber > 0){
              auxPlayer.resources.lumber--;
              cPlayer.resources.lumber++;
              console.log("El jugador "+cPlayer.name+" recibe 1 de lumber de: "+auxPlayer.name);
            }
          }
        }
        break;
      default:
        throw new Error("Non existing rss in function stealRssFromPlayers");
  }
  }

  function useRoadBuild(G, ctx){
    //ESTADO: EN PROCESO
    //TO-DO: interfaz
    //FUNCION: Usa la carta de desarrollo carreteras

    if(G.devCardUsed === true){
      alert("Solo se puede usar una carta de desarrollo por turno");
      return INVALID_MOVE;
    }

    let cPlayer = G.players[ctx.currentPlayer];

    if(cPlayer.devCards.length === 0){
      alert("No tienes cartas de desarrollo");
      return INVALID_MOVE;
    }

    if(cPlayer.devCards.indexOf("roadsBuild") === -1){
      alert("No tienes ninguna carta de carreteras");
      return INVALID_MOVE;
    }
    else{
      cPlayer.devCards.splice(cPlayer.devCards.indexOf("roadsBuild"),1);
      console.log("El jugador "+cPlayer.name+" usa la carta de desarrollo de Carreteras");
    }

    alert("Debes construir dos carreteras con los recursos que se te han dado para continuar")
    G.roadsToBuild = 2;
    cPlayer.resources.brick += 2;
    cPlayer.resources.lumber += 2;
    ctx.events.setActivePlayers({currentPlayer: 'buildRoadCard'});
    /*
    for(let i=0; i<2; i++){
      let valido = false;
      while(!valido){
        let newID = prompt("Introduce el id de la carretera "+i+": ");
        newID = parseInt(newID);
        if(newID > 71 || newID < 0)
          alert("ID fuera de rango");
        else{
          if(buildFirstRoad(G,ctx,newID) !== INVALID_MOVE)
            valido = true;
        }
      }
    }*/

    G.devCardUsed = true;
  }


  //FUNCION DE ESTADO INICIAL

  function createInitialState(ctx){
    //ESTADO: EN PROCESO
    //TO-DO: 
    //FUNCION: Crea el estado inicial de G

    var locations = ["Hills", "Hills", "Hills",
    "Forest", "Forest", "Forest", "Forest",
    "Mountains", "Mountains", "Mountains",
    "Fields", "Fields", "Fields", "Fields",
    "Pasture", "Pasture", "Pasture", "Pasture",
    "Dessert"];

    // Make a list with the right number of each tile value
    var values = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

    // Randomly shuffle the location array and the values array
    locations = shuffle(locations);
    values = shuffle(values);
    var terrainPlaces = [];
    var intersectionPlaces = [];
    var roadPlaces = [];
    let valIndex = 0;

    //CARTAS DE DESARROLLO
    var cards = ["knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight","knight",
    "victoryPoint","victoryPoint","victoryPoint","victoryPoint","victoryPoint","monopoly","monopoly","invent", "invent", "roadsBuild", "roadsBuild"];

    cards = shuffle(cards);

    let firstRobber = -1; //para la primera posicion del ladron (desierto)

    //JUGADORES

    function askName(i){
      let newName = prompt("Escoge nombre para el jugador :"+i)
      return newName
    }

    function getColour(i){
      let colors = ["red", "blue", "green", "white"];
      return colors[i];
    }

    let getPlayers = [];

    for(let i=0; i<ctx.numPlayers; i++){
      let newPlayer = {
        //name : askName(i),
        id: i,
        name : "player_"+i,
        color : getColour(i),
        points : 0,
        biggestRoad : 0, //falta modificar esto
        longestRoad : false,
        usedKnights : 0,
        largestArmy : false,
        devCards : [],
        resources : {
            brick: 0,
            lumber: 0,
            ore: 0,
            grain: 0,
            wool: 0
        },
        ownedTiles : [],
        settlements : [],
        cities : [],
        roads : [],
      }

      getPlayers.push(newPlayer);
      //alert(getPlayers.length+" de longitud");
    }

    //CASILLAS DE RECURSOS
    for(let i=0; i<19; i++){
      let cell ;
      if(locations[i] === "Dessert"){
        cell = {
          id: i,
          tile: locations[i],
          rss: rssFromTile(locations[i]),
          number: 0,
          robber: true,
        }
        firstRobber = i;
      }
      else {
        cell = {
          id: i,
          tile: locations[i],
          rss: rssFromTile(locations[i]),
          number: values[valIndex],
          robber: false,
        }
        valIndex++;
      }
      terrainPlaces.push(cell);
    }

    //INTERSECCIONES
    for(let i=0; i<54; i++){
      let cell;
      cell = placeData[i];
      intersectionPlaces.push(cell);
    }

    //CARRETERAS
    for(let i=0; i<72; i++){
      let cell;
      cell = roadData[i];
      roadPlaces.push(cell);
    }

    return {
        
        diceValue: 0 ,
        robberPos: firstRobber,
        longestRoadId: -1,
        largestArmyId: -1,
        devCardUsed: false,
        selectPlayers: [],
        roadsToBuild: 0,
        countInvent: 0,

        players: getPlayers,

        resourcesDeck : {
          brick: 19,
          lumber: 19,
          ore: 19,
          grain: 19,
          wool: 19
        },

        devCardsDeck: cards,

        terrainCells: terrainPlaces,
        roadCells: roadPlaces,
        placeCells: intersectionPlaces
        
        
        
    }
    
  };

  // FUNCIONES DE ORGANIZACION DEL JUEGO
  
  function IsVictory(G, ctx) {
    //ESTADO: EN PROCESO
    //TO-DO: MEJORAR LA INTERFAZ DEL GANADOR (MENSAJE)
    //FUNCIÓN: Comprueba si alguien ha llegado al objetivo de puntuacion
    
    let finish = false;
  
    for(let i=0; i< ctx.numPlayers; i++){
      /*
      let playerID = 'player_' + i;
      let cPlayer = G[playerID];
      */
      let cPlayer = G.players[i];
  
      if (cPlayer.points >= 10){
        finish = true;
        alert("El jugador "+ i +" ha conseguido 10 puntos, se acabo")
        break;
      }
    }
  
    return finish;
  }


