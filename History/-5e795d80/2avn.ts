import { Router } from 'express';
import auth from '../../../midleware/auth';
import requestVAlidator from '../../../midleware/requestValidator';
import { carsController } from './car.controller';
import { carValidation, carValidationUpdate } from './car.validation';

const route = Router();

route.post(
  '/',
  auth('admin'),
  requestVAlidator(carValidation),
  carsController.createCars
);
route.get('/', carsController.getAllCars);
route.get('/:id', carsController.getSingleCars);
route.patch(
  '/:id',
  requestVAlidator(carValidationUpdate),
  carsController.updateSingleCar
);
route.delete('/:id', carsController.deleteAcar);

export const carsRouter = route;
