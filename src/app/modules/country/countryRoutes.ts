import express from 'express';
import { container } from 'tsyringe';

import CountryController from '@/app/modules/country/countryController';
import { createCountrySchema, updateCountrySchema } from '@/app/modules/country/countryZod';
import requestValidator from '@middlewares/requestValidator';

const { getAll, getSingle, create, update, destroy } = container.resolve(CountryController);

const countryRouter = express.Router();

countryRouter.get('/', getAll);
countryRouter.get('/:countryId', getSingle);
countryRouter.post('/', requestValidator(createCountrySchema), create);
countryRouter.put('/:countryId', requestValidator(updateCountrySchema), update);
countryRouter.delete('/:countryId', destroy);

export default countryRouter;
