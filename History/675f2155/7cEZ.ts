import { Schema } from 'mongoose';

const academicFacultySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
