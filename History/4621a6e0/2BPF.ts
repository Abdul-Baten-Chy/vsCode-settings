import { Router } from 'express';
import auth from '../../../midleware/auth';
import { bookingController } from './booking.controller';

const route = Router();

route.post('/', auth('user'), bookingController.createBooking);
route.get('/', bookingController.getAllBookings);

export const bookingRoute = route;
