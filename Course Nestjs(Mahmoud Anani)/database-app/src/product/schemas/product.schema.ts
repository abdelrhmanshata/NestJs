import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  count: Number,
});
