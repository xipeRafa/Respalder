
import { useEffect, useState } from 'react';


import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


export default function DatePickerComponent() {


    ////==-=-=-=-=-=-=- datePicker


        const [hoy, setHoy] = useState() // miliseconds 

        const [fecha, setFecha] = useState() //Fri Feb 03 2023 00:00:00 GMT-0700 (hora estándar del Pacífico de México)

        const handlerDuration = e => setHoy(e.target.value)

        const onChangeDatePicker = fecha => {
                //console.log(fecha)
                setFecha(fecha);
                /* console.log('parse:', Date.parse(fecha)) parse te convierte con horas */
                let today = fecha.getTime()   // .getTime() convierte la fecha en microsegundos
                setHoy(today)
        }  
 

        let date = new Date(Number(hoy)).toLocaleDateString("es-CL", {
                weekday: "long", // narrow, short
                year: "numeric", // 2-digit
                month: "long", // numeric, 2-digit, narrow, long
                day: "numeric", // 2-digit
        })

        const hora = new Date(Number(hoy)).toLocaleTimeString("es-CL") 


        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        let fechaDate = fecha?.toLocaleDateString('es-ES', options)

        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//
        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//
        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//

    return (
        <>
            <div className="datePicker">
                <DatePicker 
                    selected={fecha}
                    onChange={onChangeDatePicker} 
                    locale="es" 
                    className="pickers" 
                    dateFormat="dd 'de' MMMM 'de' yyyy"
                />
            </div>

        </>
    );
}
