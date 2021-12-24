import { Express, NextFunction, Request, Response } from "express";
import { reqBodyValidator } from '../errorHandling';
import FoodTodo from '../db/models/FoodTodo';

export default function foodTodoRoutes(app: Express) {
  app.route('/api/foodtodos')
    .get((req: Request, res: Response) => FoodTodo.find({}).then(result => res.send(result)))
    .post((req: Request, res: Response) => {
      res.setHeader('content-type', 'application/json');
      reqBodyValidator(req);
      const todo = new FoodTodo(req.body);
      todo.save()
        .then(response => res.send(response))
        .catch(err => res.status(400).send(err));
    });

  app.route('/api/foodtodos/:id')
    .put((req: Request, res: Response) => {
      const { id } = req.params;
      const editBody = req.body;
      FoodTodo.findByIdAndUpdate(id, {
        title: editBody.title,
        description: editBody.description,
        done: editBody.done,
        imageUrl: editBody.imageUrl,
        carbohydrate: editBody.carbohydrate,
        protein: editBody.protein
      })
        .then((review) => res.send(review))
        .catch(err => res.status(400).send(err));
    })
    .delete((req: Request, res: Response) => {
      const { id } = req.params;
      FoodTodo.deleteOne({ _id: id })
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