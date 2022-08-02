import React from 'react';
import ReactDOM from 'react-dom/client';


let nombre = 'Vinicio';
const colorBlue = "blue";
const session = false;


const JSX = (
  <>
    <h1 className="titulo" style={{color: colorBlue}}>Hola {nombre} algo positivo</h1>
    <p>Todo cool, todo bien</p>
  </>
);

const verificar = (parametro) => {
  if(parametro === true){
    return JSX;
  } else {
    return <h1>Algo negativo, session es false</h1>
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  verificar(session)
);