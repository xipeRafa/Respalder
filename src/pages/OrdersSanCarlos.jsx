

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
                <button onClick={()=>{setState(true)}}>Nuevo Matrimonio</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 

           
                {
                    state ? <p>Nuevo</p> : <p>Buscar</p>
                }
        </>
    );
}
