import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';



const App = () => {
  // Obtenemos tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  //Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando el estado dentro de localStorage
  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])

  // Accedemos a localstorage y comprobar si mostrarCompletadas tiene valor null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') == null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //Estado de mostrarCompletadas
  const [mostrarTareasCompletadas, cambiarCompletadas] = useState(configMostrarCompletadas);

  //Guardando estado de mostrarCompletadas
  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarTareasCompletadas.toString());
  }, [mostrarTareasCompletadas])

  console.log(tareas)

  return (
    <div className="contenedor">
      <Header mostrarTareasCompletadas={mostrarTareasCompletadas} cambiarCompletadas={cambiarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarTareasCompletadas={mostrarTareasCompletadas}/>
    </div>
  );
}

export default App;
