"use client";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  are you in a long distence relationship ?
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-slate-500">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <span>Yes</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>No</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : null}
      </div>
    );
  }
  return <div className="h-[10vh] w-full left-0 bg-slate-200 "></div>;
};

export default NavBar;
