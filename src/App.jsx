
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { getDocs, collection, updateDoc, doc } from 'firebase/firestore'

import './App.css'


import db from './firebase/firebaseConfig'


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





      const [arr, setArr] = useState([])
      const [getArr, setGetArr] = useState(false)


    useEffect(() => {

        const data = collection(db, 'inventario')

        getDocs(data).then((resp) => {
            setArr(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArr])  




      const [arrOrders, setArrOrders] = useState([])
      const [getArrOrders, setGetArrOrders] = useState(false)

    useEffect(() => {

        const data = collection(db, 'orders')

        getDocs(data).then((resp) => {
            setArrOrders(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArrOrders])







    const UpdateByIdInventario = async (id, obj) => {

        const aaDoc = doc(db, 'inventario', id);

        try {
            await updateDoc(aaDoc, obj);
        } catch (error) {
            console.error(error);
        }

    }





  return (
    <div className='containerApp'>
    
      <Navbar />

      <h3>REGISTRO PARROQUIAL</h3>
        
      
      <Routes>
        <Route path="/" element={<Bautisos arr={arr} setGetArr={setGetArr} getArr={getArr} UpdateByIdInventario={UpdateByIdInventario}/>} />

         <Route path="/confirmaciones" element={<Confirmaciones arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />


        <Route path="/comuniones" element={<Comuniones arrOrders={arrOrders} setGetArrOrders={setGetArrOrders} getArrOrders={getArrOrders}/>} />
        <Route path="/matrimonios" element={<Matrimonios arrOrders={arrOrders} setGetArrOrders={setGetArrOrders} getArrOrders={getArrOrders}/>} />

        <Route path="/defunciones" element={<Defunciones arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/parroquia" element={<Parroquia arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />


        <Route path="/usuarios" element={<Usuarios arrOrders={arrOrders} setGetArrOrders={setGetArrOrders} getArrOrders={getArrOrders}
             arr={arr} setGetArr={setGetArr} getArr={getArr}
        />} />

        <Route path="*"  element={<Navigate to='/' />}/> 
      </Routes>
    </div>
  );
}




