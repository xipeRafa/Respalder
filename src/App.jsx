
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { getDocs, collection, updateDoc, doc, addDoc, where, query } from 'firebase/firestore'
import { ref, uploadBytes, getBytes, getDownloadURL, deleteObject } from 'firebase/storage';

import './css/App.css'


import { firestoreDB, storageDocs } from './firebase/firebaseConfig';


import Bautisos from './pages/Bautisos'
import MiParroquia from './pages/MiParroquia'
import Publicidad from './pages/Publicidad';


import Navbar from './components/Navbar';









export default function App() {




    function capitalizarPrimeraLetra(str) {

        let a = str.charAt(0).toUpperCase() + str.slice(1) 
            
        if(str.slice(-2, -1) === 'e'){
            return a.slice(0, -2)
        }else{
            return a.slice(0, -1)
        }

    }


   

    const location = useLocation();


    let fireBaseCollection = location.pathname.split('/')[2] 



    let finderCollection = capitalizarPrimeraLetra(fireBaseCollection || 'a') //queryParams


    const [finderState, setFinderState]=useState('')




    const [arrParroquiaState, setArrParroquiaState] = useState([])
    const [getArr, setGetArr] = useState(false)

console.log(arrParroquiaState)


    useEffect(() => {

        const data = query(collection(firestoreDB, fireBaseCollection || 'bautismos'),
                    where('email', '==', localStorage.getItem('userEmailLS')),
                     where('nombre', '==', finderState.trim())
        )

        getDocs(data).then((resp) => {
            setArrParroquiaState(resp.docs.map((doc) => ({ ...doc.data() }) ))
        }).catch(err=>{
            console.error(err)
        })

    }, [getArr]) 


    const finderFireBase=(value)=>{
        setFinderState(value)
    }


   



    const postFile = (selectedFile, postBody) => {
console.log(selectedFile)

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
                console.log('postFile Error, App,jsx')
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
                console.log('saveCat Error, App.jsx')
                console.log(error)
            })

    }

   



    return (
        <div className={localStorage.getItem('userEmailLS') !== null ? 'containerApp' : 'containerApp2'}>
    
            <Navbar />
   

            {
                location.pathname == '/Respalder/' && localStorage.getItem('userEmailLS') !== null   
                    ? ''
                    : <h3 className={localStorage.getItem('userEmailLS') !== null 
                        ? 'registroParroquial-h3' 
                        : 'registroParroquial-h3-2'}>RESPALDER PARROQUIAL</h3> 
            }

      
            <Routes>

                <Route path="/Respalder/" element={<MiParroquia saveCat={saveCat}/>} />
                <Route path="/Respalder/publicidad" element={<Publicidad />} />

                <Route path="*"  element={ 

                    location.pathname !== '/Respalder/' && localStorage.getItem('userEmailLS') !== null &&
                        <Bautisos finderCollection={finderCollection} finderFireBase={finderFireBase} 
                            postFile={postFile} arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}
                        />

                }/>

            </Routes>

        </div>
    )
}




