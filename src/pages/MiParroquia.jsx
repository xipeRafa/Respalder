
import { useEffect, useState} from 'react';

import imgA from './abc.jpeg'

import style from '../css/login.module.css'

import useLogin from '../hooks/useLogin'

import { authApp } from '../firebase/firebaseConfig';







export default function MiParroquia({saveCat}) {




    const [register, login, logout] = useLogin()

    const [error, setError] = useState('');


    const[objectState, setObjectState]=useState({
            name:'', email:'', password:'', password2:''
    })


    const {name, email, password, password2} = objectState

    const handlerObjectsState=(e)=>{
            setError('')
            const {name, value}=e.target
            setObjectState({...objectState, [name]:value})
    }

    
console.log(name)



  
    const enviar = () => {

        setError('')

        if (name.length < 1) {
                setError("Nombre No Escrito");
                return
        }

        if (email.length < 1) {
                setError("Correo No Escrito");
                return
        }

        if (password !== password2) {
                setError("Passwords No son Iguales");
                return
        }

        if (password.length < 6) {
                setError("La Clave es muy Corta Use 6 Caracteres Minimo");
                return
        }

        register(authApp, email, password);

        saveCat(objectState)

        localStorage.setItem('userName', name)

    }






    const entrar = () => {

        setError('')


        if (email.length < 1) {
                setError("Correo No Escrito");
                return
        }


        if (password.length < 6) {
                setError("Claves es muy corta Use 6 caracteres Minimo");
                return
        }

        login(authApp, email, password);

        localStorage.setItem('userEmailLS', email)

    }


    const[stateButtons, setStateButtons]=useState(true)












    return (
        <>
        {localStorage.getItem('userEmailLS') === null ?
            <div className={style.loginContainer}>

                <div><img src={imgA} /></div>

                <div>

                    <div>   
                        <div    className={stateButtons ? style.borderB : style.borderBgray} 
                                onClick={()=>{setStateButtons(true), setError(''), setObjectState({name:'', email:'', password:'', password2:''}) }}>
                                    REGISTRO
                        </div>

                        <div    className={stateButtons ? style.borderBgray : style.borderB} 
                                onClick={()=>{setStateButtons(false), setError(''), setObjectState({name:'', email:'', password:'', password2:''}) }}>
                                    ENTRAR
                        </div> 
                    </div>

                    <div>
                        {stateButtons ?
                            <div className={style.inputBG}>  
                                <div><input type="text" name='name' value={name} onChange={(e)=>handlerObjectsState(e)} placeholder='Nombre'/></div> 
                                <div><input type="email" name='email' value={email} onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div>
                                <div><input type="password" name='password' value={password} onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div> 
                                <div><input type="password" name='password2' value={password2} onChange={(e)=>handlerObjectsState(e)} placeholder='Confirmar Password'/></div>
                                <div><button onClick={()=>enviar()} >ENVIAR</button></div>
                                <span className={style.colorRed}>{error}</span>
                            </div>
                        :
                            <div className={style.inputBG}>
                                <div><input type="email" name='email' value={email} onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div> 
                                <div><input type="password" name='password' value={password} onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div>
                                <div><button onClick={()=>entrar()}>ENTRAR</button></div>
                                <span className={style.colorRed}>{error}</span>
                            </div>
                        }         
                    </div>

                </div>

            </div>

            :

                <div>

                    <div className={style.hello}>
                        <span>{localStorage.userEmailLS.split('@')[0]}</span>
                        <button onClick={()=>logout()}>SALIR</button>    
                    </div>

                    <h1 className={style.alabado}>¡ALABADO SEA JESUCRISTO!</h1>

                    <h4><b>¡Hola!</b> Bienvenido {localStorage.userName} Seleccioná una Opción en el Menú</h4>

                </div>

            }
        </> 
    );
}
