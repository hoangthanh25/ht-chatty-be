import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';
import { redisConnection } from '@services/redis/redis.connection';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose
      .connect(config.DATABASE_URL!)
      .then(() => {
        log.info('Successfully connected to DB.');
        redisConnection.connect();
      })
      .catch((error) => {
        log.error('Error connecting to DB.', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconneted', connect);
};
