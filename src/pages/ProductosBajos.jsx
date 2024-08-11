
import { useEffect, useState } from 'react';



export default function ProductoBajos({ arr, setGetArr, getArr }) {

   
    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 


     useEffect(()=>{
        setGetArr(!getArr)
    },[])

   const[state, setState]=useState(false)


    return (
        <>
             <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}}>Nueva Defuncion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 

           
                {
                    state ? <p>Nuevo</p> : <p>Buscar</p>
                }
        </>
    );
}
