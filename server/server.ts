import express from 'express';
import config from './config/default';
import log from './logger';
import routes from "./routes/index";
import cors from 'cors';
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
    routes(app);
  });