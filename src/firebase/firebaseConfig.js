
//Inicializacion de Firebase/Firestore
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

//require("dotenv").config()


const app = firebase.initializeApp({

     apiKey: "AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",
     authDomain: "arquidiocesishermosillo-776dd.firebaseapp.com",
     projectId: "arquidiocesishermosillo-776dd",

     storageBucket: "arquidiocesishermosillo-776dd.appspot.com",
     messagingSenderId: "767127814821",
     appId: "1:767127814821:web:6c159d62075bcd1271c34c"

});



export const authApp = getAuth(app);

export const firestoreDB = getFirestore(app)


export const storageDocs = getStorage(app);