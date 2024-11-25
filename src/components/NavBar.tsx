"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="h-[10vh] w-full left-0  flex items-center pl-2 pr-2 rounded-b-xl justify-around ">
        {session.user?.image ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={session.user?.image}
                className="rounded-full"
                width={70}
                alt=""
              />
              <p>{session.user.name}</p>
            </div>
            <Button
              className="pl-4 pr-4"
              onClick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              Signout
            </Button>
          </>
        ) : null}
      </div>
    );
  }
  return <div></div>;
};

export default NavBar;
