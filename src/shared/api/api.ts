import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Coach, Student } from '@/models/coach'
import axios from 'axios'
import { CountryResponse } from '@/models/geo'
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
export const getCoaches = async (): Promise<Coach[]> => {
  const coachesQuery = await getDocs(collection(db, 'users'))
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

export const registerUser = async (email: string, password: string, profile: Coach|Student) => {
  await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'users'), profile)
}

/* export const authUser = () => {

} */

axios.interceptors.response.use((config) => config)
