import { useState } from "react";

//import DatePickerComponent from '../components/datePicker/DatePickerComponent'

//import {saveAs} from 'file-saver'

//var zip =require('jszip')()

//import zip from 'jszip'
//import JSZip from 'jszip';

export default function Bautisos({postRegister, arrParroquiaState, setGetArr, getArr}) {


        const[objectState, setObjectState]=useState({
                nombreBautismo:'',
                fechaBautismo:''
        })


        const { nombreBautismo, fechaBautismo } = objectState


        const handlerObjectsState =({target})=>{
                const{ name, value } = target
                setObjectState({...objectState, [name]:value.replace(/\b\w/g, l => l.toUpperCase())})
        }




       

        const[fileState, setFileState]=useState('')

        //const[fileStateBase64, setFileStateBase64]=useState([])

        const handlerGetFile =(event)=>{
                setFileState(event.target.files[0])   
        }



                    // let arrArchivos=[]

                    // Array.from(event.target.files).forEach(el=>{

                    //     let reader = new FileReader()
                    //     reader.readAsDataURL(el)
                    //     reader.onload=function(){
                    //         let arr = []
                    //         let base64 = reader.result
                    //         arr=base64.split(',')
                    //         arrArchivos.push({base64: arr[1], name:el.name})
                    //     }
                    // })

                    // setFileStateBase64({...fileStateBase64, arrArchivos})



        

        // const zip = new JSZip()

        // const downLoadZip64=()=>{
        //          const {arrArchivos}=fileStateBase64

        //             arrArchivos.map(el=>{
        //                 zip.file(el.name, el.base64, {base64:true})
        //             })

        //             zip.generateAsync({type:'blod'})
        //                 .then(function(content){
        //                     saveAs(content, 'semamaron.zip')
        //                 })      
        // }




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
            
            objectState.nombreBautismo = nombreBautismo.trim()  
            postRegister(fileState, objectState)

            setObjectState({nombreBautismo:'', fechaBautismo:''})

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
                        <button onClick={()=>setStateButtons(true)}>  Nuevo Bautismo</button>
                        <button onClick={()=>setStateButtons(false)}> Buscar</button>
                </div> 


                {
                    stateButtons ? 
                                   
                                <div className='formInfoToSave'>

                                    <p>Respaldar FE de Bautismo</p> 

                                    <input type="text" name='nombreBautismo' placeholder='Nombre...' value={nombreBautismo} onChange={(e)=>handlerObjectsState(e)} />

                                    <input type="date" name='fechaBautismo' value={fechaBautismo} onChange={(e)=>handlerObjectsState(e)} />

                                    {/*<DatePickerComponent />*/}

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}

                                    <input type="file"  name="fileBautismo" onChange={(e)=>handlerGetFile(e)} />

                                    <button className='button-primary' onClick={submit}>
                                        GUARDAR
                                    </button>

                                  {/*  <button onClick={()=>downLoadZip64() }>
                                        zip
                                    </button>*/}

                                </div>    


                            : 

                            <div className='formInfoToFind'>

                                <div>
                                    <label htmlFor="avatar1">Buscar Bautismo con Nombre:</label>
                                    <input type="text"  id='avatar1' name='nombreBautismo' value={valueNameFinder} 
                                            onChange={(e)=>handlerNameFinder(e)} placeholder='Nombre Completo...'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar2">Buscar Bautismo con Fecha:</label>
                                    <input type="date" id='avatar2' value={dateFinder} name='fechaBautismo' 
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
                                            {arrParroquiaState.filter(el => el.nombreBautismo === nameFinder).map((el, i)=>(
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


                                        :

                                        <div className='w-100'>
                                            {arrParroquiaState.filter(el => el.fechaBautismo === dateFinder).map((el, i)=>(
                                                <div key={i}>
                                                    <hr />
                                                    <p className='textMarc'><span>Nombre:</span> {el.nombreBautismo}</p>
                                                    <p><span>Fecha:</span> {el.fechaBautismo}</p>
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







































