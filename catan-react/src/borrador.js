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