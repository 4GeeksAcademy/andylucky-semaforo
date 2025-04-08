import React from "react";

export const NuevoColor = (props) => {

    return (

        <div className="custom-button mt-4 d-flex justify-content-center"> 
        <button onClick={ () => {
              const nuevosColores = ["RedActivo", "orangeActivo", "greenActivo", "purpleActivo"];
              const colorAleatorio =  Math.floor(Math.random() * 4);
      
             props.nuevoColor(colorAleatorio, nuevosColores);
        }}>
            
            Nuevo color
        </button>
        </div>
    )
}



