import crypto from 'crypto';
import { Request, Response } from 'express';

import cache from '@/core/cache';
import { deleteAllMatchingKeys } from '@/core/cache/persist';
import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

export default class Controller<T, CreateDto = T, UpdateDto = Partial<T>> {
  constructor(
    private readonly service: {
      getAll: (...args: any[]) => Promise<T[]>;
      getSingle: (id: string) => Promise<T | null>;
      create: (data: CreateDto) => Promise<T>;
      update: (id: string, data: UpdateDto) => Promise<T>;
      destroy: (id: string) => Promise<T | void>;
    },
    private readonly idParam: string = 'id',
    private readonly cacheTTL: number = 300
  ) {}

  getAll = catchAsync(async (req: Request, res: Response) => {
    const queryString = JSON.stringify(
      Object.keys(req.query)
        .sort()
        .reduce(
          (acc, key) => {
            acc[key] = req.query[key];
            return acc;
          },
          {} as Record<string, any>
        )
    );

    // Create a hash for the query string to keep key length reasonable
    const queryHash = crypto.createHash('md5').update(queryString).digest('hex');

    // Cache key includes the query hash
    const cacheKey = `all:${this.constructor.name}:${queryHash}`;

    let result = cache.get<T[]>(cacheKey);

    if (!result) {
      console.log(`Result not found in Cache`);

      result = await this.service.getAll(req.query);
      if (result.length > 0) cache.set(cacheKey, result, this.cacheTTL);
    }

    sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: result,
      })
    );
  });

  getSingle = catchAsync(async (req: Request, res: Response) => {
    const id = req.params[this.idParam];
    const cacheKey = `single:${this.constructor.name}:${id}`;
    let result = cache.get<T | null>(cacheKey);

    if (!result) {
      result = await this.service.getSingle(id);
      cache.set(cacheKey, result, this.cacheTTL);
    }

    sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: result,
      })
    );
  });

  create = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);

    // Invalidate ALL list caches (with hashed keys)
    deleteAllMatchingKeys(`all:${this.constructor.name}:`);

    sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.CREATED,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.CREATED),
        data: result,
      })
    );
  });

  update = catchAsync(async (req: Request, res: Response) => {
    const id = req.params[this.idParam];
    const result = await this.service.update(id, req.body);

    deleteAllMatchingKeys(`all:${this.constructor.name}:`);
    cache.del(`single:${this.constructor.name}:${id}`);

    sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: result,
      })
    );
  });

  destroy = catchAsync(async (req: Request, res: Response) => {
    const id = req.params[this.idParam];
    const result = await this.service.destroy(id);

    deleteAllMatchingKeys(`all:${this.constructor.name}:`);
    cache.del(`single:${this.constructor.name}:${id}`);

    sendResponse(
      res,
      createResponse({
        statusCode: HttpStatus.OK,
        success: true,
        message: HttpStatus.getMessage(HttpStatus.OK),
        data: result,
      })
    );
  });
}
