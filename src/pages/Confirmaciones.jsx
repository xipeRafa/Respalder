
import { useState } from 'react';



export default function Confirmaciones({postFile, arrParroquiaState, setGetArr, getArr}) {


      const[objectState, setObjectState]=useState({
                nombreConfirmacion:'',
                fechaConfirmacion:''
        })



        const { nombreConfirmacion, fechaConfirmacion } = objectState


        const handlerObjectsState =({target})=>{
                const{ name, value } = target
                setObjectState({...objectState, [name]:value})
        }



        const[fileState, setFileState]=useState('')


        const handlerGetFile =(event)=>{
                setFileState(event.target.files[0])   
        }






        const submit=()=>{

            if(nombreConfirmacion.length <= 0){
                    alert('El Nombre esta Vacio')
                    return
            }

            if(confirm(`Quiere Guardar este Documento?`)) {
                    setTimeout(()=>{
                            alert('Documento Guardado')
                    },2000)
            }
             
            objectState.email = localStorage.userEmailLS  
            objectState.nombreConfirmacion = nombreConfirmacion.trim()
            postFile(fileState, objectState)

            setObjectState({nombreConfirmacion:'', fechaConfirmacion:''})

        }



//=-=-=-= FINDER -=-=-=-=-==-=-=-=-=
        
        const [emptyState, setEmptyState] = useState(false)

        


        const [nameFinder, setNameFinder] = useState(null)


        const [valueNameFinder, setValueNameFinder] = useState('')



        const handlerNameFinder =({target})=>{

            setDateFinder(null)

            const{ name, value } = target

            setValueNameFinder(value)

            if(value.length>4){

                setGetArr(!getArr)

            
                let found = arrParroquiaState.filter((el) => el[name].indexOf(value) > -1)

                if(found.length>=1){
                        setNameFinder(found[0][name])
                        setEmptyState(false)
                }else{
                        setEmptyState(true)
                }


            }
           
        }




        const[dateFinder, setDateFinder]=useState(null)

        const handlerDateFinder=({target})=>{

            setNameFinder(null)
            const{ name, value } = target

            let found = arrParroquiaState.filter(el => el[name] == value)

            if(found.length>=1){
                    setGetArr(!getArr)
                    setDateFinder(value)
                    setEmptyState(false)   
            }else{
                    setEmptyState(true)
            } 

        }


        

        const[stateButtons, setStateButtons]=useState(true)

   










    return (
        <>

            <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>setStateButtons(true)} >Nueva Confirmación</button>
                <button onClick={()=>setStateButtons(false)}>Buscar</button>

           </div> 


                {
                    stateButtons ? 
                                   
                                <div className='formInfoToSave'>

                                    <p>Respaldar Acta de Confirmacion</p> 

                                    <input type="text" name='nombreConfirmacion' placeholder='Nombre...' value={nombreConfirmacion} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaConfirmacion' value={fechaConfirmacion} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="file"  name="fileConfirmacion" onChange={(e)=>handlerGetFile(e)} />

                                    <button className='button-primary' onClick={submit}>
                                        GUARDAR
                                    </button>

                                </div>    


                            : 

                            <div className='formInfoToFind'>

                                <div>
                                    <label htmlFor="avatar1">Buscar Confirmación con Nombre:</label>
                                    <input type="search"  id='avatar1' name='nombreConfirmacion' value={valueNameFinder} 
                                            onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo...'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Confirmación con Fecha:</label>
                                    <input type="date" id='avatar2' value={dateFinder} name='fechaConfirmacion' 
                                            onChange={(e)=>handlerDateFinder(e)} />
                                </div>




                                <p  className={nameFinder === null ? 'd-none' : 'cerrar'} onClick={()=>setNameFinder(null)}>
                                        Cerrar Busquedas ✘ 
                                </p>

                                <p  className={dateFinder === null ? 'd-none' : 'cerrar'} onClick={()=>setDateFinder(null)}>
                                        Cerrar Busquedas ✘
                                </p>

                                <p  className={!emptyState ? 'd-none' : 'no-encontrado' } onClick={()=>setEmptyState(false)}>No Encontrado ✘</p>



                                {
                                        nameFinder !== null ? 

                                        <div className='w-100'>
                                            {arrParroquiaState.filter(el => el.nombreConfirmacion === nameFinder).map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p><span>Nombre:</span> {el.nombreConfirmacion}</p>
                                                    <p><span>Fecha:</span> {el.fechaConfirmacion}</p>
                                                    <p><span>Documento:</span> {el.fileName}</p>
                                                    <a className='doc' href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                                    <hr />
                                                </div> 
                                            ))}
                                        </div> 


                                        :

                                        <div className='w-100'>
                                            {arrParroquiaState.filter(el => el.fechaConfirmacion === dateFinder).map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p className='textMarc'><span>Nombre:</span> {el.nombreConfirmacion}</p>
                                                    <p><span>Fecha:</span> {el.fechaConfirmacion}</p>
                                                    <p><span>Documento:</span> {el.fileName}</p>
                                                    <a className='doc' href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                                    <hr />
                                                </div>
                                            
                                            ))}
                                        </div>

                                    }

                            </div>

                }

        </>
    );
}
