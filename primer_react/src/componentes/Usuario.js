import React from 'react';
import { TituloAzul, TituloRojo } from './Titulo';

/* Componente de React */
const Usuario = () => {
    const pais = undefined;
    const manzanas = 80;
    const amigos = ['Pedro','Marcos','Pablo','Shana','Mayx'];

    return(
      <>
        <TituloRojo />
        <TituloAzul />
        <p>Todo cool, todo bien</p>
        {pais && <p>Tu país es: {pais}</p>}
        {manzanas && <p>La catidad de tus manzanas es: {manzanas}, y eso es cool</p>}
        <ul>
          {amigos.map( (amigo, index) => <li key={index}>{amigo}</li> )}
        </ul>
      </>
    );
  };

  export default Usuario;