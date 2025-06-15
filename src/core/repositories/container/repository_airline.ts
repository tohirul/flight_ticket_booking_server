import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { Airline, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class AirlineRepository extends Repository<Airline, PrismaClient['airline'], PrismaClient> {
  constructor() {
    super(Prisma.airline, Prisma);
  }
}

export default AirlineRepository;
