

import { useEffect, useState } from 'react';




export default function OrdersSanCarlos({ arrOrders, setGetArrOrders, getArrOrders }) {

        const pendientes = arrOrders.filter((el) => el.city === "san carlos").filter((el) => el.takenByCustomer === false ).length
        const entregados = arrOrders.filter((el) => el.city === "san carlos").filter((el) => el.takenByCustomer === true ).length


     useEffect(()=>{
        setGetArrOrders(!getArrOrders)
    },[])



















     const[state, setState]=useState(false)


    return (
        <>
                <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}} >Nuevo Matrimonio</button>
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
