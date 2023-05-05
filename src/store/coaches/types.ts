import { Coach } from '@/models/coach'

export interface CoachesState {
  coaches: Coach[];
  coachProfile: Coach|NonNullable<unknown>;
}
