import React, { useState, useEffect } from 'react';
import { Semaforo } from "./semaforo";
import { NuevoColor } from './nuevoColor';

//include images into your bundle



//create your first component
const TrafficLight = (props) => {

	const [color, setColor] = useState("RedActivo");
	const nuevosColores = ["RedActivo", "orangeActivo", "greenActivo", "purpleActivo"];

	const addAleatorio = (thecolor, coloresPosibles) => {
		const divPurple = document.querySelector(".semaforo div:nth-child(4)")
		if(!coloresPosibles){
			
			if(divPurple.classList.length === 0){
				divPurple.classList.remove("purpleNoActivo");
				divPurple.classList.add("purpleActivo");
				setColor(nuevosColores[thecolor]);
			}
			else if(divPurple.classList.length > 0){
				divPurple.classList.add("purpleNoActivo");
				divPurple.classList.remove("purpleActivo");
			
				const aleatorio = Math.floor(Math.random() * 4)
				if(aleatorio=== 3){
					divPurple.classList.remove("purpleNoActivo");
					divPurple.classList.add("purpleActivo");
				}
				 setColor(nuevosColores[aleatorio]);
			}
			
		}else {
			if(coloresPosibles.length===3 && divPurple.classList.length===0){
				setColor(coloresPosibles[thecolor-1]);
			}
			else if(coloresPosibles.length===3 && divPurple.classList.length>0){
				setColor(nuevosColores[Math.floor(Math.random() * 4)]);
			}
			else{
				divPurple.classList.remove("purpleActivo");
				divPurple.classList.add("purpleNoActivo");
				setColor(nuevosColores[thecolor]);
			}
			
		}

	}



	useEffect( ()=> {

		document.querySelector(".semaforo div:nth-child(4)").classList.remove("purpleNoActivo")
	},[])

	return (
		<>
		<Semaforo 
		// addEstado={enviarAlPadre} 
		enviarSate={setColor}
		estadoRojo={color === "RedActivo" ? "RedActivo" : "RedNoActivo" } 
		estadoNaranja={color === "orangeActivo" ? "orangeActivo" : "orangeNoActivo" } 
		estadoVerde={color === "greenActivo" ? "greenActivo" : "greenNoActivo" } 
		estadoPurpura={color === "purpleActivo"? "purpleActivo" : "purpleNoActivo" } 
		nuevoAleatorio={addAleatorio}
		/>
		<NuevoColor nuevoColor={addAleatorio}/>
		</>
	);
};

export default TrafficLight;