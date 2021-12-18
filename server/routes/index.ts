import { Express, NextFunction, Request, Response } from "express";
import { idValidator, nextId, reqBodyValidator } from '../errorHandling';
const itemsData = require('./db/items.json');
let items = itemsData;

export interface Item {
  id: string,
  item: string,
  description: string,
  price: string,
  location: string,
  contact: string,
  category: string,
  imageUrl: string
};

export default function (app: Express) {
  app.get("/", (req: Request, res: Response) => res.send('wussup>?'));

  app.get('/api/items', (req: Request, res: Response) => {
    res.send(items);
  });

  app.get('/api/items/:category', (req: Request, res: Response) => {
    const { category } = req.params;
    const item = items.filter((item: Item) => item.category === category);
    res.send(item);
  });

  app.post('/api/items', (req: Request, res: Response) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const newItem: Item = {
      id: nextId(items).toString(),
      item: req.body.item,
      description: req.body.description,
      price: req.body.price,
      location: req.body.location,
      contact: req.body.contact,
      imageUrl: req.body.imageUrl,
      category: req.body.category
    };
    items = [...items, newItem];
    res.status(201);
    res.send(newItem);
  });

  app.put('/api/items/:id', (req: Request, res: Response) => {
    res.setHeader('content-type', 'application/json');
    const { id } = req.params;
    idValidator(id, items);
    const editedItem = {
        id: id,
        item: req.body.item,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        contact: req.body.contact,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    }
    items = items.map((item: Item) => item.id === id? editedItem : item );
    res.status(204);
    res.end();
  });

  app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    idValidator(id, items);
    items = items.filter((item: Item) => item.id !== id);
    res.status(204);
    res.end()
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      res.status(err.status || 500).send({ status: err.status, message: err.message });
    } else {
      next();
    }
  });
  
}