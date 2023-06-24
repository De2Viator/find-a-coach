import { User } from '@/models/coach'

export interface CoachesState {
  coaches: User[];
  coachProfile: User|NonNullable<unknown>;
}
