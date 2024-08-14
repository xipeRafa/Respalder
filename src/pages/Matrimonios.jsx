
import { useState } from 'react';



export default function Matrimonios({postRegister, arrParroquiaState, setGetArr, getArr}) {


      const[objectState, setObjectState]=useState({
                nombreMatrimonio:'',
                fechaMatrimonio:''
        })


        const { nombreMatrimonio, fechaMatrimonio } = objectState


        const handlerObjectsState =({target})=>{
                const{ name, value } = target
                setObjectState({...objectState, [name]:value.replace(/\b\w/g, l => l.toUpperCase())})
        }



        const[fileState, setFileState]=useState('')


        const handlerGetFile =(event)=>{
                setFileState(event.target.files[0])   
        }






        const submit=()=>{

            if(nombreMatrimonio.length <= 0){
                    alert('El Nombre esta Vacio')
                    return
            }

            if(confirm(`Quiere Guardar este Documento?`)) {
                    setTimeout(()=>{
                            alert('Documento Guardado')
                    },2000)
            }
            
            objectState.nombreMatrimonio = nombreMatrimonio.trim()  
            postRegister(fileState, objectState)

            setObjectState({nombreMatrimonio:'', fechaMatrimonio:''})

        }



//=-=-=-= FINDER -=-=-=-=-==-=-=-=-=
        
        const [emptyState, setEmptyState] = useState(false)

        


        const [nameFinder, setNameFinder] = useState(null)


        const [valueNameFinder, setValueNameFinder] = useState('')

        const handlerNameFinder =({target})=>{

            setDateFinder(null)

            const{ name, value } = target

            setValueNameFinder(value.replace(/\b\w/g, l => l.toUpperCase()))

            if(value.length>4){

                setGetArr(!getArr)
            
                let found = arrParroquiaState.filter((el) => el[name].indexOf(value.replace(/\b\w/g, l => l.toUpperCase())) > -1)

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
                <button onClick={()=>setStateButtons(true)} >Nuevo Matrimonio</button>
                <button onClick={()=>setStateButtons(false)}>Buscar</button>

           </div> 


                {
                    stateButtons ? 
                                   
                                <div className='formInfoToSave'>

                                    <p>Respaldar Acta de Matrimonio</p> 

                                    <input type="text" name='nombreMatrimonio' placeholder='Nombre de Esposo...' value={nombreMatrimonio} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaMatrimonio' value={fechaMatrimonio} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="file"  name="fileMatrimonio" onChange={(e)=>handlerGetFile(e)} />

                                    <button className='button-primary' onClick={submit}>
                                        GUARDAR
                                    </button>

                                </div>    


                            : 

                            <div className='formInfoToFind'>

                                <div>
                                    <label htmlFor="avatar1">Buscar Matrimonio con Nombre:</label>
                                    <input type="text"  id='avatar1' name='nombreMatrimonio' value={valueNameFinder} 
                                            onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo de Esposo...'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Matrimonio con Fecha:</label>
                                    <input type="date" id='avatar2' value={dateFinder} name='fechaMatrimonio' 
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
                                            {arrParroquiaState.filter(el => el.nombreMatrimonio == nameFinder).map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p><span>Nombre:</span> {el.nombreMatrimonio}</p>
                                                    <p><span>Fecha:</span> {el.fechaMatrimonio}</p>
                                                    <p><span>Documento:</span> {el.fileName}</p>
                                                    <a className='doc' href={el.fileUrl} target='_blanck'> Abrir Documento</a>
                                                    <hr />
                                                </div> 
                                            ))}
                                        </div> 


                                        :

                                        <div className='w-100'>
                                            {arrParroquiaState.filter(el => el.fechaMatrimonio == dateFinder).map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p className='textMarc'><span>Nombre:</span> {el.nombreMatrimonio}</p>
                                                    <p><span>Fecha:</span> {el.fechaMatrimonio}</p>
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
