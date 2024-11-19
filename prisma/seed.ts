import { distanceQuetions, hotQuetions } from "@/app/lib/const";
import prisma from "../db/prismaClient";
import pLimit from "p-limit";

const limit = pLimit(10);
const seed = async () => {
  try {
    await Promise.all(
      distanceQuetions.map((question) =>
        limit(() =>
          prisma.fordistence.create({
            data: {
              question,
            },
          })
        )
      )
    );

    await Promise.all(
      hotQuetions.map((question) =>
        limit(() =>
          prisma.forSameHouse.create({
            data: {
              question,
            },
          })
        )
      )
    );

    console.log("Seeding completed successfully!");
  } catch (err) {
    console.error("Error while seeding:", err);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
