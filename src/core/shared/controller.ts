// core/shared/controller.ts
import { Request, Response } from 'express';

import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import type { IService } from '@/core/types/common.types';

export default class Controller<T> {
  constructor(private service: IService<T>) {}

  getAll = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.getAll(req.query);
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
