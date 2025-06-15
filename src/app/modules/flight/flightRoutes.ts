import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';
import FlightController from '@/app/modules/flight/flightController';

import { CreateFlightSchema, UpdateFlightSchema } from './flightZod';

const controller = container.resolve(FlightController);
const flightRoutes = express.Router();

flightRoutes.get('/', controller.getAll);
flightRoutes.get('/:id', controller.getSingle);
flightRoutes.post('/', requestValidator(CreateFlightSchema), controller.create);
flightRoutes.put('/:id', requestValidator(UpdateFlightSchema), controller.update);
flightRoutes.delete('/:id', controller.destroy);

export default flightRoutes;
