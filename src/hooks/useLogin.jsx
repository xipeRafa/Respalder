import { useState } from 'react';

import { authApp } from '../firebase/firebaseConfig';

import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';



const useLogin = ( ) => {




    const register = async (authApp, email, password) => {

      try {

          await createUserWithEmailAndPassword(authApp, email, password)
          
          login(authApp, email, password);

      } catch (error) {

          console.error("code.error", error.code)

          const errorObj = {
              "auth/email-already-in-use" : () => alert("El Correo ya esta en Uso"),
              "auth/operation-not-allowed": () => alert("Operacion No Permitida."),

              "auth/weak-password": () => alert("La Contraseña es muy débil."),
              "auth/invalid-email": () => alert("El Correo No es Valido"),
          };

          const mySwithFunction = (errorCode) => {
              errorObj[errorCode]()
          }

          mySwithFunction(error.code)
      }


    }






    const [stateLogin, setStateLogin] = useState(true);



    const login = (authApp, email, password) => {
    
      signInWithEmailAndPassword(authApp, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user
              localStorage.setItem('userEmailLS', user.email)
              setStateLogin(!stateLogin)
              location.reload()
          })
          .catch((error) => {
              console.log(error.code);
              console.log(error.message);

              if (error.code == "auth/invalid-credential") {
                  alert("Contraseña o Correo son Incorrrectos")
              }

          })

    }





    const logout = () => {

        signOut(authApp)

        localStorage.removeItem('userEmailLS')

        setStateLogin(!stateLogin)
    }





    return[register, login, logout, stateLogin]



}

export default useLogin;
















