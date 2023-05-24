export interface ProfileFormData {
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  wage: number;
  description: string;
  details: string;
  avatar: string;
  subjects: string[];
  avatarPreview: string | ArrayBuffer | null;
  isEdit: boolean;
}
