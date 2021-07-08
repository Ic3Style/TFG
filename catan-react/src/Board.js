import React ,{useState , useEffect}from 'react';
import "./assets/css/Board.css";
import { INVALID_MOVE } from 'boardgame.io/core';

import testImg from "./assets/images/forest.png";

import circulo from "./assets/images/circulo2.png";

import card_brick from "./assets/images/card_brick.png";
import card_lumber from "./assets/images/card_lumber.png";
import card_ore from "./assets/images/card_ore.png";
import card_wool from "./assets/images/card_wool.png";
import card_grain from "./assets/images/card_grain.png";

import card_knight from "./assets/images/card_knight.png";
import card_invent from "./assets/images/card_invent.png";
import card_monopoly from "./assets/images/card_monopoly.png";
import card_vPoint from "./assets/images/card_vPoint1.png";

import carr_b from "./assets/images/carr_b2.png";
import carr_a from "./assets/images/carr_a2.png";
import carr_v from "./assets/images/carr_v2.png";
import carr_r from "./assets/images/carr_r2.png";

import pob_b from "./assets/images/pob_a.png";
import pob_a from "./assets/images/pob_a.png";
import pob_v from "./assets/images/pob_a.png";
import pob_r from "./assets/images/pob_a.png";

import city_b from "./assets/images/city_b.png";
import city_a from "./assets/images/city_a.png";
import city_v from "./assets/images/pob_a.png";
import city_r from "./assets/images/pob_a.png";

import Casilla from "./components/Casilla";

//TO-DO: tabla con estado del juego
//OPTIONAL TO-DO: ROTAR VPOINTS

<script src= "Game.js"></script>

export function setImgRoad(G, ctx, id){
  let player = ctx.currentPlayer;
  let color = G.players[player].color;
  let nCarr = G.players[player].roads.length;
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
}

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

      function getCoords(){ //funcion no necesaria
        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Obtiente las coordenadas del primer hexagono del tablero

        let element = document.getElementById(0);
        let top = element.getBoundingClientRect().top;
        let left = element.getBoundingClientRect().left;
        console.log(top, left)
      }

      function ithrowDice(){
        hideCirCarr();
        hideCirInter();
        props.moves.throwDice();
      }

      function ibuyDevCard(){
        hideCirCarr();
        hideCirInter();
        props.moves.buyDevCard()
      }

      function showCirInter(){

        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Muestra los circulos de las intersecciones

        hideCirCarr();

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

      function hideCirInter(){
        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Esconde los circulos de las intersecciones

        let elements = document.querySelectorAll('.circulos_inter');
        for(let i=0; i<elements.length; i++){
            elements[i].style.display = "none";
        }
      }

      function hideCirCarr(){
        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Esconde los circulos de las carreteras

        let elements = document.querySelectorAll('.circulos_carr');
        for(let i=0; i<elements.length; i++){
            elements[i].style.display = "none";
        }
      }

      function showCirCarr(){

        //ESTADO: TERMINADO SIN REVISAR
        //TO-DO: 
        //FUNCION: Muestra los circulos de las carreteras

        hideCirInter();

        let firstHex = document.getElementById(0);
        let secHex = document.getElementById(1);
        let cuaHex = document.getElementById(3);
        let top1 = firstHex.getBoundingClientRect().top;
        let top2 = cuaHex.getBoundingClientRect().top;
        let left1 = firstHex.getBoundingClientRect().left;
        let left2 = secHex.getBoundingClientRect().left;

        let horDist = left2 - left1;
        let verDist = top2 - top1;

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
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i-11)+ 'px';
          modImg.style.top = 38 + verDist + 'px';
        }

        for (let i = 18; i < 23; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist)*(i-19) + horDist/4+ 'px';
          modImg.style.top = 38 + verDist + verDist/2 + 'px';
        }

        for (let i = 23; i < 33; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i-25)+ 'px';
          modImg.style.top = 38 + 2*verDist + 'px';
        }

        for (let i = 33; i < 39; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist)*(i-34) - horDist/4+ 'px';
          modImg.style.top = 38 + 2*verDist + verDist/2 + 'px';
        }

        for (let i = 39; i < 49; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i-41)+ 'px';
          modImg.style.top = 38 + 3*verDist + 'px';
        }

        for (let i = 49; i < 54; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist)*(i-50) + horDist/4+ 'px';
          modImg.style.top = 38 + 3*verDist + verDist/2 + 'px';
        }

        for (let i = 54; i < 62; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i-55)+ 'px';
          modImg.style.top = 38 + 4*verDist + 'px';
        }

        for (let i = 62; i < 66; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist)*(i-62) - horDist/4+ 'px';
          modImg.style.top = 38 + 4*verDist + verDist/2 + 'px';
        }

        for (let i = 66; i < 72; i++) {
          let modImg = document.getElementById(cir_carr_imgs[i].props.id);
          modImg.style.left = 217+ (horDist/2)*(i-66)+ 'px';
          modImg.style.top = 38 + 5*verDist + 'px';
        }

        let elements = document.querySelectorAll('.circulos_carr');
        for(let i=0; i<elements.length; i++){
            elements[i].style.display = "flex";
            elements[i].style.position = "absolute";
        }
      }
      
      function onclickEND() {
        hideCirCarr();
        hideCirInter();
        props.moves.endTurn()
      }

      function ibuildSettlement(id){
        //ESTADO: EN PROCESO
        //TO-DO: MODIFICAR ESTADO PARA ACTUALIZAR LAS FIGURAS DEL MAPA
        //FUNCION: Ejecuta la accion de crear pueblo y hace desaparecer los circulos
        
        if(props.ctx.phase === "firstBuilds")
          props.moves.buildFirstSettlement(id);
        else
        props.moves.buildSettlement(id);
        
        hideCirInter();
      }

      function setImgRoad(id){
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
      }


      function ibuildRoad(id){
        //ESTADO: EN PROCESO
        //TO-DO: MODIFICAR ESTADO PARA ACTUALIZAR LAS FIGURAS DEL MAPA
        //FUNCION: Ejecuta la accion de crear pueblo y hace desaparecer los circulos
        if(props.ctx.phase === "firstBuilds"){
            props.moves.buildFirstRoad(id);
        }
        else
          props.moves.buildRoad(id);
          
        hideCirCarr()
      }

      function iuseKnight(){
        hideCirCarr();
        hideCirInter();
        props.moves.useKnight()
      }

      function iuseMonopoly(){
        hideCirCarr();
        hideCirInter();
        props.moves.useMonopoly()
      }

      function iuseInvent(){
        hideCirCarr();
        hideCirInter();
        props.moves.useInvent()
      }

      //Coge las cartas de rss del jugador y las muestra por pantalla

      let playerCards = [];

      for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.brick; i++){
        playerCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Brick_${i}`} src={card_brick} />);
      }
      for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.lumber; i++){
        playerCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Lumber_${i}`} src={card_lumber} />);
      }
      for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.wool; i++){
        playerCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Wool_${i}`} src={card_wool} />);
      }
      for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.ore; i++){
        playerCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Ore_${i}`} src={card_ore} />);
      }
      for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.grain; i++){
        playerCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Grain_${i}`} src={card_grain} />);
      }

      //Coge las cartas de dev del jugador y las muestra por pantalla

      let devCards = [];

      for(let i=0; i<props.G.players[props.ctx.currentPlayer].devCards.length; i++){
        let actCard = props.G.players[props.ctx.currentPlayer].devCards[i];
        if(actCard === "knight")
          devCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Knight_${i}`} src={card_knight} onClick={() => iuseKnight()}/>);
        else if(actCard === "monopoly")
          devCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Monopoly_${i}`} src={card_monopoly} onClick={() => iuseMonopoly()}/>);
        else if(actCard === "invent")
          devCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}Invent_${i}`} src={card_invent} onClick={() => iuseInvent()}/>);
        else
        devCards.push( <img className="rssCard" id={`c${props.ctx.currentPlayer}vPoint_${i}`} src={card_vPoint} />);
      }


      let uniqueID = 0;
      let tbody = [];

      let barra =  
      <div className="barraAcciones">
        <div className="cartasPlayer"> 
          {playerCards}
        </div>
        <div className="devCards">
          {devCards}
        </div>
        <div className="acciones"> 
          <div className="icon" id="throwDice" onClick={() => ithrowDice()}>
              tDice
          </div>
          <div className="icon" id="buildSet" onClick={() => showCirInter()}>
              buildS
          </div>
          <div className="icon" id="buildCity" >
              buildC
          </div>
          <div className="icon" id="buildRoad"  onClick={() => showCirCarr()}>
              buildR
          </div>
          <select className="icon" id="useDev">
              Select Dev
              <option>Invent</option>
              <option onClick={() => showCirInter()}>Monopoly</option> 
              <option>Knight</option>
          </select>
          <div className="icon" id="buyDev" onClick={() => ibuyDevCard()}>
              buyDev
          </div>
          <div className="icon" id="trade" >
              trade
          </div>
          <div className="icon" id="endTurn" >
              endTurn
          </div> 
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
      let carr_v_arr = [];
      let carr_b_arr = [];
      let carr_a_arr = [];
      let carr_r_arr = [];

      //circulos para las intersecciones
      for (let i = 0; i < 54; i++) {
        cir_imgs.push(
          <img className="circulos_inter" id={`cirI_${i}`} src={circulo} onClick={() => ibuildSettlement(i)}/>
        );
      }
      //circulos para las carreteras
      for (let i = 0; i < 72; i++) {
        cir_carr_imgs.push(
          <img className="circulos_carr" id={`cirC_${i}`} src={circulo} onClick={() => ibuildRoad(i)}/>
        );
      }

      //carreteras rojas
      for (let i = 0; i < 15; i++){
        carr_r_arr.push(
          <img className="img_carr" id={`carrR_${i}`} src={carr_r}/>
        );
      }
      //carreteras azules
      for (let i = 0; i < 15; i++){
        carr_a_arr.push(
          <img className="img_carr" id={`carrA_${i}`} src={carr_a}/>
        );
      }
      //carreteras verdes
      for (let i = 0; i < 15; i++){
        carr_v_arr.push(
          <img className="img_carr" id={`carrV_${i}`} src={carr_v}/>
        );
      }
      //carreteras blancas
      for (let i = 0; i < 15; i++){
        carr_b_arr.push(
          <img className="img_carr" id={`carrB_${i}`} src={carr_b}/>
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

          <img className="img_carr" id={"testtt"} src={carr_b}/>        

          <table id="board">
            <tbody className={"tablero"}>{tbody}</tbody>
          </table>

          {barra}

          {cir_imgs}  
          {cir_carr_imgs}
         
          Aqui se pone info de la partida y cartas
          1 - Array con la representacion de la interseccion.
          2 - Manera de calcular la posicion de la interseccion.
          ["o","b",.....]

          {carr_a_arr}
          {carr_b_arr}
          {carr_r_arr}
          {carr_v_arr}

          <img className="testImg" id="testImg" src={testImg}/>
        </div>
      );
    

          /*

                    {<img className="circulo_img" id="circuloimg" src={circulo}/>}

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