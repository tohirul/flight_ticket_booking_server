import express from 'express';
import { container } from 'tsyringe';

import CityController from '@/app/modules/city/cityController';
import requestValidator from '@middlewares/requestValidator';

import { createCitySchema, updateCitySchema } from './cityZod';

const controller = container.resolve(CityController);
const cityRouter = express.Router();

cityRouter.get('/', controller.getAll);
cityRouter.get('/:id', controller.getSingle);
cityRouter.post('/', requestValidator(createCitySchema), controller.create);
cityRouter.put('/:id', requestValidator(updateCitySchema), controller.update);
cityRouter.delete('/:id', controller.destroy);

export default cityRouter;
