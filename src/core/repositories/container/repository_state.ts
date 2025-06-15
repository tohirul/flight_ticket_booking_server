import { injectable } from 'tsyringe';

import PrismaService from '@/database';
import Repository from '@core/repositories/repository';
import { PrismaClient, State } from '@generated/@prisma/client';

const Prisma = PrismaService.client;

@injectable()
class StateRepository extends Repository<State, PrismaClient['state'], PrismaClient> {
  constructor() {
    super(Prisma.state, Prisma);
  }
}
export default StateRepository;
