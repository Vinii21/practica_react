import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea,cambiarEstadoInput] = useState('');

    const handleInput = (e) => {
        cambiarEstadoInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                 {
                     id: uuidv4(),
                     texto: inputTarea,
                     completada: false
                 }
            ]
        );
        cambiarEstadoInput('');
    }

    return (
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input
            type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={handleInput}
            />
            <button
            type="submit"
            className="formulario-tareas__btn"
            >
               <FontAwesomeIcon icon={faPlus} className="formulario-icon__btn" />     
            </button>
        </form>
    );
}
 
export default FormularioTareas;