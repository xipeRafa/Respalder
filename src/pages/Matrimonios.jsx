

import { useEffect, useState } from 'react';




export default function Matrimonios({ arrOrders, setGetArrOrders, getArrOrders }) {

        const pendientes = arrOrders.filter((el) => el.city === "san carlos").filter((el) => el.takenByCustomer === false ).length
        const entregados = arrOrders.filter((el) => el.city === "san carlos").filter((el) => el.takenByCustomer === true ).length


     useEffect(()=>{
        setGetArrOrders(!getArrOrders)
    },[])



















     const[state, setState]=useState(true)


    return (
        <>
                <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}} >Nuevo Matrimonio</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? 
                                    
                                <div className='formInfoToSave'>
                                    <p>Respaldar Acta de Matrimonio</p>
                                    <input type="text" placeholder='Nombre del Esposo' />
                                    <input type="text" placeholder='Nombre de la Esposa' />

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                                    <button className='button-primary'>
                                        GUARDAR
                                    </button>
                                </div>    

                            : 

                            <div className='formInfoToFind'>
                                <div>
                                    <label htmlFor="avatar1">Buscar con Nombre del Esposo:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre...' />
                                </div>
                                <div>
                                    <label htmlFor="avatar1">Buscar con Nombre de la Esposa:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre...' />
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar con Fecha:</label>
                                    <input type="date" id='avatar2'  />
                                </div>
                            </div>
                }
        </>
    );
}
