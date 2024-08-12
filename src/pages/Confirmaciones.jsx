
import { useEffect, useState } from 'react';



export default function Confirmaciones({arrParroquiaState, setGetArr, getArr}) {



    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 






    // useEffect(()=>{
    //     setGetArr(!getArr)
    // },[])


   
















  const[state, setState]=useState(true)


    return (
        <>

            <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}} >Nueva Confirmacion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? 
                                    
                                <div className='formInfoToSave'>
                                    <p>Respaldar Acta de Confirmación</p>
                                    <input type="text" placeholder='Nombre' />
                                    <input type="date" />

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                                    <button className='button-primary'>
                                        GUARDAR
                                    </button>
                                </div>    
 
                            : 

                            <div className='formInfoToFind'>
                                <div>
                                    <label htmlFor="avatar1">Buscar Acta de Confirmación con Nombre:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre' />
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Acta de Confirmación con Fecha:</label>
                                    <input type="date" id='avatar2' placeholder='Nombre' />
                                </div>
                            </div>
                }

        </>
    );
}
