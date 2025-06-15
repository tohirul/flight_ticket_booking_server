import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { Country, PrismaClient } from '@generated/@prisma/client';

const prisma = PrismaService.client;

@injectable()
class CountryRepository extends Repository<Country, PrismaClient['country'], PrismaClient> {
  constructor() {
    super(prisma.country, prisma);
  }
}

export default CountryRepository;
