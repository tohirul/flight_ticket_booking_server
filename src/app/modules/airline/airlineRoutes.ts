import express from 'express';
import { container } from 'tsyringe';

import AirlineController from '@/app/modules/airline/airlineController';
import requestValidator from '@middlewares/requestValidator';

import { createAirlineSchema, updateAirlineSchema } from './airlineZod';

const controller = container.resolve(AirlineController);
const airlineRouter = express.Router();

airlineRouter.get('/', controller.getAll);
airlineRouter.get('/:id', controller.getSingle);
airlineRouter.post('/', requestValidator(createAirlineSchema), controller.create);
airlineRouter.put('/:id', requestValidator(updateAirlineSchema), controller.update);
airlineRouter.delete('/:id', controller.destroy);

export default airlineRouter;
