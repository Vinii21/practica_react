import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({mostrarTareasCompletadas,cambiarCompletadas}) => {
    const toggleCompletada = () => {
        cambiarCompletadas(!mostrarTareasCompletadas)
    }

    return (
        <header className="header">
            <h1 className="header__titulo">Lista de Tareas</h1>
            {mostrarTareasCompletadas ? 
                <button 
                className="header__boton"
                onClick={()=> toggleCompletada()}
                >No mostrar Completadas
                <FontAwesomeIcon 
                icon={faEyeSlash} 
                className="header__icono-boton"
                />
            </button>
            :
            <button
            className="header__boton"
            onClick={()=> toggleCompletada()}
            >
            Mostrar Completadas
            <FontAwesomeIcon icon={faEye} className="header__icono-boton"/>
            </button>
            }
            
        </header>
    );
}
 
export default Header;
