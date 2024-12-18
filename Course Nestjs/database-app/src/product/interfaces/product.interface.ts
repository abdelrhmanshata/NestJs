import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly category: string;
  readonly count: number;
}
