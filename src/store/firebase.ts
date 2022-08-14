// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAqLwf9Dk2MuVQfU-lAhTSRqiiKvMLOwTw',
  authDomain: 'vue-project-13e43.firebaseapp.com',
  databaseURL: 'https://vue-project-13e43-default-rtdb.firebaseio.com',
  projectId: 'vue-project-13e43',
  storageBucket: 'vue-project-13e43.appspot.com',
  messagingSenderId: '983871688135',
  appId: '1:983871688135:web:bcc8efa1dc1fc4db591de2',
  measurementId: 'G-7MPWRPW0MH'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase()
const dbRef = ref(database, '/coaches')

export const getCoaches = () => {
  onValue(dbRef, (snapshot) => {
    console.log(snapshot.val())
  })
}
