import express from 'express';
import { container } from 'tsyringe';

import AirplaneController from '@/app/modules/airplane/airplaneController';
import requestValidator from '@middlewares/requestValidator';

import { createAirplaneSchema } from './airplaneZod';

const { getAll, getSingle, create, update, destroy } = container.resolve(AirplaneController);
const airPlaneRouter = express.Router();

airPlaneRouter.get('/', getAll);
airPlaneRouter.get('/:airplaneId', getSingle);
airPlaneRouter.post('/', requestValidator(createAirplaneSchema), create);
airPlaneRouter.put('/:airplaneId', update);
airPlaneRouter.delete('/:airplaneId', destroy);

export default airPlaneRouter;
