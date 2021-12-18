import mongoose from 'mongoose';
import config from '../config/default';
import log from '../logger';

const connect = async (): Promise<void> => {
  let dbUri = config.uri as string;

  return mongoose.connect(dbUri)
    .then(() => log.info('database Connected'))
    .catch(e => {
      log.error('db error:', e);
      process.exit(1);
    });
}

export default connect;
