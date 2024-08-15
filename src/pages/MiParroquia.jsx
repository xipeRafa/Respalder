
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

   



const[objectState, setObjectState]=useState({
    name:'', email:'', password:'', password2:''
})


const {name, email, password, password2} = objectState

  const handlerObjectsState=(e)=>{
        const {name, value}=e.target
        setObjectState({...objectState, [name]:value})
  }

  const [error, setError] = useState('');


console.log(error)



  
  const enviar = () => {


      setError('');

      if (password !== password2) {
          return setError("Claves No son iguales.");
      }

      if (password.length < 6) {
          return setError("Claves es muy corta Use 6 caracteres Minimo");
      }

      register(authApp, email, password);

}

 const entrar = () => {


      setError('');


      if (password.length < 6) {
          return setError("Claves es muy corta Use 6 caracteres Minimo");
      }

      login(authApp, email, password);

}

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
                            <div><input type="text" name='name'  onChange={(e)=>handlerObjectsState(e)} placeholder='Nombre'/></div> 
                            <div><input type="email" name='email' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div>
                            <div><input type="text" name='password'  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div> 
                            <div><input type="text" name='password2'  onChange={(e)=>handlerObjectsState(e)} placeholder='Confirmar Password'/></div>
                            <div><button onClick={()=>enviar()} >ENVIAR</button></div>{error}
                        </div>

                        :
                        <div className={style.inputBG}>
                            <div><input type="email" name='email' onChange={(e)=>handlerObjectsState(e)} placeholder='Correo'/></div> 
                            <div><input type="text" name='password'  onChange={(e)=>handlerObjectsState(e)} placeholder='Password'/></div>

                            <div><button onClick={()=>entrar()}>ENTRAR</button></div>
                            {error}
                        </div>
                    }
                         
                    </div>

                </div>

            </div>
        </> 
    );
}
