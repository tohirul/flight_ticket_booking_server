// countryController.ts

import { inject, injectable } from 'tsyringe';

import CountryService from '@/app/modules/country/countryService';
import Controller from '@/core/shared/controller';
import { Country } from '@generated/@prisma/client';

@injectable()
class CountryController extends Controller<Country> {
  constructor(
    @inject(CountryService)
    countryService: CountryService
  ) {
    super(countryService);
  }
}

export default CountryController;
