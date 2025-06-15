import express from 'express';
import { container } from 'tsyringe';

import AirplaneController from '@/app/modules/airplane/airplaneController';
import requestValidator from '@middlewares/requestValidator';

import { createAirplaneSchema } from './airplaneZod';

const controller = container.resolve(AirplaneController);
const airPlaneRouter = express.Router();

airPlaneRouter.get('/', controller.getAll);
airPlaneRouter.get('/:id', controller.getSingle);
airPlaneRouter.post('/', requestValidator(createAirplaneSchema), controller.create);
airPlaneRouter.put('/:id', controller.update);
airPlaneRouter.delete('/:id', controller.destroy);

export default airPlaneRouter;
