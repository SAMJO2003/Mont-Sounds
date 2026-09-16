import { NextRequest, NextResponse } from "next/server";
import { consumeDownloadToken } from "@/lib/downloads";
import { getProduct } from "@/lib/products";

export const runtime = "nodejs";

function messagePage(title: string, body: string, status = 200) {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>${title}</title></head>
<body style="font-family: Georgia, serif; background:#0b0b0c; color:#f2efe9; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; text-align:center; padding:24px;">
  <div>
    <h1 style="font-size:20px; margin-bottom:12px;">${title}</h1>
    <p style="color:#b8b3a9; max-width:360px;">${body}</p>
  </div>
</body>
</html>`,
    { status, headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const result = await consumeDownloadToken(token);

  if (result.status === "not_found") {
    return messagePage(
      "Link not found",
      "This download link doesn't exist or has expired. If you just purchased a library, contact us and we'll sort it out.",
      404
    );
  }

  if (result.status === "already_used") {
    return messagePage(
      "Link already used",
      "This download link has already been used. Download links only work once — reply to your receipt email if you need it resent.",
      410
    );
  }

  const product = getProduct(result.productSlug);
  if (!product) {
    return messagePage(
      "Something went wrong",
      "We couldn't find the file for this download. Please contact us and we'll send it manually.",
      500
    );
  }

  return NextResponse.redirect(product.driveFileUrl, { status: 307 });
}
