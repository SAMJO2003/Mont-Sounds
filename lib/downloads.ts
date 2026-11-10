import { createHmac, timingSafeEqual } from "crypto";

// Signed download links — no database. The token itself carries what to
// deliver and when it expires, plus an HMAC signature so it can't be forged
// or edited. This replaced an Upstash Redis store of one-time tokens: the
// free Upstash database was deleted automatically after 14 days without
// sales, which silently broke delivery.
//
// Trade-off: a link can be used any number of times until it expires (it is
// not one-time), and it can't be revoked early — Drive files couldn't be
// revoked per buyer before either.

const LINK_TTL_MS = 14 * 24 * 60 * 60 * 1000; // download link expires after 14 days

// DOWNLOAD_LINK_SECRET can be set in Vercel to rotate links independently;
// otherwise a key is derived from the Paddle webhook secret, which the site
// already needs, so no extra configuration is required.
function getSigningKey(): Buffer {
  const explicit = process.env.DOWNLOAD_LINK_SECRET;
  if (explicit) return Buffer.from(explicit);
  const base = process.env.PADDLE_WEBHOOK_SECRET;
  if (!base) throw new Error("No secret available to sign download links");
  return createHmac("sha256", base).update("mont-sounds/download-links/v1").digest();
}

type LinkPayload = {
  k: string; // deliverable key (library slug or "sheet:<slug>:<option>")
  t: string; // Paddle transaction id
  e: number; // expiry, ms since epoch
};

function sign(data: string): string {
  return createHmac("sha256", getSigningKey()).update(data).digest("base64url");
}

/**
 * Builds the download token for a completed transaction. Deterministic for
 * the same transaction and purchase time, so Paddle webhook retries produce
 * the same link.
 */
export function createDownloadToken(
  transactionId: string,
  deliverableKey: string,
  purchasedAt: Date
): string {
  const payload: LinkPayload = {
    k: deliverableKey,
    t: transactionId,
    e: purchasedAt.getTime() + LINK_TTL_MS,
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${sign(data)}`;
}

export type VerifyResult =
  | { status: "ok"; productSlug: string }
  | { status: "invalid" }
  | { status: "expired" };

export function verifyDownloadToken(token: string): VerifyResult {
  const [data, signature, extra] = token.split(".");
  if (!data || !signature || extra !== undefined) return { status: "invalid" };

  const expected = Buffer.from(sign(data));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    return { status: "invalid" };
  }

  let payload: LinkPayload;
  try {
    payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return { status: "invalid" };
  }
  if (typeof payload.k !== "string" || typeof payload.e !== "number") {
    return { status: "invalid" };
  }
  if (Date.now() > payload.e) return { status: "expired" };

  return { status: "ok", productSlug: payload.k };
}
