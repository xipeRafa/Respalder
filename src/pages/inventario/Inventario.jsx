
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
                <button onClick={()=>{setState(true)}} >Nueva Confirmacion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? <p>
                                    
                                <div className='formInfoToSave'>
                                    <input type="text" placeholder='Nombre' />

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                                    <button className='button-primary'>
                                        GUARDAR
                                    </button>
                                </div>    




                                   
                            </p> 
                            : <div className='formInfoToFind'>
                                <div>
                                    <label for="avatar1">Buscar con Nombre:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre' />
                                </div>
                                <div>
                                    <label for="avatar2">Buscar con Fecha:</label>
                                    <input type="date" id='avatar2' placeholder='Nombre' />
                                </div>
                            </div>
                }

        </>
    );
}
