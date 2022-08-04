import React, {useState} from "react";

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
            <button name="mas" onClick={matematica}>Más</button>
            <button name="menos" onClick={matematica}>Menos</button>
        </div>
    );
}
 
export default Contador;