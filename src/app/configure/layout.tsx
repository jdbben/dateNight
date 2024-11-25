import { getSession, SessionProvider } from "next-auth/react";

import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import NavBar from "../../components/NavBar";
import Theme from "../../components/Theme";
import { ReactNode } from "react";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();
  return (
    <SessionProvider session={session}>
      <NavBar />
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        {children}
      </MaxWidthWrapper>
    </SessionProvider>
  );
}
