type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

export function rateLimit(ip: string) {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_HITS - 1 };
  }

  if (bucket.count >= MAX_HITS) {
    return { ok: false, remaining: 0, retryAfterMs: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { ok: true, remaining: MAX_HITS - bucket.count };
}
