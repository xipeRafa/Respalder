import { useEffect, useState } from "react";

import DatePickerComponent from '../components/datePicker/DatePickerComponent'


export default function Bautisos({postRegister, arrParroquiaState, setGetArr, getArr}) {


//console.log(arrParroquiaState)


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


        const[objectState, setObjectState]=useState({
                nombreBautismo:'',
                fechaBautismo:''
            })

        const { nombreBautismo, fechaBautismo } = objectState


        const handlerObjectsState =({target})=>{
            const{ name, value } = target
            setObjectState({...objectState, [name]:value})
        }




        const[fileState, setFileState]=useState('')

        const handlerGetFile =(event)=>{

            const file = event.target.files[0]


            // let extension = file.name.split('.')[1];

            // let nameNoExtension = file.name.split('.')[0];

            // let nuevo_nombre = `${Date.now() + nameNoExtension}.${extension}`;


            // fetch(file).then(res => res.blob())
            //     .then(blob => {
            //         console.log(blob)
            //         const fileX = new File([blob], nuevo_nombre, { 
            //             type: `application/${extension}`
            //         }
            //     )
            //     setFileState(fileX)
            // })

            setFileState(file)
        }


        const submit=()=>{

            if(nombreBautismo.length <= 0){
                alert('El Nombre esta Vacio')
                return
            }

            if(confirm(`Quiere Guardar este Documento?`)) {
                    setTimeout(()=>{
                        alert('Documento Guardado')
                    },2000)
            }
              

            postRegister(fileState, objectState)

            setObjectState({
                nombreBautismo:'',
                fechaBautismo:''
            })
        }



//finder-=-=-=-=-==-=-=-=-=

        const[nameFinder, setNameFinder]=useState()

        const handlerNameFinder =({target})=>{

            const{ name, value } = target
            
            let found = arrParroquiaState.filter((el) => el.nombreBautismo.indexOf(value) > -1)


            if(found.length>=1){
                setNameFinder(found[0][name])
                console.log('found===>', found[0].nombreBautismo)
            }else{
                console.log('no hay')
            }


            console.log('found===>', found)

           
        }
 console.log('nameFinder', nameFinder)
//.replace(/\b\w/g, l => l.toUpperCase())

        const[dateFinder, setDateFinder]=useState()

        const handlerDateFinder=({target})=>{
            const{ value } = target
            setDateFinder(value)
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

                                    <input type="text" name='nombreBautismo' placeholder='Nombre' value={nombreBautismo} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaBautismo' value={fechaBautismo} onChange={(e)=>handlerObjectsState(e)} />

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
                                    <input type="text"  id='avatar1' name='nombreBautismo' onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Bautismo con Fecha:</label>
                                    <input type="date" id='avatar2'  name='fechaBautismoFinder' onChange={(e)=>handlerDateFinder(e)} />
                                </div>


                                 <div className='w-100'>{
                                    arrParroquiaState.filter(el => el.nombreBautismo == nameFinder).map((el, i)=>(
                                        <div key={i}>
                                            <p className='textMarc'>Nombre: {el.nombreBautismo}</p>
                                            <p>Fecha Bautismo: {el.fechaBautismo}</p>
                                            <p>Documento: {el.fileName}</p>
                                            <a href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                        </div> 
                                    ))
                                }</div>

                                <div className='w-100'>{
                                    arrParroquiaState.filter(el => el.fechaBautismo === dateFinder).map((el, i)=>(
                                        <div key={i}>
                                            <p className='textMarc'>Nombre: {el.nombreBautismo}</p>
                                            <p>Fecha Bautismo: {el.fechaBautismo}</p>
                                            <p>Documento: {el.fileName}</p>
                                            <a href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                            <hr />
                                        </div>
                                        
                                    ))
                                }</div>

                                


                            </div>
                }
        </>
    );
}


























