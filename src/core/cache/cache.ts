// core/cache/cache.ts (or wherever your cache logic is)
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 });

let hits = 0;
let misses = 0;

export function getCache<T>(key: string): T | undefined {
  const value = cache.get<T>(key);
  if (value) {
    hits++;
    console.log(`[Cache] HIT for key: ${key}, total hits: ${hits}`);
  } else {
    misses++;
    console.log(`[Cache] MISS for key: ${key}, total misses: ${misses}`);
  }
  return value;
}

export function setCache<T>(key: string, value: T): void {
  cache.set(key, value);
  console.log(`[Cache] SET for key: ${key}`);
}
