import express from 'express';
import { container } from 'tsyringe';

import AirlineController from '@/app/modules/airline/airlineController';
import requestValidator from '@middlewares/requestValidator';

import { createAirlineSchema, updateAirlineSchema } from './airlineZod';

const controller = container.resolve(AirlineController);
const airlineRouter = express.Router();

airlineRouter.get('/', controller.getAll);
airlineRouter.get('/:airlineId', controller.getSingle);
airlineRouter.post('/', requestValidator(createAirlineSchema), controller.create);
airlineRouter.put('/:airlineId', requestValidator(updateAirlineSchema), controller.update);
airlineRouter.delete('/:airlineId', controller.destroy);

export default airlineRouter;
