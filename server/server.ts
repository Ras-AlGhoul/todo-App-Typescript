import express from 'express';
import cors from 'cors';
import config from './config/default';
import log from './logger';
import todoRoutes from "./routes/todoRoutes";
import foodTodoRoutes from './routes/foodTodoRoutes';
import workTodoRoutes from './routes/workTodoRoutes';
import dbConnect from './db/mogoose';

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, host, () => {
    log.info(`app is running on ${host}:${port}`);
    dbConnect();
    todoRoutes(app);
    foodTodoRoutes(app);
    workTodoRoutes(app);
  });
  