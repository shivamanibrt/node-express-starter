import { Redis } from 'ioredis';

// Initialize Redis client
const redisClientSingleton = () => {
  return new Redis(process.env.REDIS_URL!);
};

declare const globalThis: {
  redisGlobal: ReturnType<typeof redisClientSingleton>;
} & typeof global;

// Check for existing instance of Redis client or create a new one
const redis = globalThis.redisGlobal ?? redisClientSingleton();

// If it's in development mode, attach the redis client to the global object
if (process.env.NODE_ENV !== 'production') {
  globalThis.redisGlobal = redis;
}

export default redis;
