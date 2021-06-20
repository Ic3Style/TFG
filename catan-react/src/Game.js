import { INVALID_MOVE } from 'boardgame.io/core';
//import Player, { CatanPlayer } from "./Player.js";
//import { Location } from "./Location.js";
import { roadData } from "./roadData.js";
import { placeData } from "./placeData.js";

export const Catan = {
    setup: (ctx) => createInitialState(),
 /*   
    turn: {
        moveLimit: 5, //realmente no tiene limite
      },
*/
    moves: {
        clickCell: (G, ctx, id) => { //este hay que borrarlo
            if (G.cells[id] !== null) {
              return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
          },
          
        diceRoll: (G) => {
            let roll = diceRoll();
            G.diceValue = roll;
        },
        buildRoad,

        addRss: (G, ctx) => { //ADMIN ACTION
          let playerID = 'player_' + ctx.currentPlayer;
          let cPlayer = G[playerID];

          cPlayer.resources.lumber ++;
          cPlayer.resources.brick ++;
          cPlayer.resources.ore ++;
          cPlayer.resources.wool ++;
          cPlayer.resources.grain ++;
        }
        , 
        
        
        buildFirstSettlement,
        buildSettlement,
        /*
        },
        buildCity: (G, ctx, id) => {

        },
        buyCard: () => {},

        trade: () => {},
        placeRobber: () => {},
        selectPlayer: () => {},
        discard: () => {},
        */
    },

    //HAY QUE MODIFICARLO   
 /*
    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
          return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
          return { draw: true };
        }
      },
*/
  };


  function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function buildFirstSettlement (G, ctx, id){
    //ESTADO: TERMINADA NO REVISADA
    //FUNCION: Construye los primeros pueblos sin coste al inicio del juego

    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];

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

    for(let i = 0; i<G.placeCells[id].tiles.length; i++){
      let id_t = G.placeCells[id].tiles[i];
      cPlayer.ownedTiles.push(G.terrainCells[id_t]);
    }
    cPlayer.points++;    
  }

  function buildSettlement (G, ctx, id){
    //ESTADO: EN PROCESO
    //TO-DO: LIMITACION DE 5 PUEBLOS
    //FUNCION: Construye un pueblo con las reglas normales del juego en la localizacion id

    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];

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

    for(let i = 0; i<G.placeCells[id].tiles.length; i++){
      let id_t = G.placeCells[id].tiles[i];
      cPlayer.ownedTiles.push(G.terrainCells[id_t]);
    }
    
    cPlayer.points++;    
  }


  function buildRoad (G, ctx, id){
    //ESTADO: EN PROCESO
    //TO-DO: LIMITACION DE NUMERO DE CARRETERAS
    //FUNCIÓN: Construye una carretera siguiendo las reglas del juego en la carretera id

    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];

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

    //Coste 1 de madera y 1 de arcilla
    G.roadCells[id].value = ctx.currentPlayer;
    cPlayer.roads.push(G.roadCells[id]);
    cPlayer.resources.brick--;
    cPlayer.resources.lumber--;

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
        throw new Error("Non existing rss");
    }

    return rss;
    }

  function createInitialState(){
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

    //CASILLAS DE RECURSOS
    for(let i=0; i<19; i++){
      let cell ;
      if(locations[i] === "Dessert")
        //cell = new Location(i, locations[i], 0, 0, 0); //x e y nulas de momento
        cell = {
          id: i,
          tile: locations[i],
          rss: rssFromTile(locations[i]),
          number: 0,
          x: 0,
          y: 0
        }
      else {
        //cell = new Location(i, locations[i], values[valIndex], 0, 0); //x e y nulas de momento
        cell = {
          id: i,
          tile: locations[i],
          rss: rssFromTile(locations[i]),
          number: values[valIndex],
          x: 0, //valdran para la interfaz
          y: 0
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
       
        cells: Array(9).fill(null), //este hay que borrarlo
        
        //players: createPlayers(ctx),
        /*
        player1: new CatanPlayer('player1', 'red'),
        player2: new CatanPlayer('player2', 'blue'),
        */
        diceValue: 0 ,
     
        player_0: {
          name : 'player_0',
          color : 'red',
          points : 0,
          longestRoad : false,
          largestArmy : false,
          devCards : [],
          resources : {
              brick: 3,
              lumber: 2,
              ore: 0,
              grain: 0,
              wool: 0
          },
          //ownedTiles : new Array(19 + 1).join('0').split('').map(parseFloat),
          ownedTiles : [],
          settlements : [],
          cities : [],
          roads : [],
        },
        
        player_1: {
          name : 'player_1',
          color : 'blue',
          points : 0,
          longestRoad : false,
          largestArmy : false,
          devCards : [],
          resources : {
              brick: 0,
              lumber: 0,
              ore: 0,
              grain: 0,
              wool: 0
          },
          //ownedTiles : new Array(19 + 1).join('0').split('').map(parseFloat),
          ownedTiles : [],
          settlements : [],
          cities : [],
          roads : [],
        },

        resourcesDeck : {
          brick: 19,
          lumber: 19,
          ore: 19,
          grain: 19,
          wool: 19
        },

        terrainCells: terrainPlaces,
        roadCells: roadPlaces,
        placeCells: intersectionPlaces
        
        
    }
    
  };

  function diceRoll() {
    //ESTADO: TERMINADA REVISADA
    //FUNCION: Suma dos dados con valor posible 1-6 

    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    };
    
/*
  function createPlayers(ctx){

    let players = [];
    for (let i=0; i< ctx.numPlayers; i++){
      let name = `player`+i;
      let player = new CatanPlayer(name, null); 
      players.push(player);
    }

    return players;
  }
*/



/*
    //HAY QUE MODIFICAR ESTAS FUNCIONES
  function IsVictory(cells) {
    const positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  
    const isRowComplete = row => {
      const symbols = row.map(i => cells[i]);
      return symbols.every(i => i !== null && i === symbols[0]);
    };
  
    return positions.map(isRowComplete).some(i => i === true);
  }
  
  // Return true if all `cells` are occupied.
  function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
  }
 */ 