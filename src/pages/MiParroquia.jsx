
import { useEffect, useState} from 'react';
import imgA from './abc.jpeg'

import style from '../css/login.module.css'

import useLogin from '../hooks/useLogin'

import { authApp } from '../firebase/firebaseConfig';



export default function MiParroquia() {


   

    const[stateButtons, setStateButtons]=useState(true)

   

    const [register, login, logout, stateLogin] = useLogin()

    //register (authApp, email, password)
    //login (authApp, email, password)

    console.log(stateLogin)







    return (
        <>
            <div className={style.loginContainer}>

                <div> <img src={imgA} /> </div>

                <div>

                    <div >   
                        <div className={stateButtons ? style.borderB : style.borderBgray} onClick={()=>setStateButtons(true)} >REGISTRARSE</div>
                        <div className={stateButtons ? style.borderBgray : style.borderB} onClick={()=>setStateButtons(false)}>ENTRAR</div> 
                    </div>

                <div>

                    {stateButtons ?
                        <div className={style.inputBG}>
                            <div><input type="text" name=''  onChange={(e)=>handlerObjectsState(e)} placeholder='Nombre'/></div> 
                            <div><input type="email" name='' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div>
                            <div><input type="text" name=''  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div> 
                            <div><input type="text" name=''  onChange={(e)=>handlerObjectsState(e)} placeholder='Confirmar Password'/></div>
                            <div><button>ENVIAR</button></div>
                        </div>

                        :
                        <div className={style.inputBG}>
                            <div><input type="email" name='' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div> 
                            <div><input type="text" name=''  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div>

                            <div><button>ENTRAR</button></div>
                        </div>

                    }
                         
                    </div>

                </div>

            </div>
        </> 
    );
}
