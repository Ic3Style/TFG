  //DOCUMENTO PARA CODIGO INTERMEDIO O DESCARTADO

//CREACION DE JUGADORES POR FUNCION Y CLASES (NO IBA)

  //players: createPlayers(ctx),
/*
player1: new CatanPlayer('player1', 'red'),
player2: new CatanPlayer('player2', 'blue'),
*/

  /*
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
    */


  /*
player_0: {
  name : 'player_0',
  color : 'red',
  points : 0,
  biggestRoad : 0, //falta modificar esto
  longestRoad : false,
  usedKnights : 0,
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
  //ownedTiles : new Array(19 + 1).join('0').split('').map(parseFloat),
  ownedTiles : [],
  settlements : [],
  cities : [],
  roads : [],
},
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


  //MAIN SIN FASES
      /*
    moves: {
        clickCell: (G, ctx, id) => { //este hay que borrarlo
            if (G.cells[id] !== null) {
              return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
          },
        
        trowDice,
        
        buildFirstRoad,
        buildRoad,

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
        
        buildFirstSettlement,
        buildSettlement,
        buildCity,
        buyDevCard,

        useKnight,
        useInvent,
        useMonopoly,
        useRoadBuild,
        

    },

    //HAY QUE MODIFICARLO   
    
    endIf: (G, ctx) => {
      if (IsVictory(G, ctx)) {
        alert("GAME FINISHED");
        return { winner: ctx.currentPlayer };
      }
    },
    */