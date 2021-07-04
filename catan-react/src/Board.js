import React from 'react';
import "./assets/css/Board.css";
import ImageBosque from "./assets/images/bosque.png";
import Casilla from "./components/Casilla";

<script src= "Game.js"></script>

export class CatanBoard extends React.Component {

    render() {

      function onclickEND() {
        this.props.moves.endTurn()
      }

      let uniqueID = 0;
      let tbody = [];

      let barra =  
      <div className="barraAcciones">
        <div className="icon" id="throwDice" onClick={() => this.props.moves.throwDice()}>
            tDice
        </div>
        <div className="icon" id="buildSet">
            buildS
        </div>
        <div className="icon" id="buildRoad">
            buildR
        </div>
        <div className="icon" id="buildCity">
            buildC
        </div>
        <div className="icon" id="buyDev" onClick={() => this.props.moves.buyDevCard()}>
            buyDev
        </div>
        <div className="icon" id="trade">
            trade
        </div>
        <div className="icon" id="endTurn" >
            endTurn
        </div>
      </div>;

      
      for (let i = 0; i < 5; i++) {

        let cells = [];
        if(i===0 || i===4)
          for (let j = 0; j < 3; j++) {   

            cells.push( //he quitado el onclick
                <Casilla uniqueID={uniqueID} idNumber ={this.props.G.terrainCells[uniqueID].number}/>
            );
            uniqueID++;

          }
        else if(i===1 || i===3)
          for (let j = 0; j < 4; j++) {
  
            cells.push( //he quitado el onclick
              <Casilla uniqueID={uniqueID} idNumber ={this.props.G.terrainCells[uniqueID].number}/>
            );
            uniqueID++;

          }
        else{
          for (let j = 0; j < 5; j++) {

                cells.push( //he quitado el onclick
                <Casilla uniqueID={uniqueID} idNumber ={this.props.G.terrainCells[uniqueID].number} tile ={this.props.G.terrainCells[uniqueID].tile}/>
            );
            uniqueID++;

          }
        }

        tbody.push(<tr key={i} className={`fila_${i}`}>{cells}</tr>);
      }
      

      return (
        <div>
          <table id="board">
            <tbody className={"tablero"}>{tbody}</tbody>
          </table>

          {barra}
          
          <img className="bosque_img" id="bosqueimg" src={ImageBosque}/>
          Aqui se pone info de la partida y cartas
        </div>
      );
    }



}