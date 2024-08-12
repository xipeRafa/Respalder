
import { useEffect, useState} from 'react';



export default function Parroquia({ arr, setGetArr, getArr }) {


   
    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 

    useEffect(()=>{
        setGetArr(!getArr)
    },[])

















    return (
        <>
            <p>Parroquia</p>
        </> 
    );
}
