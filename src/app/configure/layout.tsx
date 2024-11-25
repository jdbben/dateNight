"use client";
import { getSession, SessionProvider } from "next-auth/react";

import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import NavBar from "../../components/NavBar";
import Theme from "../../components/Theme";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface LayoutProps {
  children: Readonly<React.ReactNode>;
  session: Session;
}

const layout = ({ children, session }: LayoutProps) => {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        {children}
      </MaxWidthWrapper>
    </SessionProvider>
  );
};

export default layout;
