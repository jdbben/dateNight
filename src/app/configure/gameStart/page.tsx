"use client";
import Waiting from "@/components/Waiting";
import { Button } from "@/components/ui/button";
import { getRAndomQuetionfromApi } from "@/services/api";
import { getrandomquetion } from "@/utils/gameStarter";
import { useSession } from "next-auth/react";
import { useState } from "react";

const page = () => {
  const [quetion, setQuetion] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const getthequation = async () => {
      setLoading(true);
      try {
        const result = await getRAndomQuetionfromApi(
          session.user?.email as string
        );
        setQuetion(result);
      } catch (err) {
        throw new Error("cant get the quetion " + err);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };
    if (loading) {
      return <Waiting />;
    }
    return (
      <div className="grid grid-1 ">
        <div className="h-[50vh] w-screen  flex justify-center items-center pl-4 pr-4">
          <p className="text-bold text-2xl">{quetion}</p>
        </div>
        <div className="h-[50vh] w-screen flex justify-center">
          <Button
            className="pl-4 pr-4 absolute "
            onClick={async () => getthequation()}
          >
            New quetions
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>login first</p>
      </div>
    );
  }
};

export default page;
