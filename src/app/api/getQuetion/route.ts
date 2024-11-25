import getRandomQuetion from "@/utils/getRandomQuetion";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ err: "email was not found" }, { status: 400 });
    }
    const result = await getRandomQuetion(email);

    return NextResponse.json({ message: "data retrieved", data: result });
  } catch (error) {
    console.log("Error processing request:", error);
    return NextResponse.json(
      { error: "failed to retrieve data" },
      { status: 500 }
    );
  }
}
