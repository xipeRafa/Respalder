
import { useEffect } from 'react';


export default function Usuarios({ arrOrders, setGetArrOrders, getArrOrders, arr, setGetArr, getArr}) {



     useEffect(()=>{
        setGetArrOrders(!getArrOrders)
         setGetArr(!getArr)
    },[])




        const formateador = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "long",
        timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
        return formateador.format(new Date(milisegundos));
    };



    return (
        <>
            <p>Usuarios</p>
        </>
    );
}
