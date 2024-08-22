
import {useState} from 'react';





export default function Publicidad() {

	   const nowDate =()=> {   // 'Viernes, 16 de Agosto de 2024'

            const options = {
                weekday: "long", // narrow, short
                year: "numeric", // 2-digit
                month: "long", // numeric, 2-digit, narrow, long
                day: "numeric", // 2-digit
                hour:'numeric',
                minute:'numeric',
                second:'numeric',
            }

            return new Date().toLocaleString('es-ES', options)
      
        }




        const [allUsers1, setAllUsers1] = useState()
        const [allUsers2, setAllUsers2] = useState()
        const [allUsers3, setAllUsers3] = useState()
        const [allUsers4, setAllUsers4] = useState()
        const [allUsers5, setAllUsers5] = useState()



        const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;


        const exportData = () => {

            // ['Bautismo','Comunion','Confirmacion','Matrimonio','Defuncion'].map((el, i)=>{

                const dbPromise1 = idb.open('Bautismo')

                dbPromise1.onerror = function (event) {
                        console.error("An error occurred with IndexedDB");
                        console.error(event);
                };

                dbPromise1.onupgradeneeded = function (event) {
                       const db = dbPromise1.result;

                        if (!db.objectStoreNames.contains("userData")) {
                                const objectStore = db.createObjectStore("userData", {keyPath: "id"});
                                objectStore.createIndex("nombreBuscar", "nombre", {unique: false,});
                        }
                }

                dbPromise1.onsuccess = () => {
                        const db1 = dbPromise1.result

                        let tx1 = db1.transaction("userData", "readonly")
                        let userData1 = tx1.objectStore("userData")
                        const users1 = userData1.getAll()

                        users1.onsuccess = (query) => {
                            if(query.srcElement.result.length === 0){
                                return
                            }
                            setAllUsers1(query.srcElement.result);
                        }

                        tx1.oncomplete = function () {
                                db1.close();
                        }
                }

                const dbPromise2 = idb.open('Comunion')

                dbPromise2.onerror = function (event) {
                        console.error("An error occurred with IndexedDB");
                        console.error(event);
                };

                dbPromise2.onupgradeneeded = function (event) {
                       const db = dbPromise2.result;

                        if (!db.objectStoreNames.contains("userData")) {
                                const objectStore = db.createObjectStore("userData", {keyPath: "id"});
                                objectStore.createIndex("nombreBuscar", "nombre", {unique: false,});
                        }
                }

                dbPromise2.onsuccess = () => {
                        const db2 = dbPromise2.result

                        let tx2 = db2.transaction("userData", "readonly")
                        let userData2 = tx2.objectStore("userData")
                        const users2 = userData2.getAll()

                        users2.onsuccess = (query) => {
                            if(query.srcElement.result.length === 0){
                                return
                            }
                            setAllUsers2(query.srcElement.result);
                        }

                        tx2.oncomplete = function () {
                                db2.close();
                        }
                }

                const dbPromise3 = idb.open('Confirmacion')

                dbPromise3.onerror = function (event) {
                        console.error("An error occurred with IndexedDB");
                        console.error(event);
                };

                dbPromise3.onupgradeneeded = function (event) {
                       const db = dbPromise3.result;

                        if (!db.objectStoreNames.contains("userData")) {
                                const objectStore = db.createObjectStore("userData", {keyPath: "id"});
                                objectStore.createIndex("nombreBuscar", "nombre", {unique: false,});
                        }
                }

                dbPromise3.onsuccess = () => {
                        const db3 = dbPromise3.result

                        let tx3 = db3.transaction("userData", "readonly")
                        let userData3 = tx3.objectStore("userData")
                        const users3 = userData3.getAll()

                        users3.onsuccess = (query) => {
                            if(query.srcElement.result.length === 0){
                                return
                            }
                            setAllUsers3(query.srcElement.result);
                        }

                        tx3.oncomplete = function () {
                                db3.close();
                        }
                }

                const dbPromise4 = idb.open('Matrimonio')

                dbPromise4.onerror = function (event) {
                        console.error("An error occurred with IndexedDB");
                        console.error(event);
                };

                dbPromise4.onupgradeneeded = function (event) {
                       const db = dbPromise4.result;

                        if (!db.objectStoreNames.contains("userData")) {
                                const objectStore = db.createObjectStore("userData", {keyPath: "id"});
                                objectStore.createIndex("nombreBuscar", "nombre", {unique: false,});
                        }
                }

                dbPromise4.onsuccess = () => {
                        const db4 = dbPromise4.result

                        let tx4 = db4.transaction("userData", "readonly")
                        let userData4 = tx4.objectStore("userData")
                        const users4 = userData4.getAll()

                        users4.onsuccess = (query) => {
                            if(query.srcElement.result.length === 0){
                                return
                            }
                            setAllUsers4(query.srcElement.result);
                        }

                        tx4.oncomplete = function () {
                                db4.close();
                        }
                }

                const dbPromise5 = idb.open('Defuncion')

                dbPromise5.onerror = function (event) {
                        console.error("An error occurred with IndexedDB");
                        console.error(event);
                };

                dbPromise5.onupgradeneeded = function (event) {
                        const db = dbPromise5.result;

                        if (!db.objectStoreNames.contains("userData")) {
                                const objectStore = db.createObjectStore("userData", {keyPath: "id"});
                                objectStore.createIndex("nombreBuscar", "nombre", {unique: false,});
                        }
                }

                dbPromise5.onsuccess = () => {
                        const db5 = dbPromise5.result

                        let tx5 = db5.transaction("userData", "readonly")
                        let userData5 = tx5.objectStore("userData")
                        const users5 = userData5.getAll()

                        users5.onsuccess = (query) => {
                            if(query.srcElement.result.length === 0){
                                return
                            }
                            setAllUsers5(query.srcElement.result);
                        }

                        tx5.oncomplete = function () {
                                db5.close();
                        }
                }


            };





            const descargar=()=>{

                    const nowNumberDate =()=> { // '16/8/2024'
                            return new Date().toLocaleString().slice(0,9)
                    }



                    const jsonString = `data:text/txt;chatset=utf-8,${
                            encodeURIComponent( JSON.stringify( [allUsers1, allUsers2, allUsers3, allUsers4, allUsers5].flat().filter(el=>el !== undefined) ) )
                    }`

                    const link = document.createElement("a");
                    link.href = jsonString;
                    link.download = `${nowNumberDate()}-Respaldo.txt`
                    link.click();    
            }
     


	return(
		<>
			<p className='red'>{nowDate()}</p>

            <button  onClick={()=>exportData()}> Guardar Respaldo Mensual </button>

            <button

                className={
                    [allUsers1, allUsers2, allUsers3, allUsers4, allUsers5].flat().some(el => el !== undefined) 
                    ? 'ml-2'
                    : 'd-none' 
                } 

                onClick={()=>descargar()}> Descargar </button>
		</>
	)
}





