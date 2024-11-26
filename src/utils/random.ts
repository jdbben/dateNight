import prisma from "../../db/prismaClient";
export const randomNums = async (relationtype: string, target: string) => {
  const user = await prisma.user.findUnique({
    where: { email: target },
    select: {
      prevQuestions: true,
    },
  });

  const tableCountD = await prisma.fordistence.count();
  const tableCountS = await prisma.forSameHouse.count();
  if (user === null || undefined) {
    throw new Error(`Error in finding the user`);
  }
  if (!Array.isArray(user.prevQuestions)) {
    throw new Error(`cant be userd`);
  }
  if (
    (relationtype === "distance" && user.prevQuestions.length === 0) ||
    user.prevQuestions.length != tableCountD
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
    (relationtype === "same place" && user.prevQuestions.length === 0) ||
    user.prevQuestions.length != tableCountS
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
