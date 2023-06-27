import { User } from '@/models/user'

export interface UserState {
  user: Omit<User, 'id' | 'studentsCount'>
}
