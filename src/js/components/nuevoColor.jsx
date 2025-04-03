import React from "react";

export const NuevoColor = (props) => {
    const purpura = "purpleActivo"
    const nuevosColores = ["RedActivo", "orangeActivo", "greenActivo", "purpleActivo"];

    
    return (

        <div className="custom-button mt-4 d-flex justify-content-center"> 
        <button onClick={ () => {
            props.nuevoColor(purpura)
        }}>
            Nuevo color
        </button>
        </div>
    )
}



