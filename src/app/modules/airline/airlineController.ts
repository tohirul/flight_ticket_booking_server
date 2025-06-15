import { inject, injectable } from 'tsyringe';

import AirlineService from '@/app/modules/airline/airlineService';
import Controller from '@/core/shared/controller';

import type { Airline } from '@generated/@prisma/client';

@injectable()
class AirlineController extends Controller<Airline> {
  constructor(
    @inject(AirlineService)
    airlineService: AirlineService
  ) {
    super(airlineService);
  }
}

export default AirlineController;
