import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nationalId: { type: String, required: true },
  city: { type: String, required: true },
  bio: { type: String },
  programmingLanguages: { type: [String] },
  experienceLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Expert'],
  },
  role: {
    type: String,
    enum: ['admin', 'manger', 'employee'], // Allowed roles
    required: true,
    default: 'employee', // Default role
  },
});
