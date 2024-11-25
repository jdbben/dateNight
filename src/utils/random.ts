import prisma from "../../db/prismaClient";

export const randomNums = async (relationtype: string, target: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: target },
      select: { prevQuestions: true },
    });

    if (!user) {
      throw new Error(`User with email ${target} not found`);
    }

    if (relationtype === "distance" && !user.prevQuestions) {
      const ids = await prisma.fordistence.findMany({
        select: { id: true },
      });

      await prisma.user.update({
        where: { email: target },
        data: {
          prevQuestions: ids.map((idObj) => idObj.id),
        },
      });
    }

    if (relationtype === "same place" && !user.prevQuestions) {
      const ids = await prisma.forSameHouse.findMany({
        select: { id: true },
      });

      await prisma.user.update({
        where: { email: target },
        data: {
          prevQuestions: ids.map((idObj) => idObj.id),
        },
      });
    }
  } catch (err) {
    throw new Error("Error processing randomNums: " + err);
  }
};
