import { inject, injectable } from 'tsyringe';

import AirportRepository from '@/core/repositories/container/repository_airport';
import Services from '@/core/shared/services';

import type { Airport } from '@generated/@prisma/client';

@injectable()
export default class AirportService extends Services<Airport> {
  constructor(
    @inject('AirportRepository')
    airportRepository: AirportRepository
  ) {
    super(airportRepository);
  }
}
