"use client";
import Box from "./components/Box";
import Discreption from "./components/Discreption";
import ParticlesBackground from "./components/ParticlesBackground";

const page = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-3  ">
      <div className=" h-full w-full overflow-hidden">
        {" "}
        <Discreption />
      </div>
      <div className=" h-full w-full">
        <Box />
      </div>
      <ParticlesBackground />
    </div>
  );
};

export default page;
