import { useState } from "react";

//import DatePickerComponent from '../components/datePicker/DatePickerComponent'

//import {saveAs} from 'file-saver'

//var zip =require('jszip')()

//import zip from 'jszip'
//import JSZip from 'jszip';

export default function Bautisos({postRegister, arrParroquiaState, setGetArr, getArr, finderFireBase}) {


        const[objectState, setObjectState]=useState({
                nombreBautismo:'',
                fechaBautismo:''
        })


        const { nombreBautismo, fechaBautismo } = objectState


        const handlerObjectsState =({target})=>{
                const{ name, value } = target
                setObjectState({...objectState, [name]:value })
        }



        const[fileState, setFileState]=useState('')


        const handlerGetFile =(event)=>{
                setFileState(event.target.files[0])   
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
            
            objectState.email = localStorage.userEmailLS
            objectState.nombreBautismo = nombreBautismo.trim()  
            postRegister(fileState, objectState)

            setObjectState({nombreBautismo:'', fechaBautismo:''})

        }



//=-=-=-= FINDER -=-=-=-=-==-=-=-=-=
        
        const [emptyState, setEmptyState] = useState(true)

        


        const [nameFinder, setNameFinder] = useState(null)



console.log('nameFinder:', nameFinder)

        const buscarEnFirebase=()=>{
            finderFireBase(nameFinder) 
            setGetArr(!getArr) 

            if(arrParroquiaState.length>=1){
                setEmptyState(false)
                console.log('false')
            }       
        }

        const handlerNameFinder =({target})=>{
            const{ name, value } = target
            setNameFinder(value)
        }





        

        const[stateButtons, setStateButtons]=useState(true)


 
    return (
            <>

                <div className='ButtonsNuevoBuscar'>
                        <button onClick={()=>setStateButtons(true)}>  Nuevo Bautismo </button>
                        <button onClick={()=>setStateButtons(false)}> Buscar {/*<span className='lupita'>⌕</span>*/} </button>
                </div> 




                {
                    stateButtons ? 
                                   
                                <div className='formInfoToSave'>

                                    <p>Respaldar FE de Bautismo</p> 

                                    <input type="text" name='nombreBautismo' placeholder='Nombre...' value={nombreBautismo} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaBautismo' value={fechaBautismo} placeholder='Fecha de Bautismo' onChange={(e)=>handlerObjectsState(e)} />


                                    {/*<label for="avatar">Choose a profile picture:</label>*/}

                                    <input type="file"  name="fileBautismo" onChange={(e)=>handlerGetFile(e)} />

                                    <button className='button-primary' onClick={submit}>
                                        GUARDAR
                                    </button>


                                </div>    


                            : 

                            <div className='formInfoToFind'>

                                <div>
                                    <label htmlFor="avatar1">Buscar Bautismo con Nombre:</label>
                                    <input type="search"  id='avatar1' name='nombreBautismo' className='w-80'
                                            onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo...'/>
                                            <button className='btn-buscar' onClick={buscarEnFirebase}> <span className='lupita'>⌕</span></button>
                                </div>





                                <p  className={emptyState ? 'd-none' : 'cerrar'} onClick={()=>setEmptyState(!emptyState)}>
                                        Cerrar Busqueda ✘ 
                                </p>

                              

                                {/*<p   onClick={} className={arrParroquiaState.length === 0 ? 'd-none' : 'no-encontrado'}}>No Encontrado ✘</p>*/}



                                
                                       

                                        <div className={emptyState ? 'd-none' : 'w-100'} >
                                            {arrParroquiaState.map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p><span>Nombre:</span> {el.nombreBautismo}</p>
                                                    <p><span>Fecha:</span> {el.fechaBautismo}</p>
                                                    <p><span>Documento:</span> {el.fileName}</p>
                                                    <a className='doc' href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                                    <hr />
                                                </div> 
                                            ))}
                                        </div> 


                                     

                            </div>

                }

            </>
    );
}







































