import { Types } from 'mongoose';

export type TPreRequisiteCourses = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted?: boolean;
  preRequisiteCourses: [TPreRequisiteCourses]; //abcs note this is better  preRequisiteCourses: TPreRequisiteCourses[]
};

export type TCoursefaculty = {
  course: Types.ObjectId;
  faculties: [Types.ObjectId];
};
