import React, {useState} from 'react';
import './FormularioIniciSesion.css';

const FormularioInicioSession = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChange = (evento) => {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value);  
        }
        if(evento.target.name === 'password'){
            cambiarPassword(evento.target.value);  
        }
    };
    const onSubmit = (evento) => {
        evento.preventDefault();/* Esto, impide que se recargue la pagina */
        if (usuario === 'Vinicio' && password === '123'){ /* solo se neceista una facil validadcion */
            props.cambiarEstadoSesion(true);
        } else if(usuario === '' && password === '') {
            alert('Ingresa datos en los input')
        } else {
            alert('Datos incorrectos')
            cambiarUsuario('');
            cambiarPassword('');
        }
    };

    return (/* no quiero que vuela a refrescar la pagina */
        <form action='' onSubmit={onSubmit} className="formulario"> 
            <h1>Noo has iniciado Sesion!!</h1> 
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario" className="label">Usuario</label>
                <input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChange}
                className="input"
                />
            </div>
            <div>
                <label htmlFor="password" className="label">Contraseña</label>
                <input 
                type="password"
                name="password" 
                id="password"
                value={password}
                onChange={onChange}
                className="input"
                />
            </div>
            <button className="boton" type="submit">Iniciar sesion</button>
        </form>
    );
}
 
export default FormularioInicioSession;