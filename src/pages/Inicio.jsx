import { useEffect, useState } from "react";




export default function Inicio({arr, setGetArr, getArr, UpdateByIdInventario}) {


    const formateador = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "long",
        timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
        return formateador.format(new Date(milisegundos));
    };



     useEffect(() => {
        setGetArr(!getArr);
        setTimeout(() => {
            localStorage.removeItem("look");
        }, 14000);
    }, []);





    let look = localStorage.look?.slice(41, 61);

    const [valueState, setValueState] = useState(look || "");

    const handleSearch = (e) => {
        const { value } = e.target;
        setValueState(value);
    };


    if (valueState.length > 3) {
        arr = arr.filter((el) => el.id == valueState);
    } else {
        arr = [];
    }

    const[noteState, setNoteState]=useState('')




    let currentDate = new Date();

    let dueDate = currentDate.setHours(
        currentDate.getHours() /* + itemDuration.current.value */,
    );



    const handleSales = (id, el) => {

        el.takenByCustomer = true;


        if (el.historiSales === undefined) {

                el.historiSales = [];
                el.historiSales.push(dueDate);

                el.notaDeVenta = []
                el.notaDeVenta.push(noteState)

        } else {

                el.historiSales.push(dueDate);
                el.notaDeVenta.push(noteState)

        }




        if (el?.stockHermosillo === undefined) {

                el.stockSanCarlos = el?.stockSanCarlos - 1;
                UpdateByIdInventario(el.id, el);

        } else {

                el.stockHermosillo = el?.stockHermosillo - 1;
                UpdateByIdInventario(el.id, el);
        }

        setTimeout(() => {
            setGetArr(!getArr);
        }, 500);

    };








































        const[state, setState]=useState(true)








    return (
        <>

           <div className='ButtonsNuevoBuscar'>
                <button onClick={()=>{setState(true)}}>Nuevo Bautismo</button>
                <button onClick={()=>{setState(false)}}>Buscar</button>

           </div> 


                {
                    state ? <p>
                                   
                                <div className='formInfoToSave'>
                                    <p>Respaldar FE de Bautismo</p> 
                                    <input type="text" placeholder='Nombre' />

                                    {/*<label for="avatar">Choose a profile picture:</label>*/}
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                                    <button className='button-primary guardar'>
                                        GUARDAR
                                    </button>
                                </div>    




                                   
                            </p> 
                            : <div className='formInfoToFind'>
                                <div>
                                    <label for="avatar1">Buscar con Nombre:</label>
                                    <input type="text" id='avatar1' placeholder='Nombre' />
                                </div>
                                <div>
                                    <label for="avatar2">Buscar con Fecha:</label>
                                    <input type="date" id='avatar2' placeholder='Nombre' />
                                </div>
                            </div>
                }
        </>
    );
}


























