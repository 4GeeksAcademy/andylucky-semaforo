import React from "react";

export const BotonAleatorio = (props) => {


    return (
        <div className="custom-button mt-4 d-flex justify-content-center"> 
        <button className="jas" onClick={() => {
            debugger
            const coloresPosibles = ["RedActivo", "orangeActivo", "greenActivo"];
            const colorAleatorio = Math.floor(Math.random() * coloresPosibles.length) + 1;
            props.nuevoAleatorio(colorAleatorio, coloresPosibles);
            
            
        }}
        >Presiona Aleatorio</button>
        </div>
    )
}