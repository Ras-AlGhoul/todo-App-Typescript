import { Express, NextFunction, Request, Response } from "express";
import { reqBodyValidator } from '../errorHandling';
import WorkTodo from '../db/models/WorkTodo';

export default function workTodoRoutes(app: Express) {
  app.route('/api/worktodos')
    .get((req: Request, res: Response) => WorkTodo.find({}).then(result => res.send(result)))
    .post((req: Request, res: Response) => {
      res.setHeader('content-type', 'application/json');
      reqBodyValidator(req);
      const todo = new WorkTodo(req.body);
      todo.save()
        .then(response => res.send(response))
        .catch(err => res.status(400).send(err));
    });

  app.route('/api/worktodos/:id')
    .put((req: Request, res: Response) => {
      const { id } = req.params;
      const editBody = req.body;
      WorkTodo.findByIdAndUpdate(id, {
        title: editBody.title,
        description: editBody.description,
        done: editBody.done,
        deadline: editBody.deadline
      })
        .then((review) => res.send(review))
        .catch(err => res.status(400).send(err));
    })
    .delete((req: Request, res: Response) => {
      const { id } = req.params;
      WorkTodo.deleteOne({ _id: id })
        .then(() => res.send('deleted successfully!'))
        .catch(err => res.status(400).send(err));
    });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      res.status(err.status || 500).send({ status: err.status, message: err.message });
    } else {
      next();
    }
  });

}