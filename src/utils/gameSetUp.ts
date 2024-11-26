import { Datatype } from "@/app/api/addQuationsType/route";
import prisma from "../../db/prismaClient";
export async function gameSetup(data: Datatype) {
  if (!data) {
    throw new Error(`the data is not recieved check Page`);
  }

  try {
    await prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        relationType: data.relationshipType,
        quetionsType: data.questionsType,
      },
    });
  } catch (err) {
    throw new Error(
      `there was an err while updating the  relationstype ${err}`
    );
  }
}
