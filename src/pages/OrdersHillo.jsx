
 import { useEffect, useState } from 'react';



export default function OrdersHillo({ arrOrders, setGetArrOrders, getArrOrders }) {

    const pendientes = arrOrders.filter((el) => el.city === "hermosillo").filter((el) => el.takenByCustomer === false ).length
    const entregados = arrOrders.filter((el) => el.city === "hermosillo").filter((el) => el.takenByCustomer === true ).length



    useEffect(()=>{
        setGetArrOrders(!getArrOrders)
    },[])









    const[state, setState]=useState(false)

    return (
        <>
             <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}}>Primera Comunion</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 

           
                {
                    state ? <p>Nuevo</p> : <p>Buscar</p>
                } 
        </>
    );
}
