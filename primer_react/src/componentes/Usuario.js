import React from 'react';
import { Titulo } from './Titulo';

/* Componente de React */
const Usuario = () => {
    const pais = undefined;
    const manzanas = 80;
    const amigos = ['Pedro','Marcos','Pablo','Shana','Mayx'];

    return(
      <>
        <Titulo nombre = 'Agustin' color = 'green' />
        <Titulo nombre = 'Fabian' color = 'blue' />
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