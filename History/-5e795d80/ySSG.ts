import { Router } from 'express';
import requestVAlidator from '../../../midleware/requestValidator';
import { carsController } from './car.controller';
import { carValidation } from './car.validation';

const route = Router();

route.post('/', requestVAlidator(carValidation), carsController.createCars);
route.get('/', carsController.getAllCars);

export const carsRouter = route;
