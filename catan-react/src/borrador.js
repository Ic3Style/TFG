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

/*ANTIGUO TABLERO*/
  /*
for (let i = 0; i < 5; i++) {
let cells = [];
for (let j = 0; j < 5; j++) {
  const id = 5 * i + j;
  cells.push( //he quitado el onclick
    <td style={cellStyle} key={id} onClick = {this.props.G.moves.endTurn()}> 
      {this.props.G.cells[id]}
    </td>
  );
}
tbody.push(<tr key={i}>{cells}</tr>);
}

        const cellStyle = {
          border: '1px solid #555',
          width: '50px',
          height: '50px',
          lineHeight: '50px',
          textAlign: 'center',
        };
*/
/*estaba en board pero no se utilizaba

function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  ///he quitado el clickHandler
  // Make a list with the right number of each tile
  var locations = ["Hills", "Hills", "Hills",
  "Forest", "Forest", "Forest", "Forest",
  "Mountains", "Mountains", "Mountains",
  "Fields", "Fields", "Fields", "Fields",
  "Pasture", "Pasture", "Pasture", "Pasture",
  "Dessert"];

  // Make a list with the right number of each tile value
  var values = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];

  // Randomly shuffle the location array and the values array
  locations = shuffle(locations);
  values = shuffle(values);

  */


  /*
  let player = props.ctx.currentPlayer;
        let color = props.G.players[player].color;
        let nCarr = props.G.players[player].roads.length;
        let img;

        let circ_img = document.getElementById(`cirC_${id}`);


        switch(color){
          case "red":
            img = document.getElementById(`carrR_${nCarr}`);
            break;
          case "blue":
            img = document.getElementById(`carrA_${nCarr}`);
            break;
          case "green":
            img = document.getElementById(`carrV_${nCarr}`);
            break;
          case "white":
            img = document.getElementById(`carrB_${nCarr}`);
            break;
          default:
            alert("ERROR EN ibuildRoad");
            break;
        }

        let left = circ_img.getBoundingClientRect().left;
        let top =  circ_img.getBoundingClientRect().top;
          //seguir con esto, se debe solo hacer si no se devuelve Invalid move

        img.style.display = "flex";
        img.style.position = "absolute";

        img.style.left = left-1+"px";
        img.style.top = top+20+"px";

        if(id===0 || id===2 ||id===4 ||id===10 ||id===12 ||id===14 ||id===16 ||id===23 ||id===25 ||id===27 ||id===29 ||id===31 ||id===40 ||id===42 ||id===44 ||id===46 ||id===48 ||id===55 ||id===57 ||id===59 ||id===61 ||id===67 ||id===69 ||id===71){
          img.style.transform = "rotate(-30deg)";
        }
        else if(id===1 || id===3 ||id===5 ||id===11 ||id===13 ||id===15 ||id===17 ||id===24 ||id===26 ||id===28 ||id===30 ||id===32 ||id===39 ||id===41 ||id===43 ||id===45 ||id===47 ||id===54 ||id===56 ||id===58 ||id===60 ||id===66 ||id===68 ||id===70){
          img.style.transform = "rotate(+30deg)";
        }
  */


/*
  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 43.30px solid #64C7CC;
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 43.30px solid #64C7CC;
  }*/