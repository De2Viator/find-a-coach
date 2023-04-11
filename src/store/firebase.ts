import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, DatabaseReference } from 'firebase/database'

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAqLwf9Dk2MuVQfU-lAhTSRqiiKvMLOwTw',
  authDomain: 'vue-project-13e43.firebaseapp.com',
  databaseURL: 'https://vue-project-13e43-default-rtdb.firebaseio.com',
  projectId: 'vue-project-13e43',
  storageBucket: 'vue-project-13e43.appspot.com',
  messagingSenderId: '983871688135',
  appId: '1:983871688135:web:bcc8efa1dc1fc4db591de2',
  measurementId: 'G-7MPWRPW0MH'
}

initializeApp(firebaseConfig)
const database = getDatabase()
const dbRef: DatabaseReference = ref(database, '/coaches')

export const firebaseGetCoaches = async () => {
  return new Promise((resolve) => {
    onValue(dbRef, (snapshot) => {
      resolve(snapshot.val())
    })
  })
  /* push(dbRef, [{
    name: 'John',
    profession: 'C++ Developer',
    description: 'Hello, my name John and i love C++',
    id:nanoid()
  },
  {
    name: 'Michael',
    profession: 'C# Developer',
    description: 'Hello, my name John and i love C#',
    id:nanoid()
  },
  {
    name: 'Todd',
    profession: 'C Developer',
    description: 'Hello, my name John and i love C',
    id:nanoid()
  }]) */
}
