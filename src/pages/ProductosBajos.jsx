
import { useEffect, useState } from 'react';



export default function ProductoBajos({ arr, setGetArr, getArr }) {

   
    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 


     useEffect(()=>{
        setGetArr(!getArr)
    },[])

   const[state, setState]=useState(true)


    return (
        <>
                <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}} >Nuevo Defuncion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? <p>
                                    
                                <div className='formInfoToSave'>
                                    <p>Respaldar Acta de Defuncion</p>
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
