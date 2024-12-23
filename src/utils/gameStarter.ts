import { distanceQuetions, hotQuetions } from "@/app/lib/const";
import prisma from "../../db/prismaClient";
export async function getrandomquetion(email: string) {
  const relationshipType = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      relationType: true,
    },
  });
  if (relationshipType || relationshipType === "distance") {
    return distanceQuetions[
      Math.floor(Math.random() * (distanceQuetions.length - 1))
    ];
  } else if (relationshipType || relationshipType === "same place") {
    return hotQuetions[Math.floor(Math.random() * (hotQuetions.length - 1))];
  }
}
