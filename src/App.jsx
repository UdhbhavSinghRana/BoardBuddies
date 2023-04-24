import { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';

import './App.css'
import Home from './pages/Home'
import SingUp from './pages/SignUp'
import firebaseConfig from './firebaseConfig'
import { initializeApp } from 'firebase/app'
import 'firebase/database';
import { getDatabase, ref } from 'firebase/database'
import { get, query, onValue } from "firebase/database"
import { set, update } from "firebase/database"


export default function App() {
  

  return (
    <>
      <Home />
    </>
  )
}

