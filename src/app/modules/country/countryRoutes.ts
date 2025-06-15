import express from 'express';
import { container } from 'tsyringe';

import CountryController from '@/app/modules/country/countryController';
import { createCountrySchema, updateCountrySchema } from '@/app/modules/country/countryZod';
import requestValidator from '@middlewares/requestValidator';

const countryController = container.resolve(CountryController);
const countryRouter = express.Router();
countryRouter.get('/', countryController.getAll);
countryRouter.get('/:countryId', countryController.getSingle);
countryRouter.post('/', requestValidator(createCountrySchema), countryController.create);
countryRouter.put('/:countryId', requestValidator(updateCountrySchema), countryController.update);
countryRouter.delete('/:countryId', countryController.destroy);

export default countryRouter;
