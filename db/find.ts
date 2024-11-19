// import { Session } from "next-auth";
// import prisma from "./prismaClient"
// import { JWT } from "next-auth/jwt";

// export const userCreate = async (token: JWT, session: Session) => {
//     try {
//       const target = token.sub;

//       if (typeof target === "string") {
//         const findeduser = await prisma.user.findUnique({
//           where: { gitHubId: target },
//         });
//         if (findeduser === null || undefined) {
//           if (typeof session.user?.name === "string") {
//             const createuser = await prisma.user.create({
//               data: {
//                 gitHubId: target,
//                 name: session.user?.name,
//               },
//             });
//           }
//         }
//       }
//     } catch (err) {
//       console.log("err creating the user", err);
//     }
//   };
