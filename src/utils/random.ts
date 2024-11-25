import prisma from "../../db/prismaClient";
export const randomNums = async (relationtype: string, target: string) => {
  const existingQuetions = await prisma.user.findMany({
    select: {
      prevQuestions: true,
    },
  });
  const tableCountD = await prisma.fordistence.count();
  const tableCountS = await prisma.forSameHouse.count();

  if (
    (relationtype === "distance" && existingQuetions.length === 0) ||
    existingQuetions.length != tableCountD
  ) {
    const ids: { id: number }[] = await prisma.fordistence.findMany({
      select: { id: true },
    });
    try {
      await prisma.user.update({
        where: {
          email: target,
        },
        data: {
          prevQuestions: ids,
        },
      });
    } catch (err) {
      throw new Error("cant add the prevquestions" + err);
    }
  } else if (
    (relationtype === "same place" && existingQuetions.length === 0) ||
    existingQuetions.length != tableCountS
  ) {
    try {
      const ids: { id: number }[] = await prisma.forSameHouse.findMany({
        select: { id: true },
      });
      await prisma.user.update({
        where: {
          email: target,
        },
        data: {
          prevQuestions: ids,
        },
      });
    } catch (err) {
      throw new Error("cant add the prevquestions" + err);
    }
  }
};
