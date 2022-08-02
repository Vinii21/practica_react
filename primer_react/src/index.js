import React from 'react';
import ReactDOM from 'react-dom/client';


let nombre = 'Vinicio';
const colorBlue = "blue";
const session = true;
const pais = 'Costa Rica';


const JSX = (
  <>
    {session === true ? 
    <>
      <h1 className="titulo" style={{color: colorBlue}}>Hola {nombre} algo positivo</h1> 
     <p>Todo cool, todo bien</p>
     {pais && <p>Tu país es: {pais}</p>}
    </>
    : <p>Noo has iniciado Sesion!!</p> }
  </>
);

/* const verificar = (parametro) => {
  if(parametro === true){
    return JSX;
  } else {
    return <h1>Algo negativo, session es false</h1>
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  verificar(session)
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  JSX
);