import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';
import AirportController from '@/app/modules/airport/airportController';

import { createAirportSchema, updateAirportSchema } from './airportZod';

const controller = container.resolve(AirportController);
const airportRouter = express.Router();

airportRouter.get('/', controller.getAll);
airportRouter.get('/:id', controller.getSingle);
airportRouter.post('/', requestValidator(createAirportSchema), controller.create);
airportRouter.put('/:id', requestValidator(updateAirportSchema), controller.update);
airportRouter.delete('/:id', controller.destroy);

export default airportRouter;
