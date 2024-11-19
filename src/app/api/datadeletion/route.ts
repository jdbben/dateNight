import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const { signed_request } = await req.json();

  if (!signed_request) {
    return NextResponse.json(
      { error: "Missing signed_request" },
      { status: 400 }
    );
  }

  const [encodedSig, payload] = signed_request.split(".");
  const secret = process.env.FACEBOOK_CLIENT_SECRET as string;

  const decodedPayload = JSON.parse(
    Buffer.from(payload, "base64").toString("utf-8")
  );

  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  if (encodedSig !== expectedSig) {
    return NextResponse.json(
      { error: "Invalid signed_request" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    url: "https://f03d-197-230-104-54.ngrok-free.app",
    confirmation_code: decodedPayload.user_id,
  });
}
