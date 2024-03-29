import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, where, deleteDoc, runTransaction, updateDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { User, Profile } from '@/models/user'
import axios from 'axios'
import { CountryResponse } from '@/models/geo'
import { EMPTY_USER, ID, IS_STUDENT, TOKEN } from '@/shared/constants'
import router from '@/router'
import { Request, RequestedUser } from '@/components/layout/children/requests/models/types'
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
export const getCoaches = async (): Promise<User[]> => {
  const coachesQuery = await getDocs(query(collection(db, 'users'),
    where('isStudent', '==', false), where('__name__', '!=', localStorage.getItem(ID))))
  const coaches: User[] = []
  coachesQuery.forEach(coach => {
    console.log(coach)
    coaches.push({ ...coach.data(), id: coach.id } as User)
  })
  return coaches
}
export const connectWithCoach = async (coachId: string) => {
  const userId = localStorage.getItem('id')
  await addDoc(collection(db, 'requests'), { coachId, userId })
}

export const getRequestedUsers = async () => {
  const userId = localStorage.getItem(ID)
  const requestsQuery = await getDocs(query(collection(db, 'requests'),
    where('coachId', '==', userId)))
  const requests: string[] = []
  requestsQuery.forEach(request => {
    const requestData = { ...request.data() } as Request
    requests.push(requestData.userId)
  })
  if (requests.length) {
    const usersQuery = await getDocs(query(collection(db, 'users'), where('__name__', 'in', requests)))
    const users: RequestedUser[] = []
    usersQuery.forEach(queriedUser => {
      const user = { ...queriedUser.data() } as User
      users.push(new RequestedUser(queriedUser.id, user.avatar, user.name, user.surname, user.birthDay, user.details))
    })
    return users
  } else {
    return []
  }
}

export const deleteRequestedUser = async (userId: string) => {
  const coachId = localStorage.getItem(ID)
  const request = await getDocs(query(collection(db, 'requests'),
    where('coachId', '==', coachId), where('userId', '==', userId)))
  request.forEach(request => {
    deleteDoc(doc(db, 'requests', request.id))
  })
  return userId
}
export const incrementStudentsCount = async () => {
  const id = localStorage.getItem(ID)
  const docRef = doc(db, 'users', id as string)
  return await runTransaction(db, (transaction) => {
    return transaction.get(docRef).then((docSnapshot) => {
      if (docSnapshot.exists()) transaction.update(docRef, { studentsCount: docSnapshot.data().studentsCount + 1 })
    })
  })
}
export const getUser = async (id: string):Promise<User> => {
  const userRef = await getDoc(doc(db, 'users', id))
  const user = userRef.data() as Omit<User, 'id'>
  return user ? { ...user, id: userRef.id } : EMPTY_USER
}

export const changeUser = async (profile: Omit<User, 'id' | 'studentsCount'>) => {
  const id = localStorage.getItem(ID)
  const docRef = doc(db, 'users', id as string)

  await updateDoc(docRef, profile)
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
  const coachesQuery = await getDocs(query(collection(db, 'users'),
    where('email', '==', email)))
  coachesQuery.forEach(coach => {
    localStorage.setItem(ID, coach.id)
    const data = { ...coach.data() }
    localStorage.setItem(IS_STUDENT, `${data.isStudent}`)
  })
  return await signInWithEmailAndPassword(auth, email, password)
}

export const registerUser = async (user: Profile) => {
  const password = user.password
  await createUserWithEmailAndPassword(auth, user.email, password)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete user.password
  await addDoc(collection(db, 'users'), user)
  localStorage.setItem(IS_STUDENT, `${user.isStudent}`)
  return await authUser(user.email, password)
}
