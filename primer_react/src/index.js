import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSession from './componentes/FormularioInicioSesion';
/* import ContadorClass from './componentes/ContadorClass'; */
import Contador from './componentes/Contador';
import './index.css';

/* Componente APP */
const App = () => {
  const [session, cambiarEstadoSesion] = useState(false);

  return(
    <div className="contenedor">
      {session === true ? 
      <>
        <Usuario />
        {/* <ContadorClass cantidadAIncrementar ={10} cantidadADisminuir={2} /> */}
        <hr/>
        <Contador cantidadAIncrementar ={10} cantidadADisminuir={2} />
        <hr/>
        <button onClick={() => cambiarEstadoSesion(false)} >Cerrar Sesión</button>
      </>
      :
      <>
      <FormularioInicioSession cambiarEstadoSesion={cambiarEstadoSesion} />
      {/* <button onClick={() => cambiarEstadoSesion(true)} >Iniciar Sesión</button> */}
      </> 
      }
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < App />
);