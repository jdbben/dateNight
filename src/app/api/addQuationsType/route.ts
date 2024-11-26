import { gameSetup } from "@/utils/gameSetUp";
import { NextResponse } from "next/server";

export type Datatype = {
  relationshipType: string;
  questionsType: string;
  email: string;
};
export async function POST(request: Request) {
  try {
    const data: Datatype = await request.json();
    if (!data) {
      throw new Error(`the data is not recieved check Page`);
    }
    const result = await gameSetup(data);

    return NextResponse.json({ message: "data received", data: result });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to add preview" },
      { status: 500 }
    );
  }
}
