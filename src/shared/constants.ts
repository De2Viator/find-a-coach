import { User } from '@/models/coach'

export const EMPTY_USER: User = {
  birthDay: new Date().toISOString(),
  city: '',
  country: '',
  description: '',
  details: '',
  experience: [],
  id: '',
  name: '',
  studentsCount: 0,
  subjects: [],
  wage: 0,
  avatar: '',
  surname: ''
}
export const TOKEN = 'token'
export const ID = 'id'
