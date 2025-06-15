import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { Airplane, PrismaClient } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class AirplaneRepository extends Repository<Airplane, PrismaClient['airplane'], PrismaClient> {
  constructor() {
    super(Prisma.airplane, Prisma);
  }

  // async findByManufacturer(manufacturer: string): Promise<Airplane[]> {
  //   return this.findAll({ where: { manufacturer } });
  // }
}

export default AirplaneRepository;
