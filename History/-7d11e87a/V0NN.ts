import { z } from 'zod';

const validationAcademicFaculty = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be string',
    }),
  }),
});

export const academicValidayion = {
  validationAcademicFaculty,
};
