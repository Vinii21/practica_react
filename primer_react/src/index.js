import React from 'react';
import ReactDOM from 'react-dom/client';


let nombre = 'Vinicio';
const colorBlue = "blue";
const session = true;
const pais = undefined;
const amigos = ['Pedro','Marcos','Pablo','Shana','Mayx'];


const JSX = (
  <>
    {session === true ? 
    <>
      <h1 className="titulo" style={{color: colorBlue}}>Hola {nombre} algo positivo</h1> 
     <p>Todo cool, todo bien</p>
     {pais && <p>Tu país es: {pais}</p>}
     <ul>
       {amigos.map( (amigo, index) => <li key={index}>{amigo}</li> )}
     </ul>
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