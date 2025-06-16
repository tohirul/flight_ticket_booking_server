// src/core/cache/setup.ts
import { loadCacheFromDisk, saveCacheToDisk } from './persist';

export function setupCachePersistence() {
  loadCacheFromDisk();

  process.on('SIGINT', () => {
    saveCacheToDisk();
    process.exit();
  });

  process.on('SIGTERM', () => {
    saveCacheToDisk();
    process.exit();
  });

  // Optional: flush to disk every X minutes
  // setInterval(saveCacheToDisk, 5 * 60 * 1000);
}
