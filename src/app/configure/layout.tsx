"use client";
import { SessionProvider } from "next-auth/react";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Session } from "next-auth";
import NavBar from "../components/NavBar";
import Theme from "../components/Theme";

function layout({
  children,
  session,
}: Readonly<{ children: React.ReactNode; session: Session }>) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        {children}
      </MaxWidthWrapper>
    </SessionProvider>
  );
}

export default layout;
