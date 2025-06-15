import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';
import AirportController from '@/app/modules/airport/airportController';

import { createAirportSchema, updateAirportSchema } from './airportZod';

const { getAll, getSingle, create, update, destroy } = container.resolve(AirportController);
const airportRouter = express.Router();

airportRouter.get('/', getAll);
airportRouter.get('/:id', getSingle);
airportRouter.post('/', requestValidator(createAirportSchema), create);
airportRouter.put('/:id', requestValidator(updateAirportSchema), update);
airportRouter.delete('/:id', destroy);

export default airportRouter;
