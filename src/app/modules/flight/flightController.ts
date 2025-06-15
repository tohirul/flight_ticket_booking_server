import { inject, injectable } from 'tsyringe';

import FlightService from '@/app/modules/flight/flightServices';
import Controller from '@/core/shared/controller';

import type { Flight } from '@generated/@prisma/client';
@injectable()
class FlightController extends Controller<Flight> {
  constructor(
    @inject(FlightService)
    flightService: FlightService
  ) {
    super(flightService);
  }
}

export default FlightController;
