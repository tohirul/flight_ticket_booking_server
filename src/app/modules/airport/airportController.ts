import { inject, injectable } from 'tsyringe';

import AirportService from '@/app/modules/airport/airportServices';
import Controller from '@/core/shared/controller';

import type { Airport } from '@generated/@prisma/client';
@injectable()
class AirportController extends Controller<Airport> {
  constructor(
    @inject(AirportService)
    airportService: AirportService
  ) {
    super(airportService);
  }
}
export default AirportController;
