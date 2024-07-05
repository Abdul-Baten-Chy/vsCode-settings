import { Router } from 'express';
import requestVAlidator from '../../../midleware/requestValidator';
import { carsController } from './car.controller';
import { carValidation } from './car.validation';

const route = Router();

route.post('/', requestVAlidator(carValidation), carsController.createCars);
route.get('/', carsController.getAllCars);
route.get('/:id', carsController.getSingleCars);
route.patch('/:id', carsController.updateSingleCar);

export const carsRouter = route;
