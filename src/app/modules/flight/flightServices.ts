import type FlightRepository from '@/core/repositories/container/repository_flight';
import { inject, injectable } from 'tsyringe';

import Services from '@/core/shared/services';

import type { Flight } from '@generated/@prisma/client';
@injectable()
export default class FlightService extends Services<Flight> {
  constructor(
    @inject('FlightRepository')
    flightRepository: FlightRepository
  ) {
    super(flightRepository);
  }
}
