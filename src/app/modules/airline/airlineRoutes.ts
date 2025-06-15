import express from 'express';
import { container } from 'tsyringe';

import AirlineController from '@/app/modules/airline/airlineController';
import requestValidator from '@middlewares/requestValidator';

import { createAirlineSchema, updateAirlineSchema } from './airlineZod';

const airlineController = container.resolve(AirlineController);
const airlineRouter = express.Router();

airlineRouter.get('/', airlineController.getAll);
airlineRouter.get('/:airlineId', airlineController.getSingle);
airlineRouter.post('/', requestValidator(createAirlineSchema), airlineController.create);
airlineRouter.put('/:airlineId', requestValidator(updateAirlineSchema), airlineController.update);
airlineRouter.delete('/:airlineId', airlineController.destroy);

export default airlineRouter;
