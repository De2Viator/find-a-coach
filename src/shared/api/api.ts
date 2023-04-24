import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { Coach } from '@/models/coach'
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
export const getCoaches = async (): Promise<Coach[]> => {
  const coachesQuery = await getDocs(collection(db, 'coaches'))
  const coaches: Coach[] = []
  coachesQuery.forEach(coach => {
    coaches.push({ ...coach.data(), id: coach.id } as Coach)
  })
  return coaches
}

export const getCoach = async (id: string):Promise<Coach|NonNullable<unknown>> => {
  const coachRef = await getDoc(doc(db, 'coaches', id))
  const coach = coachRef.data() as Omit<Coach, 'id'>|NonNullable<unknown>
  return coach ? { ...coach, id: coachRef.id } : {}
}
