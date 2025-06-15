import { inject, injectable } from 'tsyringe';

import CityService from '@/app/modules/city/cityServices';
import Controller from '@/core/shared/controller';
import { City } from '@generated/@prisma/client';

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
