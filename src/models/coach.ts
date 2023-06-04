export interface Coach {
    name: string;
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
    experience:string[]
}

export interface Student {
  name: string;
  description: string;
  id: string;
  avatar: string;
  age: number;
  city: string;
  country: string;
}
