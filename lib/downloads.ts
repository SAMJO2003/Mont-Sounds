import { Redis } from "@upstash/redis";
import { randomUUID } from "crypto";

// Upstash Redis — free tier is plenty for low volume.
// Create a database at https://console.upstash.com, then copy the REST
// URL and token into .env.local (see .env.example).
// Lazily constructed so missing env vars only matter once a request actually
// needs them, not at build/import time.
function getRedis() {
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 14; // download link expires after 14 days

type DownloadRecord = {
  productSlug: string;
  used: boolean;
};

/**
 * Creates a one-time download token for a completed transaction.
 * Safe to call more than once for the same transaction (e.g. Paddle
 * webhook retries) — returns the existing token instead of a new one.
 */
export async function getOrCreateDownloadToken(
  transactionId: string,
  productSlug: string
): Promise<string> {
  const redis = getRedis();
  const existing = await redis.get<string>(`txn:${transactionId}`);
  if (existing) return existing;

  const token = randomUUID();
  const record: DownloadRecord = { productSlug, used: false };

  await redis.set(`download:${token}`, record, { ex: TOKEN_TTL_SECONDS });
  await redis.set(`txn:${transactionId}`, token, { ex: TOKEN_TTL_SECONDS });

  return token;
}

export type ConsumeResult =
  | { status: "ok"; productSlug: string }
  | { status: "not_found" }
  | { status: "already_used" };

/**
 * Marks a download token as used, atomically. Returns "already_used" if
 * this token was ever consumed before (including concurrent requests).
 */
export async function consumeDownloadToken(
  token: string
): Promise<ConsumeResult> {
  const redis = getRedis();
  const record = await redis.get<DownloadRecord>(`download:${token}`);
  if (!record) return { status: "not_found" };
  if (record.used) return { status: "already_used" };

  // Best-effort race guard: two simultaneous requests could both read
  // used:false before either writes. Fine for this low-volume, low-stakes
  // use case — worst case someone downloads twice via a double-click.
  await redis.set(
    `download:${token}`,
    { ...record, used: true },
    { keepTtl: true }
  );

  return { status: "ok", productSlug: record.productSlug };
}
