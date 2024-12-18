import { Document } from 'mongoose';

export interface Employee extends Document {
  name: string;
  email: string;
  password: string;
  nationalId: string;
  city: string;
  bio?: string;
  programmingLanguages: string[];
  experienceLevel: string;
  role: string;
}
