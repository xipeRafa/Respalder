
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { getDocs, collection, updateDoc, doc, addDoc, where, query } from 'firebase/firestore'
import { ref, uploadBytes, getBytes, getDownloadURL, deleteObject } from 'firebase/storage';

import './css/App.css'
import logo from './pages/MIN.jpeg'

import { firestoreDB, storageDocs } from './firebase/firebaseConfig';


import Bautisos from './pages/Bautisos';
import Usuarios from './pages/Usuarios';
import Confirmaciones from './pages/Confirmaciones'

import Comuniones from './pages/Comuniones'
import Matrimonios from './pages/Matrimonios'
import Defunciones from './pages/Defunciones';
import MiParroquia from './pages/MiParroquia';


import Navbar from './components/Navbar';









export default function App() {


    function capitalizarPrimeraLetra(str) {

        let a = str.charAt(0).toUpperCase() + str.slice(1) 
            
        if(str.slice(-2, -1) === 'e'){
            return 'nombre'+a.slice(0, -2)
        }else{
            return 'nombre'+a.slice(0, -1)
        }

    }


    const location = useLocation();

    let fireBaseCollection 
    fireBaseCollection = location.pathname.split('/')[2] 

    let finderCollection = capitalizarPrimeraLetra(fireBaseCollection || 'a')
    const [finderState, setFinderState]=useState('')


    const [arrParroquiaState, setArrParroquiaState] = useState([])
    const [getArr, setGetArr] = useState(false)
console.log(arrParroquiaState)



    useEffect(() => {

        const data = query(collection(firestoreDB, fireBaseCollection || 'bautismos'),
                    where('email', '==', localStorage.getItem('userEmailLS')),
                     where(finderCollection, '==', finderState.trim())
        )

        getDocs(data).then((resp) => {
            setArrParroquiaState(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
            console.error(err)
        })

    }, [getArr]) 


    const finderFireBase=(value)=>{
        setFinderState(value)
    }


   



    const postFile = (selectedFile, postBody) => {


        const postCollection = collection(firestoreDB, fireBaseCollection || 'bautismos');

        const filesFolderRef = ref(storageDocs, `${fireBaseCollection}-Files/${Date.now()}/${selectedFile?.name}`)

        uploadBytes(filesFolderRef, selectedFile)
            .then(() => {

                getDownloadURL(filesFolderRef).then((url) => {
                    postBody.fileName = selectedFile.name
                    postBody.fileUrl = url
                    addDoc(postCollection, postBody)
                })

            })
            .catch((error) => { 
                console.log('postFile Error, App,jsx, linea 82')
                console.log(error)
            })


    }




    const saveCat = (postBody) => {

        delete postBody.password
        delete postBody.name

        const postCollectionCat = collection(firestoreDB, 'cat');


        addDoc(postCollectionCat, postBody)
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => { 
                console.log('saveCat Error, App.jsx, linea 113')
                console.log(error)
            })
    }

   



  return (
    <div className={localStorage.getItem('userEmailLS') !== null ? 'containerApp' : 'containerApp2'}>
    
      <Navbar />

    {/*{localStorage.getItem('userEmailLS') !== null ?
      <h3 className='registroParroquial-h3'>RESPALDER PARROQUIAL</h3> :
      <img src={logo} className='logo' />  }*/}

        

        {
            location.pathname == '/Respalder/' && localStorage.getItem('userEmailLS') !== null   
                ? ''
                : <h3 className={localStorage.getItem('userEmailLS') !== null ? 'registroParroquial-h3' : 'registroParroquial-h3-2'} >RESPALDER PARROQUIAL</h3> 
        }
      
      <Routes>
        <Route path="/Respalder" element={<MiParroquia saveCat={saveCat}/>}  />

        <Route path="/Respalder/confirmaciones" element={<Confirmaciones postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/comuniones" element={<Comuniones postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/Respalder/matrimonios" element={<Matrimonios postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/Respalder/defunciones" element={<Defunciones postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/bautismos" element={<Bautisos finderFireBase={finderFireBase} postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/Respalder/usuarios" element={<Usuarios postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="*"  element={<Bautisos postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} /> 
      </Routes>
    </div>
  );
}




