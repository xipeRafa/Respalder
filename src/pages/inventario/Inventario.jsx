
import { useEffect, useState } from 'react';

import './inventario.css'


export default function Inventario({ arr, setGetArr, getArr }) {

console.log(arr)

    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 



    const [valueState, setValueState] = useState('')

    const handleSearch = (e) => {
        const { value } = e.target
        setValueState(value)
    }



    useEffect(()=>{
        setGetArr(!getArr)
    },[])


      if(valueState.length > 3){
        arr = arr.filter(el => el.id == valueState.trim())
      }else{
        arr = arr
      }      

















  const[state, setState]=useState(false)


    return (
        <>

            <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}}>Nueva Confirmacion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 

           
                {
                    state ? <p>Nuevo</p> : <p>Buscar</p>
                }

        </>
    );
}
