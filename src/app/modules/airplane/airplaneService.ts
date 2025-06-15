import { inject, injectable } from 'tsyringe';

import AirplaneRepository from '@/core/repositories/container/repository_airplane';
import Services from '@/core/shared/services';
import { Airplane } from '@generated/@prisma/client';

@injectable()
export default class AirplaneService extends Services<Airplane> {
  constructor(
    @inject('AirplaneRepository')
    airplaneRepository: AirplaneRepository
  ) {
    super(airplaneRepository);
  }
}
