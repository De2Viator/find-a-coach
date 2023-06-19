import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, where } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Coach, User } from '@/models/coach'
import axios from 'axios'
import { CountryResponse } from '@/models/geo'
import { TOKEN } from '@/shared/constants'
import router from '@/router'
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

auth.onAuthStateChanged(user => {
  if (!user) {
    localStorage.setItem(TOKEN, '')
    router.push('/auth')
  }
})
export const getCoaches = async (): Promise<Coach[]> => {
  const coachesQuery = await getDocs(query(collection(db, 'users'),
    where('isStudent', '==', false)))
  const coaches: Coach[] = []
  coachesQuery.forEach(coach => {
    coaches.push({ ...coach.data(), id: coach.id } as Coach)
  })
  return coaches
}

export const getCoach = async (id: string):Promise<Coach|NonNullable<unknown>> => {
  const coachRef = await getDoc(doc(db, 'users', id))
  const coach = coachRef.data() as Omit<Coach, 'id'>|NonNullable<unknown>
  return coach ? { ...coach, id: coachRef.id } : {}
}

export const getCountries = async () => {
  return await axios.get<CountryResponse[]>('https://restcountries.com/v3.1/all')
}

export const getCities = async (country: string) => {
  return await axios.post<{data: string[]}>('https://countriesnow.space/api/v0.1/countries/cities', {
    country
  })
}

export const authUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const registerUser = async (user: User) => {
  const addedUser = await createUserWithEmailAndPassword(auth, user.email, user.password)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete user.email
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete user.password
  await addDoc(collection(db, 'users'), user)
  return addedUser
}
