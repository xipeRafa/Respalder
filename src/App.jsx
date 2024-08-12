
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { getDocs, collection, updateDoc, doc } from 'firebase/firestore'

import './App.css'


import firestoreDB from './firebase/firebaseConfig'


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


    if(location.pathname == '/'){
        fireBaseCollection = 'bautismos'
    }else{
        fireBaseCollection = location.pathname.substring(1) 
    }    

    console.log(fireBaseCollection)



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

      <h3 className='registroParroquial-h3'>REGISTRO PARROQUIAL</h3>
       {/* {
            location.pathname == '/'    ? 
                                            <b className=''>Bautismos</b> 
                                        :   <h5>{location.pathname.substring(1).replace(/\b\w/g, l => l.toUpperCase())}</h5>
        }*/}
      
      <Routes>
        <Route path="/" element={<Bautisos arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/confirmaciones" element={<Confirmaciones arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/comuniones" element={<Comuniones arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />
        <Route path="/matrimonios" element={<Matrimonios arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="/defunciones" element={<Defunciones arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/parroquia" element={<Parroquia arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/usuarios" element={<Usuarios arrParroquiaState={arrParroquiaState} setGetArr={setGetArr} getArr={getArr} />} />

        <Route path="*"  element={<Navigate to='/' />}/> 
      </Routes>
    </div>
  );
}




