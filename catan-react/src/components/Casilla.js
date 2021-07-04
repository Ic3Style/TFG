import React from 'react';
import "../assets/css/Board.css";

const Casilla = (props) => {
    //const [state, setstate] = useState("");
    function moveElement(e){
        console.log("KEY", e);


        let element = document.getElementById(e.target.id);
        let top = element.getBoundingClientRect().top;
        let left = element.getBoundingClientRect().left;
        let bosqueImage = document.getElementById("bosqueimg");
        bosqueImage.style.position = "absolute";
        bosqueImage.style.left = left - 20+'px';
        bosqueImage.style.top =  top - 30+'px';
        console.log(top, left)
    }

    function setColor(tile){
        let color;
        switch(tile){
            case "Pasture": //wool
                color = "#CFF4AC";
                break;
            case "Hills": //brick
                color = "#C28E7B"
                break;
            case "Mountains": //ore
                color = "#E6E6E6"
                break;
            case "Fields": //grain
                color = "#E7DC82"
                break;
            case "Forest": //lumber
                color = "#31832D"
                break;
            case "Dessert":
                color = "#DEDA9C"
                break;
            default:
                color = "white"
                break;        
        }
        return color;
    }
    //setstate("Hola")
    //{ state}
    
    //DUDAS

    //style={{background-color: setColor(props.tile)}}  como se pone
    //se puede poner un if en css o html? para los colores de los numeros y el desierto

    return (
        <div>
            <td className="hexagon" id={props.uniqueID}  key={props.uniqueID} onClick={(e)=>{moveElement(e)}}> 
                  { 
                    <div className="numberContainer"> 
                        <b className="number">{props.idNumber}</b>
                    </div>                     
                  }
                  
            </td>
        </div>
    );
}

export default Casilla;
