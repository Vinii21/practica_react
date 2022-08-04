import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSession from './componentes/FormularioInicioSesion';

/* Componente APP */
const App = () => {
  const [session, cambiarEstadoSesion] = useState(false);

  return(
    <>
      {session === true ? 
      <>
        <Usuario />
        <button onClick={() => cambiarEstadoSesion(false)} >Cerrar Sesión</button>
      </>
      :
      <>
      <p>Noo has iniciado Sesion!!</p> 
      <FormularioInicioSession cambiarEstadoSesion={cambiarEstadoSesion} />
      {/* <button onClick={() => cambiarEstadoSesion(true)} >Iniciar Sesión</button> */}
      </> 
      }
  </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < App />
);