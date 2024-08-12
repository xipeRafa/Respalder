import { useEffect, useState } from "react";




export default function Bautisos({arrParroquiaState, setGetArr, getArr}) {





    const formateador = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "long",
        timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
        return formateador.format(new Date(milisegundos));
    };



    //  useEffect(() => {
    //     setGetArr(!getArr);
    //     setTimeout(() => {
    //         localStorage.removeItem("look");
    //     }, 14000);
    // }, []);





        const[state, setState]=useState(true)








    return (
        <>

           <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}}>Nuevo Bautismo</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? 
                                   
                                <div className='formInfoToSave'>
                                    <p>Respaldar FE de Bautismo</p> 
                                    <input type="text" placeholder='Nombre' />
                                    <input type="date" placeholder='Fecha de Bautismo' />

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                                    <button className='button-primary guardar'>
                                        GUARDAR
                                    </button>
                                </div>    


                            : 

                            <div className='formInfoToFind'>
                                <div>
                                    <label htmlFor="avatar1">Buscar Bautismo con Nombre:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre' />
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Bautismo con Fecha:</label>
                                    <input type="date" id='avatar2' placeholder='Nombre' />
                                </div>
                            </div>
                }
        </>
    );
}


























