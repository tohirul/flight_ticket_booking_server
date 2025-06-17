import type { Request, Response, NextFunction } from 'express';

export const setStateCountryKey = (req: Request, _res: Response, next: NextFunction) => {
  const data = req.body;
  const stateCountryKey = data?.stateId ?? data?.countryId;

  req.body.stateCountryKey = stateCountryKey;

  next();
};
