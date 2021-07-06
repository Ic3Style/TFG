import React ,{useState , useEffect}from 'react';
import "./assets/css/Board.css";
import circulo from "./assets/images/circulo2.png";
import Casilla from "./components/Casilla";

<script src= "Game.js"></script>

export default function Board(props) {
    const [arrInter, setArrInter] = useState(["o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o"]);
    const [arrCarr, setarrCarr] = useState(["o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o","o","o","o","o","o","o","o","o","o", "o"]);
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

      function getCoords(){
        let element = document.getElementById(0);
        let top = element.getBoundingClientRect().top;
        let left = element.getBoundingClientRect().left;
        console.log(top, left)
      }

      function showCirInter(){

        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Muestra los circulos de las intersecciones

        let firstHex = document.getElementById(0);
        let secHex = document.getElementById(1);
        let cuaHex = document.getElementById(3);
        let top1 = firstHex.getBoundingClientRect().top;
        let top2 = cuaHex.getBoundingClientRect().top;
        let left1 = firstHex.getBoundingClientRect().left;
        let left2 = secHex.getBoundingClientRect().left;

        let horDist = left2 - left1;
        let verDist = top2 - top1;
        let verDistPeq = 40;
   
        for(let i = 0; i<3; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 + 49 + horDist*i)+'px';
          modImg.style.top = top1 -68 + 'px';
        }

        for(let i = 3; i<7; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*(i+1))+'px';
          modImg.style.top = top1 - 32+ 'px';
        }

        for(let i = 7; i<11; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-4)+1))+'px';
          modImg.style.top = top1 -32 + verDist - verDistPeq + 'px';
        }

        for(let i = 11; i<16; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-9)+1)) + horDist/2+'px';
          modImg.style.top = top1 -32 + verDist + 'px';
        }

        for(let i = 16; i<21; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-14)+1)) + horDist/2+'px';
          modImg.style.top = top1 -32 + 2*verDist -verDistPeq + 'px';
        }

        for(let i = 21; i<27; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-20)+1)) + horDist+'px';
          modImg.style.top = top1 -32 + 2*verDist + 'px';
        }

        for(let i = 27; i<33; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-26)+1)) + horDist+'px';
          modImg.style.top = top1 -32 + 3*verDist -verDistPeq + 'px';
        }

        for(let i = 33; i<38; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-31)+1)) + horDist/2+'px';
          modImg.style.top = top1 -32 + 3*verDist + 'px';
        }

        for(let i = 38; i<43; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-36)+1)) + horDist/2+'px';
          modImg.style.top = top1 -32 + 4*verDist - verDistPeq + 'px';
        }

        for(let i = 43; i<47; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-40)+1))+'px';
          modImg.style.top = top1 + 4*verDist - 32+ 'px';
        }

        for(let i = 47; i<51; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 -680 + horDist*((i-44)+1))+'px';
          modImg.style.top = top1 + 5*verDist - verDistPeq  - 32+ 'px';
        }

        for(let i = 51; i<54; i++){
          let modImg = document.getElementById(cir_imgs[i].props.id);
          modImg.style.left = (left1 + 49 + horDist*(i-51))+'px';
          modImg.style.top = top1 + 5*verDist + verDistPeq - 74 + 'px';
        }

        let elements = document.querySelectorAll('.circulos_inter');
          for(let i=0; i<elements.length; i++){
              elements[i].style.display = "flex";
              elements[i].style.position = "absolute";
          }
      }

      function showCirCarr(){

        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Muestra los circulos de las intersecciones

        let firstHex = document.getElementById(0);
        let secHex = document.getElementById(1);
        let cuaHex = document.getElementById(3);
        let top1 = firstHex.getBoundingClientRect().top;
        let top2 = cuaHex.getBoundingClientRect().top;
        let left1 = firstHex.getBoundingClientRect().left;
        let left2 = secHex.getBoundingClientRect().left;

        let horDist = left2 - left1;
        let verDist = top2 - top1;
        let verDistPeq = 40;

        /*
        modImg.style.left = (left1 + 49 + horDist*i)+'px';
        modImg.style.top = top1 -68 + 'px';
        */

        for(let i = 0; i<6; i++){
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i)+ 'px';
          modImg.style.top = 38 + 'px';
        }

        for (let i = 6; i < 10; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist)*(i-6) - horDist/4+ 'px';
          modImg.style.top = 38 + verDist/2 + 'px';
        }

        for (let i = 10; i < 18; i++) {
          
        }

        for (let i = 18; i < 23; i++) {
          
        }

        for (let i = 23; i < 33; i++) {
          
        }

        for (let i = 33; i < 39; i++) {
          
        }

        for (let i = 39; i < 49; i++) {
          
        }

        for (let i = 49; i < 54; i++) {
          
        }

        for (let i = 54; i < 62; i++) {
          
        }

        for (let i = 62; i < 66; i++) {
          
        }

        for (let i = 66; i < 72; i++) {
          
        }

        let elements = document.querySelectorAll('.circulos_carr');
        for(let i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
            elements[i].style.position = "absolute";
        }
    }
      
      function onclickEND() {
        props.moves.endTurn()
      }

      function ibuildSettlement(id){
        //ESTADO: EN PROCESO
        //TO-DO: MODIFICAR ESTADO PARA ACTUALIZAR LAS FIGURAS DEL MAPA
        //FUNCION: Ejecuta la accion de crear pueblo y hace desaparecer los circulos
        
        props.moves.buildSettlement(id);
        
        let elements = document.querySelectorAll('.circulos_inter');
          for(let i=0; i<elements.length; i++){
              elements[i].style.display = "none";
          }
      }

      let uniqueID = 0;
      let tbody = [];

      let barra =  
      <div className="barraAcciones">
        <div className="icon" id="throwDice" onClick={() => props.moves.throwDice()}>
            tDice
        </div>
        <div className="icon" id="buildSet" onClick={() => showCirInter()}>
            buildS
        </div>
        <div className="icon" id="buildRoad"  onClick={() => showCirCarr()}>
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

        tbody.push(<tr key={`fKey_${i.toString()}`} className={`fila_${i}`}>{cells}</tr>);
      }
      
      function handleInterClick(index){
        console.log(index)
      }

      let cir_imgs = [];
      let cir_carr_imgs = [];

      //circulos para las intersecciones
      for (let i = 0; i < 54; i++) {
        cir_imgs.push(
          <img className="circulos_inter" id={`cirI_${i}`} src={circulo} onClick={() => ibuildSettlement(i)}/>
        );
      }
      //circulos para las carreteras
      for (let i = 0; i < 72; i++) {
        cir_carr_imgs.push(
          <img className="circulos_carr" id={`cirC_${i}`} src={circulo} />
        );
      }
      //document.getElementById('buttonLED'+id).setAttribute('onclick','writeLED(1,1)')
      
      return (
        <div>

           {
          arrInter?.map((element, index) =>{

            return(
              <button id={`inter_${index}`} onClick={()=>getCoords()}>{element}</button>
            )
              
          })}

          <table id="board">
            <tbody className={"tablero"}>{tbody}</tbody>
          </table>

          {barra}

          {cir_imgs}  
          {cir_carr_imgs}     

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