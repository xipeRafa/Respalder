
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { getDocs, collection, updateDoc, doc, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getBytes, getDownloadURL, deleteObject } from 'firebase/storage';

import './App.css'


import { firestoreDB, storageDocs } from './firebase/firebaseConfig';


import Bautisos from './pages/Bautisos';
import Usuarios from './pages/Usuarios';
import Confirmaciones from './pages/Confirmaciones'

import Comuniones from './pages/Comuniones'
import Matrimonios from './pages/Matrimonios'
import Defunciones from './pages/Defunciones';
import Parroquia from './pages/Parroquia';


import Navbar from './components/Navbar';



export default function App() {




    const location = useLocation();


    let fireBaseCollection 

    if(location.pathname == '/Respalder'){
        fireBaseCollection = 'bautismos'
    }else{
        fireBaseCollection = location.pathname.split('/')[2] 
    }    




    const [arrParroquiaState, setArrParroquiaState] = useState([])
    const [getArr, setGetArr] = useState(false)


    useEffect(() => {

        const data = collection(firestoreDB, fireBaseCollection)

        getDocs(data).then((resp) => {
            setArrParroquiaState(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArr]) 



   



    const postRegister = (selectedFile, postBody) => {

        console.log(selectedFile, selectedFile.name)

        const postCollection = collection(firestoreDB, fireBaseCollection);

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




 







    // const UpdateByIdInventario = async (id, obj) => {

    //     const aaDoc = doc(db, 'inventario', id);

    //     try {
    //         await updateDoc(aaDoc, obj);
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }





  return (
    <div className='containerApp'>
    
      <Navbar />

      <h3 className='registroParroquial-h3'>RESPALDER PARROQUIAL</h3>
       {/* {
            location.pathname == '/'    ? 
                                            <b className=''>Bautismos</b> 
                                        :   <h5>{location.pathname.substring(1).replace(/\b\w/g, l => l.toUpperCase())}</h5>
        }*/}
      
      <Routes>
        <Route path="/Respalder" element={<Bautisos postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/Respalder/confirmaciones" element={<Confirmaciones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/comuniones" element={<Comuniones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/Respalder/matrimonios" element={<Matrimonios postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/Respalder/defunciones" element={<Defunciones postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/parroquia" element={<Parroquia postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/Respalder/usuarios" element={<Usuarios postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="*"  element={<Bautisos postRegister={postRegister} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} /> 
      </Routes>
    </div>
  );
}




