import React from "react";
import { BotonAleatorio } from "./botonAleatorio";
export const Semaforo= (props) => {
    
    const getPurpura = (color="") =>{
        if( props.estadoPurpura !== "" && color!=="active"){
            props.enviarSatePuple("purpleNoActivo")
           }else if(color==="active"){
            props.enviarSate("")
            props.enviarSatePuple("purpleActivo")
           }
    }
   
    return (
        <>
        <div className="semaforo">
                <div className={props.estadoRojo}  onClick={ ()=> {
                    props.enviarSate("RedActivo");
                    getPurpura();
                    
                }}></div>
                <div className={props.estadoNaranja} onClick={ ()=> {
                    props.enviarSate("orangeActivo");
                    getPurpura();
                }}></div>
                <div className={props.estadoVerde} onClick={ ()=> {
                    props.enviarSate("greenActivo");
                    getPurpura();
                }}></div>
                <div className={props.estadoPurpura} onClick={ ()=> {
                    getPurpura("active")
                 
                }}></div>
         </div> 
         <BotonAleatorio nuevoAleatorio={props.nuevoAleatorio} nuevosColores={props.nuevosColores} /> 
         </>
    )
}