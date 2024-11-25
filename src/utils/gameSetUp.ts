import prisma from "../../db/prismaClient";
export async function gameSetup(
  relationType: string,
  quetionsType: string,
  email: string
) {
  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      relationType: relationType,
      quetionsType: quetionsType,
    },
  });
}
