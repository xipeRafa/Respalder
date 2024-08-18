


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

	return(
		<>
			<p className='red'>{nowDate()}</p>
		</>
	)
}