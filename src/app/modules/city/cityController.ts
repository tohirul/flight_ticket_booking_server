import { inject, injectable } from 'tsyringe';

import Controller from '@/core/shared/controller';

import CityService from './cityServices';

import type { City } from '@generated/@prisma/client';

@injectable()
class CityController extends Controller<City> {
  constructor(
    @inject(CityService)
    cityService: CityService
  ) {
    super(cityService);
  }
}

export default CityController;
