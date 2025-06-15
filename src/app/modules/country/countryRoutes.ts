import express from 'express';
import { container } from 'tsyringe';

import CountryController from '@/app/modules/country/countryController';
import { createCountrySchema, updateCountrySchema } from '@/app/modules/country/countryZod';
import requestValidator from '@middlewares/requestValidator';

const controller = container.resolve(CountryController);

const countryRouter = express.Router();

countryRouter.get('/', controller.getAll);
countryRouter.get('/:id', controller.getSingle);
countryRouter.post('/', requestValidator(createCountrySchema), controller.create);
countryRouter.put('/:id', requestValidator(updateCountrySchema), controller.update);
countryRouter.delete('/:id', controller.destroy);

export default countryRouter;
