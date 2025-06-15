import { injectable } from 'tsyringe';

import PrismaService from '@/database';

import Repository from '../repository';

import type { Airport, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class AirportRepository extends Repository<Airport, PrismaClient['airport'], PrismaClient> {
  constructor() {
    super(Prisma.airport, Prisma);
  }
}

export default AirportRepository;
