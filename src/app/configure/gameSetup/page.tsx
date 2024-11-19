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
import { useEffect, useState } from "react";

const page = () => {
  const [relationshiptype, setRelationShipType] = useState("");
  const [questionType, setQuestionType] = useState("");
  useEffect(() => {
    console.log(relationshiptype);
  }, [relationshiptype]);
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
              <SelectItem value="distence">distence</SelectItem>
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
              <SelectItem value="cajole">cajole</SelectItem>
              <SelectItem value="introdusing">to Know each others</SelectItem>
            </SelectContent>
          </SelectGroup>
        </Select>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default page;
