import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import FlightService from '@/app/modules/flight/flightServices';
import Controller from '@/core/shared/controller';
import catchAsync from '@/core/utilities/catchAsync';
import { createResponse } from '@/core/utilities/createResponse';
import HttpStatus from '@/core/utilities/httpStatus';
import sendResponse from '@/core/utilities/sendResponse';

import type { Flight } from '@generated/@prisma/client';
@injectable()
class FlightController extends Controller<Flight> {
  constructor(
    @inject(FlightService)
    flightService: FlightService
  ) {
    super(flightService);
  }
  getAll = catchAsync(async (req: Request, res: Response) => {
    const { status, limit = 10, page = 1 } = req.query;

    const filters: any = {};
    if (status) filters.status = status;

    const offset = (Number(page) - 1) * Number(limit);

    const result = await this['service'].getAll({
      where: filters,
      skip: offset,
      take: Number(limit),
    });

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

export default FlightController;
