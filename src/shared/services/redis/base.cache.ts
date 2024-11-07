import { createClient } from 'redis';
import Logger from 'bunyan';
import { config } from '@root/config';

export type RedisClient = ReturnType<typeof createClient>;

export abstract class BaseCache {
  client: RedisClient;
  log: Logger;

  constructor(cacheName: string) {
    this.client = createClient({ url: config.REDIS_HOST });
    this.log = config.createLogger(cacheName);
    this.cacheError();
  }

  private cacheError(): void {
    this.client.on('error', (error: unknown) => {
      this.log.error(error);
    });
  }
}

// const client = await createClient()
//   .on('error', err => console.log('Redis Client Error', err))
//   .connect();
