import React from "react";
import { BotonAleatorio } from "./botonAleatorio";
export const Semaforo= (props) => {
    
   
    return (
        <>
        <div className="semaforo">
                <div className={props.estadoRojo}  onClick={ ()=> props.enviarSate("RedActivo")}></div>
                <div className={props.estadoNaranja} onClick={ ()=> props.enviarSate("orangeActivo")}></div>
                <div className={props.estadoVerde} onClick={ ()=> props.enviarSate("greenActivo")}></div>
                <div className={props.estadoPurpura} onClick={ ()=> props.enviarSate("purpleActivo")}></div>
         </div> 
         <BotonAleatorio nuevoAleatorio={props.nuevoAleatorio} nuevosColores={props.nuevosColores} /> 
         </>
    )
}