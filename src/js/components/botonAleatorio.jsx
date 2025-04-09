import React from "react";

export const BotonAleatorio = (props) => {


    return (
        <div className="custom-button mt-4 d-flex justify-content-center"> 
        <button className="jas" onClick={() => {
            const coloresPosibles = ["RedActivo", "orangeActivo", "greenActivo"];
            const nuevosColores = ["RedActivo", "orangeActivo", "greenActivo", "purpleActivo"];
            const colorAleatorio = Math.floor(Math.random() * coloresPosibles.length);
            
            if( props.nuevosColores.length >3){
                props.nuevoAleatorio(colorAleatorio, nuevosColores);
            }else{
                props.nuevoAleatorio(colorAleatorio, coloresPosibles);
            }
        }}
        >Presiona Aleatorio</button>
        </div>
    )
}