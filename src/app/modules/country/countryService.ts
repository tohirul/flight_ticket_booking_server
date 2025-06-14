import { inject, injectable } from 'tsyringe';

import CountryRepository from '@/core/repositories/container/repository_country';
import Services from '@/core/shared/services';
import { Country } from '@generated/@prisma/client';

@injectable()
export default class CountryService extends Services<Country> {
  constructor(
    @inject('CountryRepository')
    countryRepository: CountryRepository
  ) {
    super(countryRepository);
  }
}
