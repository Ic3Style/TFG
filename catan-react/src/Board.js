import React ,{useState , useEffect}from 'react';
import "./assets/css/Board.css";
import circulo from "./assets/images/circulo2.png";
import Casilla from "./components/Casilla";

<script src= "Game.js"></script>

export default function Board(props) {
    const [arrInter, setArrInter] = useState(["o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o"]);
    const [state, setstate] = useState(true);
    /* useEffect(() => {
          let arrayTemp=[];
          for (let i=0; i<=5; i++){
            for(let j=0; j<=3; j++){
              arrayTemp.push("o")
            }
          }
          setArrVertice(arrayTemp)
     }, []);
     useEffect(() => {
        let arrayTemp=[];
        for (let i=0; i<=5; i++){
          for(let j=0; j<=3; j++){
            arrayTemp.push("o")
          }
        }
        setArrVertice(arrayTemp)
      }, [state]);
      */
      /*
      document.addEventListener("DOMContentLoaded", inicio, false); 
      function inicio() 
      { 
      var nuevaImagen = new Image(); 
      alert("Se procede a la carga en memoria de la imagen"); 
      nuevaImagen = cargarImagen("./assets/images/circulo.png"); 
      } 
      function cargarImagen(url) 
      { 
      var imagen = new Image(); 
      imagen.onload = imagenCargada; 
      imagen.src = url; 
      return imagen; 
      } 
      function imagenCargada() 
      { 
      alert("La imagen se ha cargado correctamente"); 
      } 
      */
      function onclickEND() {
        props.moves.endTurn()
      }

      let uniqueID = 0;
      let tbody = [];

      let barra =  
      <div className="barraAcciones">
        <div className="icon" id="throwDice" onClick={() => props.moves.throwDice()}>
            tDice
        </div>
        <div className="icon" id="buildSet">
            buildS
        </div>
        <div className="icon" id="buildRoad">
            buildR
        </div>
        <select className="icon" id="buildCity">
        <option></option>
            <option>Casa</option>
            <option>Puente</option>
        </select>
        <div className="icon" id="buyDev" onClick={() => props.moves.buyDevCard()}>
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

            cells.push( 
                <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile}/>
            );
            uniqueID++;

          }
        else if(i===1 || i===3)
          for (let j = 0; j < 4; j++) {
  
            cells.push( 
              <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile}/>
            );
            uniqueID++;

          }
        else{
          for (let j = 0; j < 5; j++) {

                cells.push(
                <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile}/>
            );
            uniqueID++;

          }
        }

        tbody.push(<tr key={i.toString()} className={`fila_${i}`}>{cells}</tr>);
      }
      
      function handleInterClick(index){
        console.log(index)
      }
      return (
        <div>
           {
          arrInter?.map((element, index) =>{
            return(
              <button onClick={()=>handleInterClick(index)}>{element}</button>
            )
              
          })}
          <table id="board">
            <tbody className={"tablero"}>{tbody}</tbody>
          </table>

          {barra}
         

          {<img className="circulo_img" id="circuloimg" src={circulo}/>}
         
          Aqui se pone info de la partida y cartas
          1 - Array con la representacion de la interseccion.
          2 - Manera de calcular la posicion de la interseccion.
          ["o","b",.....]
        </div>
      );
    

          /*
          state.cadenaTexto.map((elemento)=>{
            // Posicion
            // CalculaVertices
            // Relacion de posiciones
            //array = [[100, 120], [100, 140]]
            //if(elemento == "b"){
            //  return(<img src={circulo}/>)
            //}
           
          })
          */



}