import { injectable } from 'tsyringe';

interface Repository<T> {
  findAll(args?: any): Promise<T[]>;
  findOne(args: any): Promise<T | null>;
  create(args: { data: T }): Promise<T>;
  update(args: { where: any; data: Partial<T> }): Promise<T>;
  destroy(args: { where: any }): Promise<void>;
  runInTransaction?<R>(cb: (tx: Repository<T>) => Promise<R>): Promise<R>;
}

@injectable()
export default class Services<T> {
  constructor(protected repository: Repository<T>) {}

  protected async transactional<R>(callback: (txRepo: Repository<T>) => Promise<R>): Promise<R> {
    if (this.repository.runInTransaction) {
      return this.repository.runInTransaction(callback);
    }
    return callback(this.repository);
  }

  async getAll(): Promise<T[]> {
    return this.repository.findAll({});
  }

  async getSingle(id: string): Promise<T | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(data: T): Promise<T> {
    return this.transactional((tx) => tx.create({ data }));
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return this.transactional((tx) => tx.update({ where: { id }, data }));
  }

  async destroy(id: string): Promise<void> {
    return this.transactional((tx) => tx.destroy({ where: { id } }));
  }
}
