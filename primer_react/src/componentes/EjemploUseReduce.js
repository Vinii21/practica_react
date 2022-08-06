import React, {useReducer} from "react";
import Boton from "../elementos/Boton";

/* estado inicial */
const contadorInicial = {contador: 0}

//Reducer escucha el tipo de estado
const reducer = (estado, accion) => {
    switch(accion.tipo){
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DISMINUIR':
            return {contador: estado.contador - 1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return estado;
    }
};

const EjemploUseReduce = () => {
   const [estado, dispatch] = useReducer(reducer, contadorInicial);


    return (
        <div>
            <h1>Contador funcional: {estado.contador}</h1>
            <Boton black marginRight
            onClick={()=> {
                dispatch({tipo: 'INCREMENTAR'})
            }}
            >Más</Boton>
            <Boton black onClick={()=>{
                dispatch({tipo: 'DISMINUIR'})
            }}>Menos</Boton>
            <Boton black onClick={()=>{
                dispatch({tipo: 'REINICIAR'})
            }}>Reiniciar</Boton>
        </div>
    );
}
 
export default EjemploUseReduce;