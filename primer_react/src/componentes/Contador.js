import React, {useState} from "react";
import Boton from "./../elementos/Boton";

const Contador = (props) => {
    /* Hook useState */
    const [contador, cambiarContador] = useState(0);

    /* Propiedades, props */
    const cantidadAIncrementar = props.cantidadAIncrementar;
    const cantidadADisminuir= props.cantidadADisminuir;

    /* Funcion que cambia el useState */
    const matematica = (evento) => {
        if(evento.target.name === 'mas'){
            cambiarContador(contador + cantidadAIncrementar)
        }
        if(evento.target.name === 'menos'){
            cambiarContador(contador - cantidadADisminuir)
        }
    }


    /* El Render de nuestro componente funcional */
    return (
        <div>
            <h1>Contador funcional: {contador}</h1>
            <Boton name="mas" onClick={matematica}>Más</Boton>
            <Boton name="menos" onClick={matematica}>Menos</Boton>
        </div>
    );
}
 
export default Contador;