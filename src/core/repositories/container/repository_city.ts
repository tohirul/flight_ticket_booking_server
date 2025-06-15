import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { City, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class CityRepository extends Repository<City, PrismaClient['city'], PrismaClient> {
  constructor() {
    super(Prisma.city, Prisma);
  }
}

export default CityRepository;
