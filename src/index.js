import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// Initialize Firebase
const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyBbMPncDQkkZq4-Nyi_eWElMeHT9W2wn70",
    authDomain: "chat-react-42cf4.firebaseapp.com",
    projectId: "chat-react-42cf4",
    storageBucket: "chat-react-42cf4.appspot.com",
    messagingSenderId: "232837981123",
    appId: "1:232837981123:web:c850243bf20869a39fd376",
    measurementId: "G-FPCZSSZ88T"
  });

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }} >
    <App />
  </Context.Provider>
);
