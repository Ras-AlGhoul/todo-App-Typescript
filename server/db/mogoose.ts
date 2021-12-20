import mongoose from 'mongoose';
import config from '../config/default';
import log from '../logger';

const dbConnect = async (): Promise<void> => {
  let dbUri = config.uri as string;

  return mongoose.connect(dbUri)
    .then(() => log.info('database Connected'))
    .catch(e => log.error('db error:', e));
}

export default dbConnect;
