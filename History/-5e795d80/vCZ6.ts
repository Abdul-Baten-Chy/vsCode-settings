import { Router } from 'express';
import { carsController } from './car.controller';

const route = Router();

route.post('/', carsController.createCars);

export const carsRouter = route;
