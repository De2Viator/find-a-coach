export interface Request {
  coachId: string;
  userId: string;
}

export class RequestedUser {
  constructor (public id: string, public avatar: string, public name: string, public surname: string,
               public birthDay: string, public details: string) {
  }
}
