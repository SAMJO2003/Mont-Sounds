import { createHmac, timingSafeEqual } from "crypto";
import { PADDLE_ENVIRONMENT } from "@/lib/paddle";

const PADDLE_API_BASE =
  PADDLE_ENVIRONMENT === "production"
    ? "https://api.paddle.com"
    : "https://sandbox-api.paddle.com";

/**
 * Verifies the `Paddle-Signature` header on an incoming webhook request.
 * `rawBody` must be the exact, unparsed request body text — the signature
 * won't match a re-serialized JSON string.
 * https://developer.paddle.com/webhooks/signature-verification
 */
export function verifyPaddleSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): boolean {
  if (!signatureHeader) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(";").map((part) => part.split("="))
  );
  const ts = parts.ts;
  const h1 = parts.h1;
  if (!ts || !h1) return false;

  const expected = createHmac("sha256", secret)
    .update(`${ts}:${rawBody}`)
    .digest("hex");

  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(h1, "hex");
  if (expectedBuf.length !== actualBuf.length) return false;

  return timingSafeEqual(expectedBuf, actualBuf);
}

/**
 * Paddle webhooks don't reliably include the customer's email inline, so we
 * look it up via the Customers API using the secret API key (Developer
 * Tools → Authentication → API keys — NOT the client-side token in
 * lib/paddle.ts).
 */
export async function fetchPaddleCustomerEmail(
  customerId: string
): Promise<string | null> {
  const res = await fetch(`${PADDLE_API_BASE}/customers/${customerId}`, {
    headers: {
      Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
    },
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.email ?? null;
}
