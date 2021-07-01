import React from 'react';

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
    //setstate("Hola")
    //{ state}
    return (
        <div>
            <td className="hexagon" id={props.uniqueID} key={props.uniqueID} onClick={(e)=>{moveElement(e)}}> 
                  {
                      props.idNumber
                     
                  }
                  
            </td>
        </div>
    );
}

export default Casilla;
