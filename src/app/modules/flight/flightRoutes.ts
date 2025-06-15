import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';
import FlightController from '@/app/modules/flight/flightController';

import { CreateFlightSchema, UpdateFlightSchema } from './flightZod';

const { getAll, getSingle, create, update, destroy } = container.resolve(FlightController);
const flightRoutes = express.Router();

flightRoutes.get('/', getAll);
flightRoutes.get('/:id', getSingle);
flightRoutes.post('/', requestValidator(CreateFlightSchema), create);
flightRoutes.put('/:id', requestValidator(UpdateFlightSchema), update);
flightRoutes.delete('/:id', destroy);

export default flightRoutes;
