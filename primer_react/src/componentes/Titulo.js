import React from "react";

const TituloRojo = () => {
    let nombre = 'Vinicio';
    const color = "red";

    return (<h1 className="titulo" style={{color: color}}>Hola {nombre} algo positivo</h1>);
}

const TituloAzul = () => {
    let nombre = 'Vinicio';
    const color = "blue";

    return (<h1 className="titulo" style={{color: color}}>Hola {nombre} algo positivo</h1>);
}
 
export {TituloAzul, TituloRojo};