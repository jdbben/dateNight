import { randomNums } from "@/utils/random";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await randomNums(data.relationtype, data.email);
    return NextResponse.json({ message: "data received", data: result });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to add preview" },
      { status: 500 }
    );
  }
}
