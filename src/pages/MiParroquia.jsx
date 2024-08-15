
import { useEffect, useState} from 'react';
import imgA from './abc.jpeg'

import style from '../css/login.module.css'

import useLogin from '../hooks/useLogin'

import { authApp } from '../firebase/firebaseConfig';



export default function MiParroquia() {


   

    const[stateButtons, setStateButtons]=useState(true)

   

    const [register, login, logout] = useLogin()

    //register (authApp, email, password)
    //login (authApp, email, password)

   



const[objectState, setObjectState]=useState({
    name:'', email:'', password:'', password2:''
})


const {name, email, password, password2} = objectState

  const handlerObjectsState=(e)=>{
        setError('')
        const {name, value}=e.target
        setObjectState({...objectState, [name]:value})
  }

  const [error, setError] = useState('');


console.log(error)



  
    const enviar = () => {

        setError('')

        localStorage.setItem('userName', name)

        if (password.length < 1) {
              return setError("Nombre No Escrito");
        }

        if (password !== password2) {
              return setError("Passwords No son Iguales");
        }

        if (password.length < 6) {
              return setError("La Clave es muy Corta Use 6 Caracteres Minimo");
        }

        register(authApp, email, password);

    }


    const entrar = () => {

        setError('')


        if (password.length < 1) {
              return setError("Correo no Escrito");
        }


        if (password.length < 6) {
              return setError("Claves es muy corta Use 6 caracteres Minimo");
        }

        login(authApp, email, password);

    }




    return (
        <>
        {localStorage.getItem('userEmailLS') === null ?
            <div className={style.loginContainer}>

                <div> <img src={imgA} /> </div>

                <div>

                    <div >   
                        <div    className={stateButtons ? style.borderB : style.borderBgray} 
                                onClick={()=>{setStateButtons(true), setError('') }}>
                                REGISTRO
                        </div>

                        <div    className={stateButtons ? style.borderBgray : style.borderB} 
                                onClick={()=>{setStateButtons(false), setError('')}}>
                                    ENTRAR
                        </div> 

                    </div>

                <div>

                    {stateButtons ?
                        <div className={style.inputBG}>
                            <div><input type="text" name='name'  onChange={(e)=>handlerObjectsState(e)} placeholder='Nombre'/></div> 
                            <div><input type="email" name='email' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div>
                            <div><input type="password" name='password'  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div> 
                            <div><input type="password" name='password2'  onChange={(e)=>handlerObjectsState(e)} placeholder='Confirmar Password'/></div>
                            <div><button onClick={()=>enviar()} >ENVIAR</button></div>
                               <span className={style.colorRed}>{error}</span>
                        </div>

                        :
                        <div className={style.inputBG}>
                            <div><input type="email" name='email' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div> 
                            <div><input type="password" name='password'  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div>

                            <div><button onClick={()=>entrar()}>ENTRAR</button></div>
                            <span className={style.colorRed}>{error}</span>
                        </div>
                    }
                         
                    </div>

                </div>

            </div>

            :<div>

                <div className={style.hello}>
                    <span>{localStorage.userEmailLS}</span>

                    <button onClick={()=>logout()}>SALIR</button>    
                </div>


                    <h1 className={style.alabado}>
                        ¡ALABADO SEA JESUCRISTO!
                    </h1>

                    <h4><b>¡Hola!</b> Bienvenido {localStorage.userName} Seleccioná una Opción en el Menú</h4>

            </div>
            }
        </> 
    );
}
