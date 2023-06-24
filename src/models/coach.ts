export interface Profile {
    name: string;
    surname: string;
    subjects: string[];
    details: string;
    description: string;
    wage: number;
    id: string;
    avatar: string;
    age: number;
    students_count: number;
    city: string;
    country: string;
    experience:string[];
    email: string;
    password: string;
}

export type User = Omit<Profile, 'email'|'password'>
