import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';



const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: true
      },
      {
        id: 2,
        texto: 'Leer',
        completada: false
      }
    ]
  )

  const [mostrarTareasCompletadas, cambiarCompletadas] = useState(false);

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
