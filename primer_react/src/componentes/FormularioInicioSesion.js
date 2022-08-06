import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Boton from './../elementos/Boton';

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
        <Formulario action='' onSubmit={onSubmit}> 
            <h1>Noo has iniciado Sesion!!</h1> 
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <Label htmlFor="usuario">Usuario</Label>
                <Input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChange}
                className="input"
                />
            </div>
            <div>
                <Label purple htmlFor="password">Contraseña</Label>
                <Input 
                type="password"
                name="password" 
                id="password"
                value={password}
                onChange={onChange}
                className="input"
                />
            </div>
            <Boton type="submit">Iniciar sesion</Boton>
        </Formulario>
    );

}

/* styled components */

const Formulario = styled.form`
    display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 20px;
	margin: 20px 0 0 0;
`;

const Input = styled.input`
    width: 100%;
	padding: 10px;
	border: 2px solid #d1d1d1;
	border-radius: 3px;
`;

const Label = styled.label`
    font-weight: bold;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;

    ${props => props.purple && css`
        color: #f4f;
        font-size: 18px;
    `}
`;
 
export default FormularioInicioSession;