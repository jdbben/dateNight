import { distanceQuetions, hotQuetions } from "@/app/lib/const";
import prisma from "../db/prismaClient";
import pLimit from "p-limit";

const limit = pLimit(10);
export const seed = async () => {
  const totalQuetions = await prisma.fordistence.count();
  const totalQuetionsForSamePlace = await prisma.forSameHouse.count();
  if (!totalQuetions && !totalQuetionsForSamePlace) {
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
  }
};
