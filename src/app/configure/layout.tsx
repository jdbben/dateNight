"use client";
import { SessionProvider } from "next-auth/react";

import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { Session } from "next-auth";
import NavBar from "../../components/NavBar";
import Theme from "../../components/Theme";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  session?: Session;
}

export default function Layout({ children, session }: LayoutProps) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        {children}
      </MaxWidthWrapper>
    </SessionProvider>
  );
}
