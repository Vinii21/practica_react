import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';

const session = true;

/* Componente APP */
const App = () => {
  return(
    <>
      {session === true ? 
      <>
      <Usuario />
    </>
    : <p>Noo has iniciado Sesion!!</p> }
  </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < App />
);