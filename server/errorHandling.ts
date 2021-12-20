import { Request } from "express";

export interface Item {
  id: string,
  title: string,
  description: string,
  price: string,
  location: string,
  contact: string,
  category: string,
  imageUrl: string
};

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

export const idValidator = (id: string, items: Array<Item>): any => {
  if (items.filter(i => i.id === id).length === 0) {
    throw new ServerError('ID does not exist', 404);
  }
};


export const nextId = (itemsArray: Array<Item>): number => {
  const highestId = itemsArray.reduce((accumulator: any, currentValue: any) => (currentValue.id > accumulator ? currentValue.id : accumulator), 0);
  return Number.parseInt(highestId, 10) + 1;
};