import React, { useState, useEffect } from 'react';
import { Semaforo } from "./semaforo";
import { NuevoColor } from './nuevoColor';

//include images into your bundle



//create your first component
const TrafficLight = (props) => {

	
	const nuevosColores = ["RedActivo", "orangeActivo", "greenActivo", "purpleActivo"];
	const firstColores = ["RedActivo", "orangeActivo", "greenActivo"];

	const [color, setColor] = useState("RedActivo");
	const [colores, setColores] = useState(firstColores)
	const [colorpurple, setColorpurple] = useState("")

	const addAleatorio = (thecolor, coloresPosibles) => {
		debugger
		if(coloresPosibles.length>3){
			setColores(coloresPosibles);
			thecolor = Math.floor(Math.random() * 4);
			if( thecolor===3){
				setColorpurple("purpleActivo");
				setColor("")			
			}
			else{
				setColorpurple("purpleNoActivo");
				setColor(nuevosColores[thecolor]);
			}
		
		}else {
			setColorpurple("")
			setColor(firstColores[thecolor]);
		}
	}

	return (
		<>
		<Semaforo 
		// addEstado={enviarAlPadre} 
		enviarSate={setColor}
		enviarSatePuple={setColorpurple}
		estadoRojo={color === "RedActivo" ? "RedActivo" : "RedNoActivo" } 
		estadoNaranja={color === "orangeActivo" ? "orangeActivo" : "orangeNoActivo" } 
		estadoVerde={color === "greenActivo" ? "greenActivo" : "greenNoActivo" } 
		estadoPurpura={colorpurple} 
		nuevoAleatorio={addAleatorio} 
		nuevosColores={colores}
		/>
		<NuevoColor nuevoColor={addAleatorio} />
		</>
	);
};

export default TrafficLight;