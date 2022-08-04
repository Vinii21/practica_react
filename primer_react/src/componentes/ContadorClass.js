import React, { Component } from "react";

class Contador extends Component {/* Se debe extender component, estos se trea de react */
    constructor(props){
        super(props);
        this.state = { contador: 0 }
    }

    componentDidCatch(){
        /* Ejecuta cuando el componente se monta, se carga */
    }

    componentDidUpdate(){
        /* Ejecuta cuando el componente se actualiza */
    }

    componentWillUnmount(){
        /* Se ejecuta cuando el componente se desmonta */
    }

    incrementar(cantidad){
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador + cantidad
            }
        });
    }
     disminuir(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador - cantidad
            }
        })
    }

    render(){/* Lo que quieras mostrar en pantalla debe ir aqui */
            return(
                <div>
                    <h1>Contador: {this.state.contador}</h1>
                    <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)} >Incrementar</button>
                    <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
                </div>
            );
        }
}

export default Contador;