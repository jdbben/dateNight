import { Session } from "next-auth";
import prisma from "./prismaClient";
import { JWT } from "next-auth/jwt";
import { seed } from "../prisma/seed";

export const userCreate = async (token: JWT, session: Session) => {
  try {
    const id = token.sub as string;
    const findIfUserexist = await prisma.user.findUnique({
      where: { providerId: id },
    });
    if (findIfUserexist === null || undefined) {
      seed();
      if (session.user) {
        await prisma.user.create({
          data: {
            name: session.user.name as string,
            email: session.user.email as string,
            profilePic: session.user.image,
            providerId: id,
          },
        });
      }
    }
  } catch (err) {
    throw new Error("error creating the user " + err);
  }
};
