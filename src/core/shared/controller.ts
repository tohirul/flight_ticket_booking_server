import { Request, Response } from 'express';

import catchAsync from '@core/utilities/catchAsync';
import { createResponse } from '@core/utilities/createResponse';
import HttpStatus from '@core/utilities/httpStatus';
import sendResponse from '@core/utilities/sendResponse';

export default class Controller<T> {
  private service: {
    getAll: (...args: any[]) => Promise<T[]>;
    getSingle: (id: string) => Promise<T | null>;
    create: (data: any) => Promise<T>;
    update: (id: string, data: Partial<T>) => Promise<T>;
    destroy: (id: string) => Promise<T | void>;
  };

  constructor(service: any) {
    this.service = service;
  }

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
    const result = await this.service.getSingle(req.params.id);
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
    const result = await this.service.update(req.params.id, req.body);
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
    const result = await this.service.destroy(req.params.id);
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
