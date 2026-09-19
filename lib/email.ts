import { Resend } from "resend";

// Resend — free tier covers this comfortably at low volume.
// Create an API key at https://resend.com/api-keys and verify your sending
// domain (or use their shared onboarding domain while testing).
// Lazily constructed so a missing key at build time doesn't fail `next build`
// — it only matters once the webhook actually tries to send an email.
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const TERMS_URL = "https://montsounds.com/terminos-y-condiciones";

export async function sendDownloadEmail({
  to,
  productName,
  downloadUrl,
}: {
  to: string;
  productName: string;
  downloadUrl: string;
}) {
  await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Mont Sounds <onboarding@resend.dev>",
    to,
    subject: `Your download: ${productName}`,
    html: `
      <div style="font-family: Georgia, serif; background:#0b0b0c; color:#f2efe9; padding:32px; max-width:520px; margin:0 auto;">
        <h1 style="font-size:20px; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:24px;">Mont Sounds</h1>
        <p style="font-size:15px; line-height:1.6;">Thank you for your purchase — <strong>${productName}</strong> is ready to download. A separate payment receipt from Paddle, our payment processor, is on its way to this same address.</p>
        <p style="margin:28px 0;">
          <a href="${downloadUrl}" style="display:inline-block; background:#f2efe9; color:#0b0b0c; padding:12px 24px; text-decoration:none; font-size:14px; letter-spacing:0.04em; text-transform:uppercase;">Download now</a>
        </p>
        <p style="font-size:13px; line-height:1.6; color:#b8b3a9;">This link works once and expires in 14 days, so please save the files somewhere safe after downloading. If you ever need it again down the road — even long after those 14 days — just reply to this same email and we'll get it to you.</p>
        <p style="font-size:13px; line-height:1.6; color:#b8b3a9;">Since the library is a large file, Google Drive may show a message saying it "can't scan this file for viruses" before the download starts — that's expected for a zip this size, just click <em>Download anyway</em>.</p>
        <hr style="border:none; border-top:1px solid #2a2622; margin:28px 0;" />
        <p style="font-size:12.5px; line-height:1.6; color:#8a8378;">Your purchase includes a personal, non-exclusive license to use these sounds and instruments in your own commercial or personal productions. Reselling, redistributing, or sharing the raw audio files or your download link is not permitted. A copy of the license is included in your download (License and Terms of Use.txt), and the full terms are always available at <a href="${TERMS_URL}" style="color:#8a8378;">${TERMS_URL}</a>.</p>
      </div>
    `,
  });
}
