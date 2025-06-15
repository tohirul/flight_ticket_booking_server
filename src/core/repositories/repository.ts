import type { PrismaPromise } from '@generated/@prisma/client/runtime/library';

export interface IRepository<T> {
  findAll(query?: object): Promise<T[]>;
  findOne(query: { where: object }): Promise<T | null>;
  create(query: { data: T }): Promise<T>;
  update(query: { where: object; data: Partial<T> }): Promise<T>;
  destroy(query: { where: object }): Promise<void>;
}

class Repository<
  T,
  ModelDelegate extends {
    findMany: (args?: Parameters<ModelDelegate['findMany']>[0]) => PrismaPromise<T[]>;
    findUnique: (args: Parameters<ModelDelegate['findUnique']>[0]) => PrismaPromise<T | null>;
    create: (args: Parameters<ModelDelegate['create']>[0]) => PrismaPromise<T>;
    update: (args: Parameters<ModelDelegate['update']>[0]) => PrismaPromise<T>;
    delete: (args: Parameters<ModelDelegate['delete']>[0]) => PrismaPromise<T>;
  },
  PrismaClientType extends { $transaction: <R>(fn: (txClient: any) => Promise<R>) => Promise<R> },
> implements IRepository<T>
{
  protected model: ModelDelegate;
  protected prismaClient: PrismaClientType;

  constructor(model: ModelDelegate, prismaClient: PrismaClientType) {
    this.model = model;
    this.prismaClient = prismaClient;
  }

  async findAll(query?: Parameters<ModelDelegate['findMany']>[0]): Promise<T[]> {
    return this.model.findMany(query);
  }

  async findOne(query: Parameters<ModelDelegate['findUnique']>[0]): Promise<T | null> {
    return this.model.findUnique(query);
  }

  async create(query: Parameters<ModelDelegate['create']>[0]): Promise<T> {
    return this.prismaClient.$transaction(async (txClient: any) => {
      const txModel = txClient[this.modelName()] as ModelDelegate;
      return txModel.create(query);
    });
  }

  async update(query: Parameters<ModelDelegate['update']>[0]): Promise<T> {
    return this.prismaClient.$transaction(async (txClient: any) => {
      const txModel = txClient[this.modelName()] as ModelDelegate;
      return txModel.update(query);
    });
  }

  async destroy(query: Parameters<ModelDelegate['delete']>[0]): Promise<void> {
    await this.prismaClient.$transaction(async (txClient: any) => {
      const txModel = txClient[this.modelName()] as ModelDelegate;
      await txModel.delete(query);
    });
  }

  protected modelName(): string {
    for (const key in this.prismaClient) {
      if (this.prismaClient[key] === this.model) {
        return key;
      }
    }
    throw new Error('Cannot determine model name from prisma client');
  }
}

export default Repository;
