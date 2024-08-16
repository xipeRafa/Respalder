
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




    const location = useLocation();

    let fireBaseCollection 
    fireBaseCollection = location.pathname.split('/')[2] 



    const [arrParroquiaState, setArrParroquiaState] = useState([])
    const [getArr, setGetArr] = useState(false)


    useEffect(() => {

        const data = query(collection(firestoreDB, fireBaseCollection || 'bautismos'),
                    where('email', '==', localStorage.getItem('userEmailLS'))
        )

        getDocs(data).then((resp) => {
            setArrParroquiaState(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArr]) 



   



    const postRegister = (selectedFile, postBody) => {


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
                console.log('postRegister Error, App,jsx, linea 82')
                console.log(error)
            })


    }




    const saveCat = (postBody) => {
        console.log(postBody)

        // const postCollectionCat = collection(firestoreDB, 'cat');


        // addDoc(postCollectionCat, postBody)
        //     .then((resp) => {
        //             conosle.log(resp)
        //     })
        //     .catch((error) => { 
        //         console.log('postRegister Error, App,jsx, linea 82')
        //         console.log(error)
        //     })
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

        <Route path="/Respalder/confirmaciones" element={<Confirmaciones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/comuniones" element={<Comuniones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/Respalder/matrimonios" element={<Matrimonios postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/Respalder/defunciones" element={<Defunciones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/bautismos" element={<Bautisos postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/Respalder/usuarios" element={<Usuarios postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="*"  element={<Bautisos postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} /> 
      </Routes>
    </div>
  );
}




