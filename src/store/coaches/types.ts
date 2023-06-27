import { User } from '@/models/user'

export interface CoachesState {
  coaches: User[];
  coachProfile: User|NonNullable<unknown>;
}
