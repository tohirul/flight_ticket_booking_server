import { inject, injectable } from 'tsyringe';

import AirlineRepository from '@/core/repositories/container/repository_airline';
import Services from '@/core/shared/services';
import { Airline } from '@generated/@prisma/client';

@injectable()
export default class AirlineService extends Services<Airline> {
  constructor(
    @inject('AirlineRepository')
    airlineRepository: AirlineRepository
  ) {
    super(airlineRepository);
  }
}
