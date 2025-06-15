import { inject, injectable } from 'tsyringe';

import CityRepository from '@/core/repositories/container/repository_city';
import Services from '@/core/shared/services';
import { City } from '@generated/@prisma/client';

@injectable()
export default class CityService extends Services<City> {
  constructor(
    @inject('CityRepository')
    cityRepository: CityRepository
  ) {
    super(cityRepository);
  }
}
