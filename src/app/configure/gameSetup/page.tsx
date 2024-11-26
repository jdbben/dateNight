"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendDataToApi } from "@/services/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [relationshiptype, setRelationShipType] = useState("");
  const [questionType, setQuestionType] = useState("");
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    const func = async () => {
      if (session?.user) {
        await sendDataToApi(
          relationshiptype,
          questionType,
          session?.user.email as string
        );
        router.push("/configure/gameStart");
      }
    };
    return (
      <div
        className="h-fit w-fit p-11 rounded-lg border-2 dark:border-white
       border-black"
      >
        <div className="grid">
          <Select onValueChange={setRelationShipType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="relationship type" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectLabel>type</SelectLabel>
                <SelectItem value="distance">distance</SelectItem>
                <SelectItem value="same place">same place</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
          <Select onValueChange={setQuestionType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Question type" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectItem value="hot">Hot</SelectItem>
                <SelectItem value="casuale">casuale</SelectItem>
                <SelectItem value="introdusing">to know each other</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
          <Button onClick={func}>Next</Button>
        </div>
      </div>
    );
  } else {
    <SignBox />;
  }
};

const SignBox = () => {
  return (
    <div>
      <p>you need to login Signe up to able to continue</p>
    </div>
  );
};

export default page;
