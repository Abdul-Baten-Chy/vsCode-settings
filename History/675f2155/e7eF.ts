import { Schema } from 'mongoose';
import { TAcademicFaculty } from './acdemicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
