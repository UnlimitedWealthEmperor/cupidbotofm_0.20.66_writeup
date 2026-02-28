export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomBetween(a, b = 0) {
  return Math.random() * Math.abs(a - b) + Math.min(a, b);
}

export function randomSleep(maxMs, minMs = 0) {
  if (maxMs <= 0 && minMs <= 0) return;
  return sleep(randomBetween(maxMs, minMs));
}

export function waitUntil(predicate, intervalMs = 1000, timeoutMs) {
  return new Promise(async (resolve) => {
    if (await predicate()) return resolve(null);

    const startTime = Date.now();
    let timeoutId = null;

    const intervalId = setInterval(async () => {
      if (await predicate()) {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        resolve(null);
      }
      timeoutId = setTimeout(() => {
        if (timeoutMs && Date.now() - startTime > timeoutMs) {
          clearInterval(intervalId);
          resolve(null);
        }
      }, timeoutMs);
    }, intervalMs);
  });
}
