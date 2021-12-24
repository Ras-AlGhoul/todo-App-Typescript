import { Request } from "express";

class ServerError extends Error {
  status: number
  constructor(msg: string, status: number) {
    super(msg);
    this.status = status;
  }
};

export const reqBodyValidator = (req: Request): any => {
  if (!req.is('application/json')) {
    throw new ServerError('Body of post request must be JSON', 400);
  }
};
