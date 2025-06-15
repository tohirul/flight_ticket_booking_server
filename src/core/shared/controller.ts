import { Request, Response } from 'express';

import catchAsync from '@core/utilities/catchAsync';
import { createResponse } from '@core/utilities/createResponse';
import HttpStatus from '@core/utilities/httpStatus';
import sendResponse from '@core/utilities/sendResponse';

export default class Controller<T, CreateDto = T, UpdateDto = Partial<T>> {
  constructor(
    private readonly service: {
      getAll: (...args: any[]) => Promise<T[]>;
      getSingle: (id: string) => Promise<T | null>;
      create: (data: CreateDto) => Promise<T>;
      update: (id: string, data: UpdateDto) => Promise<T>;
      destroy: (id: string) => Promise<T | void>;
    },
    private readonly idParam: string = 'id'
  ) {}

  getAll = catchAsync(async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
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
    const result = await this.service.getSingle(id);
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
