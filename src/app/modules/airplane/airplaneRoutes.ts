import express from 'express';
import { container } from 'tsyringe';

import AirplaneController from '@/app/modules/airplane/airplaneController';
import requestValidator from '@middlewares/requestValidator';

import { createAirplaneSchema } from './airplaneZod';

const controller = container.resolve(AirplaneController);
const airPlaneRouter = express.Router();

airPlaneRouter.get('/', controller.getAll);
airPlaneRouter.get('/:airplaneId', controller.getSingle);
airPlaneRouter.post('/', requestValidator(createAirplaneSchema), controller.create);
airPlaneRouter.put('/:airplaneId', controller.update);
airPlaneRouter.delete('/:airplaneId', controller.destroy);

export default airPlaneRouter;
