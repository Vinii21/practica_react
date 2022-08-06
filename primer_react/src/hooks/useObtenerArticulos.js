import { useState, useEffect } from "react";

const useObtenerArticulos = () => {

    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    useEffect(()=>{
        setTimeout(()=> {
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'Titulo del primero'
                },
                {
                    id: 2,
                    titulo: 'Titulo del segundo'
                },
                {
                    id: 3,
                    titulo: 'Titulo del tercero'
                }
            ]);
            establecerCargando(false);
        }, 3000)
    }, [])

    //En este caso no retorna codigo JSX
    return [articulos, cargando];
}
 
export default useObtenerArticulos;