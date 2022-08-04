import React, {useState} from "react";

const Contador = () => {
    const [contador, cambiarContador] = useState(0);


    const matematica = (evento) => {
        if(evento.target.name === 'mas'){
            cambiarContador(contador + 1)
        }
        if(evento.target.name === 'menos'){
            cambiarContador(contador - 1)
        }
    }

    return (
        <div>
            <h1>Contador funcional: {contador}</h1>
            <button name="mas" onClick={matematica}>Más</button>
            <button name="menos" onClick={matematica}>Menos</button>
        </div>
    );
}
 
export default Contador;