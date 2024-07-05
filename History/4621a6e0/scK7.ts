import { Router } from 'express';
import auth from '../../../midleware/auth';
import { bookingController } from './booking.controller';

const route = Router();

route.post('/', bookingController.createBooking);
route.get('/', auth('admin'), bookingController.getAllBookings);

export const bookingRoute = route;
