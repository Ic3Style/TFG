import { INVALID_MOVE } from 'boardgame.io/core';
//import Player, { CatanPlayer } from "./Player.js";
//import { Location } from "./Location.js";
import { roadData } from "./roadData.js";

export const Catan = {
    setup: (ctx) => createInitialState(),
    
    turn: {
        moveLimit: 5, //realmente no tiene limite
      },

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
        buildSettlement: (G, ctx, id) => {

        },
        buildCity: (G, ctx, id) => {

        },
        buyCard: () => {},

        trade: () => {},
        placeRobber: () => {},
        selectPlayer: () => {},
        discard: () => {},
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

  function buildRoad (G, ctx, id){

    let playerID = 'player_' + ctx.currentPlayer;
    let cPlayer = G[playerID];
    alert("cPlayer v1 es: "+cPlayer)

    if(cPlayer.resources.lumber < 1 || cPlayer.resources.brick <1){
      alert("No tienes suficientes recursos");
      return INVALID_MOVE;
    }

    if(G.roadCells[id].value !== -1){
      alert("La carretera ya tiene dueño");
      return INVALID_MOVE;
    }

    if(checkRoadBuild(G, cPlayer, id) === false){
      alert("No tienes conexion con esa casilla de carretera");
      return INVALID_MOVE;
    }

    // 1 de madera y 1 de arcilla
    G.roadCells[id] = ctx.currentPlayer;
    cPlayer.resources.brick--;
    cPlayer.resources.lumber--;

    return 1;
  }

  function checkRoadBuild(G, cPlayer, id){
    alert("cPlayer v2 es: "+cPlayer)
    //primero busca en los pueblos/ciudades
    for(let i=0; i<cPlayer.settlements.length; i++){
      if(cPlayer.settlements[i] === G.roadCells[id].to || cPlayer.settlements[i] === G.roadCells[id].from)
        return true;
    }
    for(let i=0; i<cPlayer.cities.length; i++){
      if(cPlayer.cities[i] === G.roadCells[id].to || cPlayer.cities[i] === G.roadCells[id].from)
        return true;
    }
    //ahora mira si tiene conectadas carreteras del mismo jugador
    //ERROR AQUI
    return true;
  }

  //Devuelve el recurso de la casilla de terreno correspondiente
  function rssFromTile(tile){

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
      if(i<3){
        cell = {
          id: i,
          type: -1, //-1: nada; 0:pueblo; 1:ciudad
          owner: -1,
          nearTo: [i+3, i+4]
        }
     }
     else if(i === 3){ 
        cell = {
          id: i,
          type: -1, //-1: nada; 0:pueblo; 1:ciudad
          owner: -1,
          nearTo: [i-3, i+4]
        }
      }
    else if(i < 6){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i-3, i+4]
      }
    }
    else if(i === 6){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+4]
      }
    }
    else if(i < 11){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+4, i+5]
      }
    }
    else if(i === 11){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+5]
      }
    }
    else if(i < 15){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i-4, i+5]
      }
    }
    else if(i === 15){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+5]
      }
    }
    else if(i < 21){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+5, i+6]
      }
    }
    else if(i === 21){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+6]
      }
    }
    else if(i < 26){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-6, i-5, i+6]
      }
    }
    else if(i < 28){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-6, i+6]
      }
    }
    else if(i < 32){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-6, i+5, i+6]
      }
    }
    else if(i === 32){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-6, i+5]
      }
    }
    else if(i < 38){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-6, i-5, i+5]
      }
    }
    else if(i === 38){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+5]
      }
    }
    else if(i < 42){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+4, i+5]
      }
    }
    else if(i === 42){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i+4]
      }
    }
    else if(i < 47){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-5, i-4, i+4]
      }
    }
    else if(i === 47){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+4]
      }
    }
    else if(i < 50){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+3, i+4]
      }
    }
    else if(i === 50){
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i+3]
      }
    }
    else {
      cell = {
        id: i,
        type: -1, //-1: nada; 0:pueblo; 1:ciudad
        owner: -1,
        nearTo: [i-4, i-3]
      }
    }

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
          ownedTiles : new Array(19 + 1).join('0').split('').map(parseFloat),
          settlements : [],
          cities : [],
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
          ownedTiles : new Array(19 + 1).join('0').split('').map(parseFloat),
          settlements : [],
          cities : [],
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
        placeCells: intersectionPlaces,
        diceValue: 0 
        
    }
    
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
  function diceRoll() {
    // Sum two dice rolls 1-6
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    };


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