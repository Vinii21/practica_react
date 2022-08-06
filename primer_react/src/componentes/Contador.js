import React, {useState, useEffect} from "react";
import Boton from "./../elementos/Boton";

const Contador = (props) => {
    /* Hook useState */
    const [contador, cambiarContador] = useState(0);

    //pide un parametro siempre, y eso es un array function
    //Esto es el equivalente a componentDidMount y componentDidUpdate
    /* useEffect(() => {
        console.log('Cambio al montar el componente y al actualizarlo')
    }); */

    //Esto es el equivalente a componentDidMount
    //Sirve para llamar una API o una base de datos
    /* useEffect(() => {
        console.log('Solo carga la primera vez')
    }, []); */

    //Se ejecuta cuando cambie el estado de la dependecia que se le pase cambie.
    /* useEffect(() => {
        console.log('El estado del contador cambio')
    }, [contador]); */


    //Es el equivalente a componentWillUnmount
    useEffect(() => {
        console.log('Me ejecuto a la primera')

        return(()=>{
            console.log('Se desmonto el componente') 
        });
    },[]);



    /* Propiedades, props */
    const cantidadAIncrementar = props.cantidadAIncrementar;
    const cantidadADisminuir= props.cantidadADisminuir;

    /* Funcion que cambia el useState */
    const matematica = (evento) => {
        if(evento.target.name === 'mas'){
            cambiarContador(contador + cantidadAIncrementar)
        }
        if(evento.target.name === 'menos'){
            cambiarContador(contador - cantidadADisminuir)
        }
    }


    /* El Render de nuestro componente funcional */
    return (
        <div>
            <h1>Contador funcional: {contador}</h1>
            <Boton black marginRight name="mas" onClick={matematica}>Más</Boton>
            <Boton black name="menos" onClick={matematica}>Menos</Boton>
        </div>
    );
}
 
export default Contador;