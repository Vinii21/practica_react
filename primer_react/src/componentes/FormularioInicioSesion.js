import React, {useState} from 'react';

const FormularioInicioSession = () => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChangeUsuario = (evento) => {
        cambiarUsuario(evento.target.value);
    };

    const onChangePassword = (evento) => {
        cambiarPassword(evento.target.value);
    };

    return (
        <form action=''>
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChangeUsuario}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password"
                name="password" 
                id="password"
                value={password}
                onChange={onChangePassword}
                />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    );
}
 
export default FormularioInicioSession;