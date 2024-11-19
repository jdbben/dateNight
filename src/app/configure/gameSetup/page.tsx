"use client";
import NavBar from "@/app/components/NavBar";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session, status } = useSession();
  // if (status === "authenticated") {
  //   return (
  //     <div>
  //       {session.user?.image ? (
  //         <>
  //           <img src={session.user?.image} alt="" />
  //         </>
  //       ) : null}
  //     </div>
  //   );
  // }
  return (
    <div>
      <p>Signed up as </p>
    </div>
  );
};

export default page;
