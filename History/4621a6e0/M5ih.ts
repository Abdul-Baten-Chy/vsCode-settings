import { Router } from 'express';
import { bookingController } from './booking.controller';

const route = Router();

route.post('/', bookingController.createBooking);
route.get('/', bookingController.getAllBookings);

export const bookingRoute = route;
