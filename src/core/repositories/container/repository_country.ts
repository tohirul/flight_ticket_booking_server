import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { Country, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class CountryRepository extends Repository<Country, PrismaClient['country'], PrismaClient> {
  constructor() {
    super(Prisma.country, Prisma);
  }
}

export default CountryRepository;
