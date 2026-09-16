import { NextRequest, NextResponse } from "next/server";
import { verifyPaddleSignature, fetchPaddleCustomerEmail } from "@/lib/paddle-server";
import { getProductByPriceId } from "@/lib/products";
import { getOrCreateDownloadToken } from "@/lib/downloads";
import { sendDownloadEmail } from "@/lib/email";

export const runtime = "nodejs";

// Temporary manual delivery, wired up while Mont Sounds is below Pulse
// Downloader's automated-hosting sales threshold. Once volume justifies the
// $50/mo, this whole webhook → email → one-time-link flow can be retired in
// favor of their built-in delivery.
//
// Paddle dashboard → Developer Tools → Notifications → add a webhook
// destination pointing at https://<your-domain>/api/paddle-webhook,
// subscribed to "transaction.completed". Copy its signing secret into
// PADDLE_WEBHOOK_SECRET. Sandbox and production have separate destinations
// and secrets, same as the client tokens in lib/paddle.ts.
export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("paddle-signature");

  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("PADDLE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "server not configured" }, { status: 500 });
  }

  if (!verifyPaddleSignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);

  if (event.event_type !== "transaction.completed") {
    // Ack anything we don't care about so Paddle stops retrying it.
    return NextResponse.json({ received: true });
  }

  const transaction = event.data;
  const transactionId: string = transaction.id;
  const customerId: string = transaction.customer_id;

  const items: Array<{ price?: { id?: string }; price_id?: string }> =
    transaction.items ?? [];
  const priceId = items[0]?.price?.id ?? items[0]?.price_id;

  const product = priceId ? getProductByPriceId(priceId) : undefined;
  if (!product) {
    console.error(
      `paddle-webhook: no product matches price id "${priceId}" (transaction ${transactionId})`
    );
    // 200 on purpose — retrying won't make a matching product appear.
    return NextResponse.json({ received: true });
  }

  const email = await fetchPaddleCustomerEmail(customerId);
  if (!email) {
    console.error(
      `paddle-webhook: could not resolve email for customer ${customerId} (transaction ${transactionId})`
    );
    // 500 so Paddle retries — this one's likely transient (API hiccup).
    return NextResponse.json({ error: "could not resolve customer email" }, { status: 500 });
  }

  const token = await getOrCreateDownloadToken(transactionId, product.slug);
  const siteUrl = process.env.SITE_URL || "https://montsounds.com";
  const downloadUrl = `${siteUrl}/api/download/${token}`;

  await sendDownloadEmail({ to: email, productName: product.name, downloadUrl });

  return NextResponse.json({ received: true });
}
