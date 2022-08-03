import React from "react";

const Titulo = ({nombre, color}) => {
    return (<h1 className="titulo" style={{color: color}}>
    Hola {nombre} algo positivo</h1>);
}
 
export {Titulo};