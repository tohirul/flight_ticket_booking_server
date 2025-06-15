import express from 'express';
import { container } from 'tsyringe';

import CityController from '@/app/modules/city/cityController';
import requestValidator from '@middlewares/requestValidator';

import { createCitySchema, updateCitySchema } from './cityZod';

const { getAll, getSingle, create, update, destroy } = container.resolve(CityController);
const cityRouter = express.Router();

cityRouter.get('/', getAll);
cityRouter.get('/:id', getSingle);
cityRouter.post('/', requestValidator(createCitySchema), create);
cityRouter.put('/:id', requestValidator(updateCitySchema), update);
cityRouter.delete('/:id', destroy);

export default cityRouter;
