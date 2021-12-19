import { Express, NextFunction, Request, response, Response } from "express";
import { idValidator, nextId, reqBodyValidator } from '../errorHandling';
import Todo from '../db/models/Todo';

export default function (app: Express) {
  app.route('/api/todos')
    .get((req: Request, res: Response) => Todo.find({}).then(result => res.send(result)))
    .post((req: Request, res: Response) => {
      res.setHeader('content-type', 'application/json');
      reqBodyValidator(req);
      const todo = new Todo(req.body);
      todo.save().then(response => res.send(response));
    });

  app.route('api/todos/:id')
   .put((req:Request, res:Response) => {
     
   })
   .delete((req:Request, res:Response) => {
     const { id } = req.params;
     Todo.deleteOne({_id: id})
     .then(() => res.status(204).end());
   })


  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      res.status(err.status || 500).send({ status: err.status, message: err.message });
    } else {
      next();
    }
  });

}