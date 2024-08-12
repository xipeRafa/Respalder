
 import { useEffect, useState } from 'react';



export default function Comuniones({arrParroquiaState, setGetArr, getArr}) {





    // useEffect(()=>{
    //     setGetArrOrders(!getArrOrders)
    // },[])









    const[state, setState]=useState(true)

    return (
        <>
                <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}} >Primera Comunión</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? 
                                    
                                <div className='formInfoToSave'>
                                    <p>Respaldar Acta de Primera Comunión</p>
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
                                    <label htmlFor="avatar1">Buscar Primera Comunión con Nombre:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre' />
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Primera Comunión con Fecha:</label>
                                    <input type="date" id='avatar2' placeholder='Nombre' />
                                </div>
                            </div>
                } 
        </>
    );
}
