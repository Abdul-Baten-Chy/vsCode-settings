import { Router } from 'express';
import { bookingController } from './booking.controller';

const route = Router();

route.post('/', bookingController.createBooking);

export const bookingRoute = route;
