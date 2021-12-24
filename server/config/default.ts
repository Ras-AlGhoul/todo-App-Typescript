import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: 4000 || process.env.PORT,
  host: 'localhost',
  uri: `${process.env.MONGO_URI}`
}

export default config;
