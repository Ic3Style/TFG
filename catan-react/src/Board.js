import React ,{useState , useEffect}from 'react';
import "./assets/css/Board.css";

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
import card_rBuild from "./assets/images/card_roadBuild.png";

import carr_b from "./assets/images/carr_b2.png";
import carr_a from "./assets/images/carr_a2.png";
import carr_v from "./assets/images/carr_v2.png";
import carr_r from "./assets/images/carr_r2.png";

import pob_b from "./assets/images/pob_b.png";
import pob_a from "./assets/images/pob_a.png";
import pob_v from "./assets/images/pob_v.png";
import pob_r from "./assets/images/pob_r.png";

import city_b from "./assets/images/city_b.png";
import city_a from "./assets/images/city_a.png";
import city_v from "./assets/images/city_v.png";
import city_r from "./assets/images/city_r.png";

import vPoint from "./assets/images/vPoint.png";
import card_lArmy from "./assets/images/card_largestArmy.png";
import card_lRoad from "./assets/images/card_largestRoad.png";

import cancel from "./assets/images/cancel.png";
import users from "./assets/images/users.png";
import bank from "./assets/images/bank.png";
import dices from "./assets/images/dices.png";
import end from "./assets/images/end.png";
import trade from "./assets/images/trade.png";
import buy_dev from "./assets/images/buyDev.png";
import robber from "./assets/images/robber.png";
import deck from "./assets/images/deck.png";

import Casilla from "./components/Casilla";
/*
import { getName } from 'domutils';
import { func } from 'assert-plus';
import { getDocumentMode } from 'parse5/lib/tree-adapters/default';
*/

<script src= "Game.js"></script>

export function setImgRoad(G, ctx, id){
  //ESTADO: TERMINADA SIN REVISAR
  //TO-DO: 
  //FUNCION: Muestra la img de la carretera correspondiente

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
      alert("ERROR EN setImgRoad");
      break;
  }

  let left = circ_img.getBoundingClientRect().left;
  let top =  circ_img.getBoundingClientRect().top;

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

export function setImgSet(G, ctx, id){
  //ESTADO: TERMINADA SIN REVISAR
  //TO-DO: 
  //FUNCION: Muestra la img del poblado correspondiente

  let player = ctx.currentPlayer;
  let color = G.players[player].color;
  let nSet = G.players[player].roads.length + G.players[player].cities.length;
  let img;

  let circ_img = document.getElementById(`cirI_${id}`);

  switch(color){
    case "red":
      img = document.getElementById(`pobR_${nSet}`);
      break;
    case "blue":
      img = document.getElementById(`pobA_${nSet}`);
      break;
    case "green":
      img = document.getElementById(`pobV_${nSet}`);
      break;
    case "white":
      img = document.getElementById(`pobB_${nSet}`);
      break;
    default:
      alert("ERROR EN setImgSet");
      break;
  }

  let left = circ_img.getBoundingClientRect().left;
  let top =  circ_img.getBoundingClientRect().top;

  img.style.display = "flex";
  img.style.position = "absolute";
  
  img.style.left = left+17+"px";
  img.style.top = top+10+"px";
}

export function setImgCity(G, ctx, id){
  //ESTADO: TERMINADA SIN REVISAR
  //TO-DO: 
  //FUNCION: Muestra la img de la ciudad correspondiente

  let player = ctx.currentPlayer;
  let color = G.players[player].color;
  let nCit = G.players[player].cities.length;
  let img;

  let circ_img = document.getElementById(`cirI_${id}`);

  switch(color){
    case "red":
      img = document.getElementById(`cityR_${nCit}`);
      break;
    case "blue":
      img = document.getElementById(`cityA_${nCit}`);
      break;
    case "green":
      img = document.getElementById(`cityV_${nCit}`);
      break;
    case "white":
      img = document.getElementById(`cityB_${nCit}`);
      break;
    default:
      alert("ERROR EN setImgCity");
      break;
  }

  let left = circ_img.getBoundingClientRect().left;
  let top =  circ_img.getBoundingClientRect().top;

  img.style.display = "flex";
  img.style.position = "absolute";
  
  img.style.left = left+17+"px";
  img.style.top = top+8+"px";
}

export function showSPlayerPop(){
  let pop = document.getElementById("pop_selectP");
  let bg = document.getElementById("bg_pop");

  pop.style.display = "flex";
  bg.style.display = "flex";
}

export function hideSPlayerPop(){
  let pop = document.getElementById("pop_selectP");
  let bg = document.getElementById("bg_pop");

  pop.style.display = "none";
  bg.style.display = "none";
}

export default function Board(props) {
   const [typeBuild, setBuild] = useState("");

    function ithrowDice(){
    //ESTADO: TERMINADO SIN REVISAR
    //TO-DO: 
    //FUNCION: Ejecuta la accion de tirar los dados

      hideCirCarr();
      hideCirInter();
      props.moves.throwDice();
    }

    function ibuyDevCard(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Ejecuta la accion de comprar carta de desarrollo
      hideCirCarr();
      hideCirInter();
      props.moves.buyDevCard()
    }

    function showCirInter(type){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra los circulos de las intersecciones

      setBuild(type);

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
        modImg.style.left = 223+ (horDist/2)*(i)+ horDist/2+  'px';
        modImg.style.top = 43 + 'px';
      }

      for (let i = 6; i < 10; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist)*(i-6) - horDist/4+ horDist/2+ 'px';
        modImg.style.top = 43 + verDist/2 + 'px';
      }

      for (let i = 10; i < 18; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist/2)*(i-11)+ horDist/2+ 'px';
        modImg.style.top = 43 + verDist + 'px';
      }

      for (let i = 18; i < 23; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist)*(i-19) + horDist/4+ horDist/2+ 'px';
        modImg.style.top = 43 + verDist + verDist/2 + 'px';
      }

      for (let i = 23; i < 33; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist/2)*(i-25)+ horDist/2+ 'px';
        modImg.style.top = 43 + 2*verDist + 'px';
      }

      for (let i = 33; i < 39; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist)*(i-34) - horDist/4+ horDist/2+ 'px';
        modImg.style.top = 43 + 2*verDist + verDist/2 +  'px';
      }

      for (let i = 39; i < 49; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist/2)*(i-41)+ horDist/2+ 'px';
        modImg.style.top = 43 + 3*verDist + 'px';
      }

      for (let i = 49; i < 54; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist)*(i-50) + horDist/4+ horDist/2+ 'px';
        modImg.style.top = 43 + 3*verDist + verDist/2 + 'px';
      }

      for (let i = 54; i < 62; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist/2)*(i-55)+ horDist/2+ 'px';
        modImg.style.top = 43 + 4*verDist + 'px';
      }

      for (let i = 62; i < 66; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist)*(i-62) - horDist/4+ horDist/2+ 'px';
        modImg.style.top = 43 + 4*verDist + verDist/2 + 'px';
      }

      for (let i = 66; i < 72; i++) {
        let modImg = document.getElementById(cir_carr_imgs[i].props.id);
        modImg.style.left = 223+ (horDist/2)*(i-66)+ horDist/2+ 'px';
        modImg.style.top = 43 + 5*verDist + 'px';
      }

      let elements = document.querySelectorAll('.circulos_carr');
      for(let i=0; i<elements.length; i++){
          elements[i].style.display = "flex";
          elements[i].style.position = "absolute";
      }
    }
    
    function showSRSSPop(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra el pop up para elegir recurso

      hideCirInter();
      hideCirCarr();

      let pop = document.getElementById("selectRSS");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "flex";
      pop.style.display = "flex";
    }

    function showSRSSInvPop(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra el pop up para elegir recurso de invento

      hideCirInter();
      hideCirCarr();

      let pop = document.getElementById("selectRSSInv");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "flex";
      pop.style.display = "flex";
    }

    function hideSRSSPop(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Cierra el pop up para elegir recurso

      let pop = document.getElementById("selectRSS");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "none";
      pop.style.display = "none";
    }

    function hideSRSSInvPop(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Oculta el pop up para elegir recurso de invento

      hideCirInter();
      hideCirCarr();

      let pop = document.getElementById("selectRSSInv");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "none";
      pop.style.display = "none";
    }

    function iendTurn() { 
      //ESTADO: EN PROCESO
      //TO-DO: 
      //FUNCION: Ejecuta la accion de acabar turno

      hideCirCarr();
      hideCirInter();
      props.moves.endTurn()
    }

    function ibuildSettlement(id){
      //ESTADO: EN PROCESO
      //TO-DO: 
      //FUNCION: Ejecuta la accion de crear pueblo y hace desaparecer los circulos
      
      if(props.ctx.phase === "firstBuilds")
        props.moves.buildFirstSettlement(id);
      else
      props.moves.buildSettlement(id);

      hideCirInter();
    }

    function ibuildCity(id){
      //ESTADO: EN PROCESO
      //TO-DO: 
      //FUNCION: Ejecuta la accion de crear ciudad y hace desaparecer los circulos

      props.moves.buildCity(id);

      hideCirInter();
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
      //ESTADO: EN PROCESO
      //TO-DO: INTERFAZ
      //FUNCION: Ejecuta la accion USAR CABALLERO y hace desaparecer los circulos
      hideCirCarr();
      hideCirInter();
      props.moves.useKnight()
    }

    function iuseMonopoly(rss){
      //ESTADO: EN PROCESO
      //TO-DO: INTERFAZ
      //FUNCION: Ejecuta la accion USAR MONOPOLIO y hace desaparecer los circulos
      hideCirCarr();
      hideCirInter();

      props.moves.useMonopoly(rss)

      hideSRSSPop();
    }

    function iuseInvent(rss){
      //ESTADO: EN PROCESO
      //TO-DO: INTERFAZ
      //FUNCION: Ejecuta la accion USAR INVENTO y hace desaparecer los circulos
      hideCirCarr();
      hideCirInter();
      hideSRSSInvPop();
      console.log("Count "+props.G.countInvent)
      if(props.G.devCardUsed === false){
        if(props.G.countInvent === 0){
          props.moves.useInvent(rss)
          showSRSSInvPop()
        }
        else{
          props.moves.useInvent(rss)
        }
      }
      else{
        props.moves.useInvent(rss)
      }
    }

    function iuseRBuild(){
      //ESTADO: EN PROCESO
      //TO-DO: INTERFAZ
      //FUNCION: Ejecuta la accion CARRETERAS y hace desaparecer los circulos
      hideCirCarr();
      hideCirInter();
      props.moves.useRoadBuild()
    }

    function tradeBankPop(){
      cancelTradePop()

      let popElem = document.getElementById("selectUserRss");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "flex";
      popElem.style.display = "flex";

    }

    function cancelTradeBankPop(){
      let popElem = document.getElementById("selectUserRss");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "none";
      popElem.style.display = "none";

    }

    function tradeUser(G, ctx){
      props.moves.tradePlayers(G, ctx);

      let popElem = document.getElementById("tradePopUp");
      let bg = document.getElementById("bg_pop");

      bg.style.display = "none";
      popElem.style.display = "none";
    }

    //Pop up general
    let bgPop =
    <div className="bgPop" id="bg_pop">
    </div>

    //Pop up de trade
    let tradePopUp =
    <div className="tradeContainer" id="tradePopUp">
      <div className="tradeOption" id="tradeBank">
        <img className="tradeOption_img" id="img_bank" src={bank} alt="Imagen de banco" onClick={() => tradeBankPop()}/>
      </div>
      <div className="tradeOption" id="tradePlayers">
        <img  className="tradeOption_img" src={users} alt="Imagen de users" onClick={() => tradeUser()}/>
      </div>
      <div className="cancel" onClick={() => cancelTradePop()}>
        <img id="cancel_img" src={cancel} alt="Imagen de cruz"/>
      </div>
    </div>

    function showTradePop() {
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra el pop up de tradeo
      hideCirCarr();
      hideCirInter();

      if(props.ctx.phase === "play"){
        let elem = document.getElementById("tradePopUp");
        elem.style.display = "flex";
  
        let bg = document.getElementById("bg_pop");
        bg.style.display = "flex";
      }


    }

    function cancelTradePop() {
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Cierra el pop up de tradeo
      let elem = document.getElementById("tradePopUp");
      elem.style.display = "none";

      let bg = document.getElementById("bg_pop");
      bg.style.display = "none";
    }

    function showSet(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra una imagen de settlement en la barra de acciones dependiendo del jugador que sea su turno

      let color = props.G.players[props.ctx.currentPlayer].color;
      let img;

      switch(color){
        case "red":
          img = <img className="iconSC_img" src={pob_r} alt="Imagen de poblado piloto"/>;
          break;
        case "blue":
          img = <img className="iconSC_img" src={pob_a} alt="Imagen de poblado piloto"/>;
          break;
        case "green":
          img = <img className="iconSC_img" src={pob_v} alt="Imagen de poblado piloto"/>;
          break;
        case "white":
          img = <img className="iconSC_img" src={pob_b} alt="Imagen de poblado piloto"/>;
          break;
        default:
          alert("ERROR EN showSet: "+color);
          break;
      }

      return img;
    }

    function showCity(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra una imagen de ciudad en la barra de acciones dependiendo del jugador que sea su turno

      let color = props.G.players[props.ctx.currentPlayer].color;
      let img;

      switch(color){
        case "red":
          img = <img className="iconSC_img" src={city_r} alt="Imagen de ciudad piloto"/>;
          break;
        case "blue":
          img = <img className="iconSC_img" src={city_a} alt="Imagen de ciudad piloto"/>;
          break;
        case "green":
          img = <img className="iconSC_img" src={city_v} alt="Imagen de ciudad piloto"/>;
          break;
        case "white":
          img = <img className="iconSC_img" src={city_b} alt="Imagen de ciudad piloto"/>;
          break;
        default:
          alert("ERROR EN showCity: "+color);
          break;
      }

      return img;
    }

    function showCarr(){
      //ESTADO: TERMINADO SIN REVISAR
      //TO-DO: 
      //FUNCION: Muestra una imagen de carretera en la barra de acciones dependiendo del jugador que sea su turno

      let color = props.G.players[props.ctx.currentPlayer].color;
      let img;

      switch(color){
        case "red":
          img = <img className="iconC_img" src={carr_r} alt="Imagen de carretera piloto"/>;
          break;
        case "blue":
          img = <img className="iconC_img" src={carr_a} alt="Imagen de carretera piloto"/>;
          break;
        case "green":
          img = <img className="iconC_img" src={carr_v} alt="Imagen de carretera piloto"/>;
          break;
        case "white":
          img = <img className="iconC_img" src={carr_b} alt="Imagen de carretera piloto"/>;
          break;
        default:
          alert("ERROR EN showCarr: "+color);
          break;
      }

      return img;
    }

    //Coge las cartas de rss del jugador y las muestra por pantalla
    let playerCards = [];

    for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.brick; i++){
      playerCards.push( <abbr title="Ladrillo"><img className="rssCard" id={`c${props.ctx.currentPlayer}Brick_${i}`} src={card_brick} alt="Carta ladrillo" /></abbr>);
    }
    for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.lumber; i++){
      playerCards.push( <abbr title="Madera"><img className="rssCard" id={`c${props.ctx.currentPlayer}Lumber_${i}`} src={card_lumber} alt="Carta madera" /></abbr>);
    }
    for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.wool; i++){
      playerCards.push( <abbr title="Lana"><img className="rssCard" id={`c${props.ctx.currentPlayer}Wool_${i}`} src={card_wool} alt="Carta lana" /></abbr>);
    }
    for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.ore; i++){
      playerCards.push( <abbr title="Mineral"><img className="rssCard" id={`c${props.ctx.currentPlayer}Ore_${i}`} src={card_ore} alt="Carta mineral" /></abbr>);
    }
    for(let i=0; i<props.G.players[props.ctx.currentPlayer].resources.grain; i++){
      playerCards.push( <abbr title="Grano"><img className="rssCard" id={`c${props.ctx.currentPlayer}Grain_${i}`} src={card_grain} alt="Carta grano" /></abbr>);
    }

    //Coge las cartas de dev del jugador y las muestra por pantalla
    let devCards = [];

    for(let i=0; i<props.G.players[props.ctx.currentPlayer].devCards.length; i++){
      let actCard = props.G.players[props.ctx.currentPlayer].devCards[i];
      if(actCard === "knight")
        devCards.push( <abbr title="Carta de caballero"><img className="rssCard" id={`c${props.ctx.currentPlayer}Knight_${i}`} alt="Carta caballero" src={card_knight} onClick={() => iuseKnight()}/></abbr>);
      else if(actCard === "monopoly")
        devCards.push( <abbr title="Carta de monopolio"><img className="rssCard" id={`c${props.ctx.currentPlayer}Monopoly_${i}`} alt="Carta monopolio" src={card_monopoly} onClick={() => showSRSSPop()}/></abbr>);
      else if(actCard === "invent")
        devCards.push( <abbr title="Carta de invento"><img className="rssCard" id={`c${props.ctx.currentPlayer}Invent_${i}`} alt="Carta invento" src={card_invent} onClick={() => showSRSSInvPop()}/></abbr>);
      else if(actCard === "roadsBuild")
        devCards.push( <abbr title="Carta de carreteras"><img className="rssCard" id={`c${props.ctx.currentPlayer}roadBuilds_${i}`} alt="Carta carreteras" src={card_rBuild} onClick={() => iuseRBuild()}/></abbr>);
      else
        devCards.push( <abbr title="Punto de victoria"><img className="rssCard" id={`c${props.ctx.currentPlayer}vPoint_${i}`} alt="Carta victoria" src={card_vPoint} /></abbr>);
    }


    let uniqueID = 0;
    let tbody = [];

    //BARRA DE ACCIONES
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
            <img className= "icon_img" src={dices} alt="Imagen de dados"/>
        </div>
        <div className="icon" id="buildSet" onClick={() => showCirInter("settlement")}>
          {showSet()}
        </div>
        <div className="icon" id="buildCity" onClick={() => showCirInter("city")}>
          {showCity()}
        </div>
        <div className="icon" id="buildRoad"  onClick={() => showCirCarr()}>
          {showCarr()}
        </div>
        <div className="icon" id="buyDev" onClick={() => ibuyDevCard()}>
          <img className= "icon_img" src={buy_dev} alt="Imagen de carta dev"/>
        </div>
        <div className="icon" id="trade" onClick={() => showTradePop()}>
          <img className= "icon_img" src={trade} alt="Imagen de trade"/>
        </div>
        <div className="icon" id="endTurn" onClick={() => iendTurn()}>
          <img className= "icon_img" src={end} alt="Imagen de fin turno"/>
        </div> 
      </div>
    </div>;

    function getName(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el nombre del jugador segun el id
      let name = "";
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        name = props.G.players[i].name;
      }
      return name;
    }

    function getVPoints(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el numero de puntos del jugador segun el id
      let points = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        points = props.G.players[i].points;
      }

      return points;
    }

    function getNumSet(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el numero de poblados del jugador segun el id
      let nSet = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        nSet = props.G.players[i].settlements.length;
      }

      return nSet;
    }

    function getNumCity(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el numero de ciudades del jugador segun el id
      let nCit = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        nCit = props.G.players[i].cities.length;
      }

      return nCit;
    }

    function getNumRoad(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el numero de carreteras del jugador segun el id
      let nRoad = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        nRoad = props.G.players[i].roads.length;
      }

      return nRoad;
    }

    function getLRoad(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve la carretera mas larga del jugador segun el id
      let LRoad = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        LRoad = props.G.players[i].roads.length;
      }

      return LRoad;
    }

    function getArmy(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el ejercito del jugador segun el id
      let army = 0
      let nPlayers = props.ctx.numPlayers;

      if(i<nPlayers){
        army = props.G.players[i].usedKnights;
      }

      return army;
    }

    function getNCards(i){
      //ESTADO: TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Devuelve el numero de cartas del jugador segun el id

      let cPlayer = props.G.players[i];

      if(cPlayer !== undefined){
        var sumTotal = 0;
        
        for(var stat of Object.values(cPlayer['resources'])){
          sumTotal = sumTotal+stat
        }
        
        return sumTotal;
      }

      return 0;
    }

    //TABLA DE ESTADO
    let tablaInfo =
    <div className ="tabla_Info">
      <div className="fila_Info" id="titulo_info">
        <h2>ESTADO DE LA PARTIDA</h2>
      </div>
      <div className="fila_Info" id="red_info">

        <div className="columna_Info" id="red_name">
          <div className="parte_sup" id="red_color">
          </div>
          <div className="parte_inf" id="nombre_info">
            {getName(0)}
          </div>
        </div>
        <div className="columna_Info" id="red_vPoints">
          <div className="parte_sup">
              <img className = "icon_info" src={vPoint} alt="Puntos de victoria"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getVPoints(0)}
          </div>
        </div>
        <div className="columna_Info" id="red_setNum">
          <div className="parte_sup">
            <img className = "icon_info" src={pob_r} alt="Imagen de poblado"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumSet(0)}
          </div>
        </div>
        <div className="columna_Info" id="red_cityNum">
          <div className="parte_sup">
            <img className = "icon_info" src={city_r} alt="Imagen de ciudad"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumCity(0)}
          </div>
        </div>
        <div className="columna_Info" id="red_roadNum">
          <div className="parte_sup">
            <img className = "icon_info" src={carr_r} alt="Imagen de carretera"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumRoad(0)}
          </div>
        </div>
        <div className="columna_Info" id="red_numCards">
          <div className="parte_sup">
            <img className = "icon_info" src={deck} alt="Imagen de cartas"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNCards(0)}
          </div>
        </div>
      </div>
      <div className="fila_Info" id="blue_info">

        <div className="columna_Info" id="blue_name">
          <div className="parte_sup" id="blue_color">
          </div>
          <div className="parte_inf" id="nombre_info">
            {getName(1)}
          </div>
        </div>
        <div className="columna_Info" id="blue_vPoints">
          <div className="parte_sup">
            <img className = "icon_info" src={vPoint} alt="Puntos de victoria"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getVPoints(1)}
          </div>
        </div>
        <div className="columna_Info" id="blue_setNum">
          <div className="parte_sup">
            <img className = "icon_info" src={pob_a} alt="Imagen de poblado"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumSet(1)}
          </div>
        </div>
        <div className="columna_Info" id="blue_cityNum">
          <div className="parte_sup">
            <img className = "icon_info" src={city_a} alt="Imagen de ciudad"/>
          </div>
          <div className="parte_inf" id="nombre_info">
           {getNumCity(1)}
          </div>
        </div>
        <div className="columna_Info" id="blue_roadNum">
          <div className="parte_sup">
            <img className = "icon_info" src={carr_a} alt="Imagen de carretera"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumRoad(1)}
          </div>
        </div>
        <div className="columna_Info" id="blue_numCards">
          <div className="parte_sup">
            <img className = "icon_info" src={deck} alt="Imagen de cartas"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNCards(1)}
          </div>
        </div>
      </div>
      <div className="fila_Info" id="green_info">

        <div className="columna_Info" id="green_name">
          <div className="parte_sup" id="green_color">
          </div>
          <div className="parte_inf" id="nombre_info">
            {getName(2)}
          </div>
        </div>
        <div className="columna_Info" id="green_vPoints">
          <div className="parte_sup">
            <img className = "icon_info" src={vPoint} alt="Puntos de victoria"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getVPoints(2)}
          </div>
        </div>
        <div className="columna_Info" id="green_setNum">
          <div className="parte_sup">
            <img className = "icon_info" src={pob_v} alt="Imagen de poblado"/>
          </div>
          <div className="parte_inf" id="nombre_info">
           {getNumSet(2)}
          </div>
        </div>
        <div className="columna_Info" id="green_cityNum">
          <div className="parte_sup">
            <img className = "icon_info" src={city_v} alt="Imagen de ciudad"/>
          </div>
          <div className="parte_inf" id="nombre_info">
           {getNumCity(2)}
          </div>
        </div>
        <div className="columna_Info" id="green_roadNum">
          <div className="parte_sup">
            <img className = "icon_info" src={carr_v} alt="Imagen de carretera"/>
          </div>
          <div className="parte_inf" id="nombre_info">
           {getNumRoad(2)}
          </div>
        </div> 
        <div className="columna_Info" id="green_numCards">
          <div className="parte_sup">
            <img className = "icon_info" src={deck} alt="Imagen de cartas"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNCards(2)}
          </div>
        </div>    
      </div>
      <div className="fila_Info" id="white_info">

        <div className="columna_Info" id="white_name">
          <div className="parte_sup" id="white_color">
          </div>
          <div className="parte_inf" id="nombre_info">
            {getName(3)}
          </div>
        </div>
        <div className="columna_Info" id="white_vPoints">
          <div className="parte_sup">
           <img className = "icon_info" src={vPoint} alt="Puntos de victoria"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getVPoints(3)}
          </div> 
        </div>
        <div className="columna_Info" id="white_setNum">
          <div className="parte_sup">
            <img className = "icon_info" src={pob_b} alt="Imagen de poblado"/>
          </div>
          <div className="parte_inf" id="nombre_info">
           {getNumSet(3)}
          </div>
        </div>
        <div className="columna_Info" id="white_cityNum">
          <div className="parte_sup">
            <img className = "icon_info" src={city_b} alt="Imagen de ciudad"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumCity(3)}
          </div>
        </div>
        <div className="columna_Info" id="white_roadNum">
          <div className="parte_sup">
            <img className = "icon_info" src={carr_b} alt="Imagen de carretera"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNumRoad(3)}
          </div>
        </div>
        <div className="columna_Info" id="white_numCards">
          <div className="parte_sup">
            <img className = "icon_info" src={deck} alt="Imagen de cartas"/>
          </div>
          <div className="parte_inf" id="nombre_info">
            {getNCards(3)}
          </div>
        </div>
      
      </div>
      <div className="fila_Info" id="lRoad_info">
        <div className="columna_Info" id="lRoadCard">
          <abbr className = "card_Info" title="Carta de mayor carretera"><img  className = "card_Info" src={card_lRoad} alt="Carta de mayor carretera"/></abbr>
        </div>
        <div className="columna_Info" id="special_info" style={{color: "red"}}>
          {getLRoad(0)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "blue"}}>
          {getLRoad(1)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "green"}}>
          {getLRoad(2)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "white"}}>
          {getLRoad(3)}
        </div>
      </div> 
      <div className="fila_Info" id="lArmy_info">
        <div className="columna_Info" id="lArmyCard">
          <abbr className = "card_Info" title="Carta de mayor ejercito"><img className = "card_Info" src={card_lArmy} alt="Carta de mayor carretera"/></abbr>
        </div>
        <div className="columna_Info" id="special_info" style={{color: "red"}}>
          {getArmy(0)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "blue"}}>
          {getArmy(1)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "green"}}> 
         {getArmy(2)}
        </div>
        <div className="columna_Info" id="special_info" style={{color: "white"}}>
          {getArmy(3)}
        </div>
        </div>         
    </div>

    // CASILLAS
    for (let i = 0; i < 5; i++) {

      let cells = [];
      if(i===0 || i===4)
        for (let j = 0; j < 3; j++) {   

          cells.push( 
            <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile}  ctx = {props.ctx} G = {props.G} clickF = {iplaceRobber}/>
          );
          uniqueID++;
        }
      else if(i===1 || i===3)
        for (let j = 0; j < 4; j++) {

          cells.push( 
            <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile} ctx = {props.ctx} G = {props.G} clickF = {iplaceRobber}/>
          );
          uniqueID++;
        }
      else{
        for (let j = 0; j < 5; j++) {

            cells.push(
            <Casilla uniqueID={uniqueID} idNumber ={props.G.terrainCells[uniqueID].number} tile ={props.G.terrainCells[uniqueID].tile} ctx = {props.ctx} G = {props.G} clickF = {iplaceRobber}/>
          );
          uniqueID++;
        }
      }

      tbody.push(<tr key={`fKey_${i.toString()}`} className={`fila_${i}`}>{cells}</tr>);
    }
    
    //arrays de imagenes de circulos
    let cir_imgs = [];
    let cir_carr_imgs = [];
    //arrays de imagenes de carreteras
    let carr_v_arr = [];
    let carr_b_arr = [];
    let carr_a_arr = [];
    let carr_r_arr = [];
    //arrays de imagenes de poblados
    let pob_a_arr = [];
    let pob_b_arr = [];
    let pob_v_arr = [];
    let pob_r_arr = [];
    //array de imagenes de ciudades
    let city_a_arr = [];
    let city_b_arr = [];
    let city_v_arr = [];
    let city_r_arr = [];

    function chooseBuild(i){
    //ESTADO: TERMINADA SIN REVISAR
    //TO-DO: 
    //FUNCION: Llama a construir poblado o ciudad segun el momento

      if(typeBuild === "settlement")
        ibuildSettlement(i);
      else if(typeBuild === "city")
        ibuildCity(i);
    } 

    //circulos para las intersecciones
    for (let i = 0; i < 54; i++) {
      cir_imgs.push(
        <img className="circulos_inter" id={`cirI_${i}`} src={circulo} onClick={() => chooseBuild(i)} alt="Circulo interseccion"/>
      );
    }
    //circulos para las carreteras
    for (let i = 0; i < 72; i++) {
      cir_carr_imgs.push(
        <img className="circulos_carr" id={`cirC_${i}`} src={circulo} onClick={() => ibuildRoad(i)} alt="Circulo carretera"/>
      );
    }

    //carreteras rojas
    for (let i = 0; i < 15; i++){
      carr_r_arr.push(
        <img className="img_carr" id={`carrR_${i}`} src={carr_r} alt="Carretera roja"/>
      );
    }
    //carreteras azules
    for (let i = 0; i < 15; i++){
      carr_a_arr.push(
        <img className="img_carr" id={`carrA_${i}`} src={carr_a} alt="Carretera azul"/>
      );
    }
    //carreteras verdes
    for (let i = 0; i < 15; i++){
      carr_v_arr.push(
        <img className="img_carr" id={`carrV_${i}`} src={carr_v} alt="Carretera verde"/>
      );
    }
    //carreteras blancas
    for (let i = 0; i < 15; i++){
      carr_b_arr.push(
        <img className="img_carr" id={`carrB_${i}`} src={carr_b} alt="Carretera blanca"/>
      );
    }

    //poblados blancos
    for (let i = 0; i< 10; i++){ //se ponen 10 poblados para no tener problemas con los id al crear ciudades
      pob_b_arr.push(
        <img className="img_pob" id={`pobB_${i}`} src={pob_b} alt="Poblado blanco"/>
      );
    }
    //poblados azules
    for (let i = 0; i< 10; i++){
      pob_a_arr.push(
        <img className="img_pob" id={`pobA_${i}`} src={pob_a} alt="Poblado azul"/>
      );
    }
    //poblados rojos
    for (let i = 0; i< 10; i++){
      pob_r_arr.push(
        <img className="img_pob" id={`pobR_${i}`} src={pob_r} alt="Poblado rojo"/>
      );
    }
    //poblados verdes
    for (let i = 0; i< 10; i++){
      pob_v_arr.push(
        <img className="img_pob" id={`pobV_${i}`} src={pob_v} alt="Poblado verde"/>
      );
    }

    //ciudades blancas
    for(let i = 0; i<5; i++){
      city_b_arr.push(
        <img className="img_city" id={`cityB_${i}`} src={city_b} alt="Ciudad blanca"/>
      )
    }
    //ciudades azules
    for(let i = 0; i<5; i++){
      city_a_arr.push(
        <img className="img_city" id={`cityA_${i}`} src={city_a} alt="Ciudad azul"/>
      )
    }
    //ciudades rojas
    for(let i = 0; i<5; i++){
      city_r_arr.push(
        <img className="img_city" id={`cityR_${i}`} src={city_r} alt="Ciudad roja"/>
      )
    }
    //ciudades verdes
    for(let i = 0; i<5; i++){
      city_v_arr.push(
        <img className="img_city" id={`cityV_${i}`} src={city_v} alt="Ciudad verde"/>
      )
    }


    function iplaceRobber(id){
      //ESTADO:   TERMINADA SIN REVISAR
      //TO-DO: 
      //FUNCION: Ejecuta la accion de mover al ladron

      if(props.ctx.activePlayers !== null)
        if(props.ctx.activePlayers[props.ctx.currentPlayer] === "placeRobber"){
          props.moves.placeRobber(id)
       }
    }


    //Actualiza la posicion del ladron constantemente segun se encuentre --- DA PROBLEMAS LA PRIMERA VEZ QUE SE RENDERIZA
    let rPos = props.G.robberPos;
    let rHex = document.getElementById(rPos);
    let ladron = <img className="robber" id="robber" src={robber} alt="Imagen de ladron"/>
    let robImg;

    if(rHex !== null){
      robImg = document.getElementById("robber");
    
      let rleft = rHex.getBoundingClientRect().left;
      let rtop = rHex.getBoundingClientRect().top;
    
      robImg.style.left = rleft + 40 +"px";
      robImg.style.top = rtop + 8 +"px";
    }

    // DIV para seleccionar robar a un jugador
    let optionPlayers = [];
    for(let i=0; i<props.ctx.numPlayers; i++){
      let option = <div className = "selectOption" id={`option_${i}`} onClick={() => props.moves.stealRssFromRobber(props.G.players[i].name)}>{props.G.players[i].name}</div>

      optionPlayers.push(option);
    }

    let selectPlayer = 
    <div className="selectContainer" id="pop_selectP">
      <h1 className="titulo_select">Selecciona un jugador para robarle</h1>
      {optionPlayers}
    </div>

    // DIV para seleccionar un recurso de monopolio
    let selectRSS = 
    <div className= "rssContainer" id="selectRSS">
      <h1 className="titulo_select">Selecciona un recurso para el monopolio</h1>
      <div className="optionRSS" id="brick_option" onClick = {() => iuseMonopoly("brick")}>
        <img src={card_brick} className="img_rss_opt" alt="Rss de ladrillo"/>
      </div>
      <div className="optionRSS" id="lumber_option" onClick = {() => iuseMonopoly("lumber")}>
       <img src={card_lumber} className="img_rss_opt" alt="Rss de madera" />
      </div>
      <div className="optionRSS" id="wool_option" onClick = {() => iuseMonopoly("wool")}>
       <img src={card_wool} className="img_rss_opt" alt="Rss de lana" />
      </div>
      <div className="optionRSS" id="grain_option" onClick = {() => iuseMonopoly("grain")}>
       <img src={card_grain} className="img_rss_opt" alt="Rss de grano" />
      </div>
      <div className="optionRSS" id="ore_option" onClick = {() => iuseMonopoly("ore")}>
       <img src={card_ore} className="img_rss_opt" alt="Rss de mineral" />
      </div>
    </div>

    function checkUserRss(G, ctx, rss) {
      props.moves.tradeBank(G, ctx, rss);
      cancelTradeBankPop();
    }

    // DIV para seleccionar un rss para comerciar con el banco
    let selectUserRss = 
    <div className= "rssContainer" id="selectUserRss">
      <h1 className="titulo_select">Selecciona que recurso quieres dar:</h1>
      <div className="optionRSS" id="brick_option" onClick = {() => checkUserRss("brick")}>
        <img src={card_brick} className="img_rss_opt" alt="Rss de ladrillo"/>
      </div>
      <div className="optionRSS" id="lumber_option" onClick = {() => checkUserRss("lumber")}>
      <img src={card_lumber} className="img_rss_opt" alt="Rss de madera" />
      </div>
      <div className="optionRSS" id="wool_option" onClick = {() => checkUserRss("wool")}>
      <img src={card_wool} className="img_rss_opt" alt="Rss de lana" />
      </div>
      <div className="optionRSS" id="grain_option" onClick = {() => checkUserRss("grain")}>
      <img src={card_grain} className="img_rss_opt" alt="Rss de grano" />
      </div>
      <div className="optionRSS" id="ore_option" onClick = {() => checkUserRss("ore")}>
      <img src={card_ore} className="img_rss_opt" alt="Rss de mineral" />
      </div>
      <div className="cancel" onClick={() => cancelTradeBankPop()}>
        <img id="cancel_img" src={cancel} alt="Imagen de cruz"/>
      </div>
    </div>

    // DIV para seleccionar un recurso de invento
    let selectRSSInv = 
    <div className= "rssContainer" id="selectRSSInv">
      <h1 className="titulo_select">Selecciona un recurso para obtener una cartas</h1>
      <div className="optionRSS" id="brick_option" onClick = {() => iuseInvent("brick")}>
        <img src={card_brick} className="img_rss_opt" alt="Rss de ladrillo"/>
      </div>
      <div className="optionRSS" id="lumber_option" onClick = {() => iuseInvent("lumber")}>
      <img src={card_lumber} className="img_rss_opt" alt="Rss de madera" />
      </div>
      <div className="optionRSS" id="wool_option" onClick = {() => iuseInvent("wool")}>
      <img src={card_wool} className="img_rss_opt" alt="Rss de lana" />
      </div>
      <div className="optionRSS" id="grain_option" onClick = {() => iuseInvent("grain")}>
      <img src={card_grain} className="img_rss_opt" alt="Rss de grano" />
      </div>
      <div className="optionRSS" id="ore_option" onClick = {() => iuseInvent("ore")}>
      <img src={card_ore} className="img_rss_opt" alt="Rss de mineral" />
      </div>
    </div>
    
    return (
      <div>

        <table id="board">
          <tbody className={"tablero"}>{tbody}</tbody>
        </table>

        {tablaInfo}

        {barra}

        {cir_imgs}  
        {cir_carr_imgs}
        
        {carr_a_arr}
        {carr_b_arr}
        {carr_r_arr}
        {carr_v_arr}

        {pob_a_arr}
        {pob_b_arr}
        {pob_r_arr}
        {pob_v_arr}

        {city_b_arr}
        {city_a_arr}
        {city_r_arr}
        {city_v_arr}

        {tradePopUp}
        {bgPop}

        {selectPlayer}
        {selectRSS}

        {selectUserRss}

        {selectRSSInv}
        
        {ladron}
        

        <img className="img_city" id="testImg" src={city_a} alt="img test"/>
      </div>
    );



}