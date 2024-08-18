import { useState } from "react";


export default function Bautisos({finderCollection, postFile, arrParroquiaState, setGetArr, getArr, finderFireBase}) {


        const[objectState, setObjectState]=useState({
                nombre:'',
                fecha:''
        })


        const { nombre, fecha } = objectState


        const handlerObjectsState =({target})=>{
                const{ name, value } = target
                setObjectState({...objectState, [name]:value.replace(/\b[a-z]/g,c=>c.toUpperCase())})
        }



        const[fileState, setFileState]=useState('')


        const handlerGetFile =(event)=>{
                setFileState(event.target.files[0])   
        }


        const submit=()=>{

            if(nombre.length <= 0){
                    alert('El Nombre esta Vacio')
                    return
            }

            if(confirm(`Quiere Guardar este Documento?`)) {
                    setTimeout(()=>{
                            alert('Documento Guardado')
                    },2000)
            }
            
            objectState.email = localStorage.userEmailLS
            objectState.nombre = nombre.trim()  
            postFile(fileState, objectState)

            setObjectState({nombre:'', fecha:''})

        }



//=-=-=-= FINDER -=-=-=-=-==-=-=-=-=
        
        const [emptyState, setEmptyState] = useState(true)

        


        const [nameFinder, setNameFinder] = useState('')




        const buscarEnFirebase=()=>{

            if(nameFinder.length<=0){
                setEmptyState('Campo de Busqueda Vacio  ✘ ')
                return
            }

            finderFireBase(nameFinder) 
            setGetArr(!getArr)  

            setTimeout(()=>{
                setEmptyState(false)
             },300) 
            
            if(arrParroquiaState.length>=1){
                setEmptyState(false)
            }else{
                setEmptyState('Buscando...')  
            }  

        }





        const handlerNameFinder =({target})=>{
            const{ name, value } = target
            setNameFinder(value.replace(/\b[a-z]/g,c=>c.toUpperCase()))
        }





        

        const[stateButtons, setStateButtons]=useState(true)


 
    return (
            <>
            {localStorage.getItem('userEmailLS') !== null &&<>

                <div className='ButtonsNuevoBuscar'>
                        <button onClick={()=>setStateButtons(true)}>  Nuevo {finderCollection} </button>
                        <button onClick={()=>setStateButtons(false)}> Buscar  {/*<span className='lupita'>⌕</span>*/} </button>
                </div> 




                {
                    stateButtons ? 
                                   
                                <div className='formInfoToSave'>

                                    <p>Respaldar Acta de {finderCollection}</p> 

                                    <input type="text" name='nombre' placeholder='Nombre...' value={nombre} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fecha' value={fecha} onChange={(e)=>handlerObjectsState(e)} />


                                    {/*<label for="avatar">Choose a profile picture:</label>*/}

                                    <input type="file"  accept=".pdf" onChange={(e)=>handlerGetFile(e)}  />

                                    <button className='button-primary' onClick={submit}>
                                        GUARDAR
                                    </button>


                                </div>    


                            : 

                            <div className='formInfoToFind'>

                                <div>
                                    <label htmlFor="avatar1">Buscar {finderCollection} con Nombre:</label>
                                    <input type="search"  id='avatar1' className='w-80' value={nameFinder}
                                            onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo...'/>
                                            <button className='btn-buscar button-primary' onClick={buscarEnFirebase}> <span className='lupita'>⌕</span></button>
                                </div>





                                <p  className={emptyState ? 'd-none' : 'cerrar'} onClick={()=>setEmptyState(!emptyState)}>
                                        Cerrar Busqueda ✘ 
                                </p>
                                  <p  className={!emptyState ? 'd-none' : 'no-encontrado'} onClick={()=>setEmptyState(true)}>
                                        {emptyState}  
                                </p>
                                 
                              

                                {/*<p   onClick={} className={arrParroquiaState.length === 0 ? 'd-none' : 'no-encontrado'}}>No Encontrado ✘</p>*/}



                                
                                       

                                        <div className={emptyState ? 'd-none' : 'w-100'} >
                                            {arrParroquiaState.map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p><span>Nombre:</span> {el.nombre}</p>
                                                    <p><span>Fecha:</span> {el.fecha}</p>
                                                    <p><span>Documento:</span> {el.fileName}</p>
                                                    <a className='doc' href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                                    <hr />
                                                </div> 
                                            ))}
                                        </div> 


                                     

                            </div>

                }
                </>}
            </>
    );
}







































