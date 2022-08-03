import React from 'react';
import ReactDOM from 'react-dom/client';


let nombre = 'Vinicio';
const colorBlue = "red";
const session = true;
const pais = undefined;
const manzanas = 80;
const amigos = ['Pedro','Marcos','Pablo','Shana','Mayx'];

/* Componente de React */
const Usuario = () => {
  return(
    <>
      <h1 className="titulo" style={{color: colorBlue}}>Hola {nombre} algo positivo</h1> 
      <p>Todo cool, todo bien</p>
      {pais && <p>Tu país es: {pais}</p>}
      {manzanas && <p>La catidad de tus manzanas es: {manzanas}</p>}
      <ul>
        {amigos.map( (amigo, index) => <li key={index}>{amigo}</li> )}
      </ul>
    </>
  );
};

/* Componente APP */

const App = () => {
  return(
    <>
      {session === true ? 
      <>
      <Usuario />
      <Usuario />
    </>
    : <p>Noo has iniciado Sesion!!</p> }
  </>
  );
};


/* const JSX = (
  
);

 */
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
  < App />
);