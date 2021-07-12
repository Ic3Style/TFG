import React, {useState} from 'react';
import "../assets/css/Casilla.css";

function Casilla (props)  {
    const [arrVer, setstate] = useState([]);
    function moveElement(e){ //no se usa
        console.log("KEY", e);

        /*
        let element = document.getElementById(e.target.id);
        let top = element.getBoundingClientRect().top;
        let left = element.getBoundingClientRect().left;
        let circuloImage = document.getElementById("circuloimg");
        circuloImage.style.position = "absolute";
        circuloImage.style.left = left - 30+'px';
        circuloImage.style.top =  top - 30+'px';
        console.log(top, left)
        */
    }

    function setColor(tile){
        let color;
        switch(tile){
            case "Pasture": //wool
                color = {backgroundColor: "#CFF4AC"};
                break;
            case "Hills": //brick
                color = {backgroundColor: "#C28E7B"};
                break;
            case "Mountains": //ore
                color = {backgroundColor: "#D1D1D1"};
                break;
            case "Fields": //grain
                color = {backgroundColor: "#FEFE43"};
                break;
            case "Forest": //lumber
                color = {backgroundColor: "#31832D"};
                break;
            case "Dessert":
                color = {backgroundColor:"#D1C388"};
                break;
            default:
                color = {backgroundColor:"white" };
                break;        
        }
        return color;
    }
    
    function setClassToExtra(tile){
        let clase;
        switch(tile){
            case "Pasture": //wool
                clase = "_1";
                break;
            case "Hills": //brick
                clase = "_2";
                break;
            case "Mountains": //ore
                clase = "_3";
                break;
            case "Fields": //grain
                clase = "_4";
                break;
            case "Forest": //lumber
               clase = "_5";
                break;
            case "Dessert":
                clase = "_0";
                break;
            default:
                break;        
        }
        return clase;
    }

    function setRedNumbers(num){
        let clase = "_b"
        if(num === 8 || num === 6){
            clase = "_r"
        }
        return clase;
    }

    function extractDessert(n){
        let s;
        if(n === 0){
            s = ""
        }
        else s = n;
        return s;
    }

    
    //{ state}

    return (

            <td style={setColor(props.tile)} className={`hexagon extraColor${setClassToExtra(props.tile)}`}  id={props.uniqueID}  key={`hex_${props.uniqueID}`}> 
                  {<div className="numberContainer">
                      <div className="circleNumber" onClick={()=> props.clickF(props.uniqueID)}>
                          <b className="number" id={`number${setRedNumbers(props.idNumber)}`}>{extractDessert(props.idNumber)}</b>
                      </div>
                    </div>}
            </td>
 
    );
}

export default Casilla;
