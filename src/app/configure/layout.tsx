import { getSession, SessionProvider } from "next-auth/react";

import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import NavBar from "../../components/NavBar";
import Theme from "../../components/Theme";
import { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SessionProvider>
      <NavBar />
      <MaxWidthWrapper className="flex justify-center items-center h-screen">
        {children}
      </MaxWidthWrapper>
    </SessionProvider>
  );
};

export default layout;
