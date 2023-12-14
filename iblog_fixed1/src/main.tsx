import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'


interface Config {
  apiKey:string,
  authDomain:string,
  projectId:string,
  storageBucket:string,
  messagingSenderId:string,
  appId:string,
  measurementId:string,
}


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: Config = {
  apiKey: "AIzaSyBQfa8c27R3Gxu3FJpDIwiyM-wqVMF86IM",
  authDomain: "pro1-a38cb.firebaseapp.com",
  projectId: "pro1-a38cb",
  storageBucket: "pro1-a38cb.appspot.com",
  messagingSenderId: "853286455604",
  appId: "1:853286455604:web:1ad8850b8dbbacef673d61",
  measurementId: "G-XJHGQK3LY7"
};

const app=initializeApp(firebaseConfig)
const auth = getAuth(app)
console.log('Success')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
