import { getRAndomQuetionfromApi } from "@/services/api";
import prisma from "../../db/prismaClient";

const getRandomQuetion = async (email: string) => {
  const quetionslenght = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      prevQuestions: true,
    },
  });

  if (
    quetionslenght?.prevQuestions ||
    Array.isArray(quetionslenght?.prevQuestions)
  ) {
    const arrayData: { id: number }[] = Object.values(
      quetionslenght.prevQuestions
    );
    const random = Math.floor(Math.random() * arrayData.length - 1);
    const quetionId: number = arrayData[random].id;

    const quetion = await prisma.fordistence.findUnique({
      where: {
        id: quetionId,
      },
      select: {
        question: true,
      },
    });

    return quetion?.question;
  } else return null;
};

export default getRandomQuetion;
