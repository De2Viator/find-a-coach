export interface Profile {
    name: string;
    surname: string;
    subjects: string[];
    details: string;
    description: string;
    wage: number;
    id: string;
    avatar: string;
    isStudent: boolean;
    birthDay: string;
    studentsCount: number;
    city: string;
    country: string;
    experience:string[];
    email: string;
    password: string;
}

export type User = Omit<Profile, 'email'|'password'>
