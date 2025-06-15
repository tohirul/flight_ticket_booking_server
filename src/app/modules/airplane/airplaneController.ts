import { inject, injectable } from 'tsyringe';

import AirplaneService from '@/app/modules/airplane/airplaneService';
import Controller from '@/core/shared/controller';

import type { Airplane } from '@generated/@prisma/client';
@injectable()
class AirplaneController extends Controller<Airplane> {
  constructor(
    @inject(AirplaneService)
    airplaneService: AirplaneService
  ) {
    super(airplaneService);
  }
}

export default AirplaneController;
