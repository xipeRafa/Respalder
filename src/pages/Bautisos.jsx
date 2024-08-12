import { useEffect, useState } from "react";

import DatePickerComponent from '../components/datePicker/DatePickerComponent'


export default function Bautisos({postRegister, arrParroquiaState, setGetArr, getArr}) {





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


        const[objectState, setObjectState]=useState({})

        const handlerObjectsState =({target})=>{
            const{ name, value } = target
            setObjectState({...objectState, [name]:value})
        }

        const[fileState, setFileState]=useState()

        const handlerGetFile =(event)=>{
            const file = event.target.files[0]
            setFileState(file)
        }

        console.log(fileState)

        const submit=()=>{
            console.log('se mamaron')
            postRegister(fileState, objectState)
        }

       





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

                                    <input type="text" name='nombreBautismo' placeholder='Nombre' onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaBautismo' onChange={(e)=>handlerObjectsState(e)} />

                                    {/*<DatePickerComponent />*/}

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}

                                    <input type="file"  name="fileBautismo" onChange={(e)=>handlerGetFile(e)} />

                                    <button className='button-primary guardar' onClick={submit}>
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


























