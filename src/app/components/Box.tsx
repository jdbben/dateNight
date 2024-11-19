import { text } from "../lib/const";
import TypeEffect from "./TypeEffect";

const Box = () => {
  return (
    <div className="flex h-screen  lg:items-center lg:justify-end  justify-center lg:pb-[20%] ">
      <div className="h-fit w-fit overflow-hidden border-2 border-black grid grid-columns-2 rounded-lg ">
        <div className="bg-black h-11 w-full flex items-center">
          <p className="text-white pl-3">More infos :</p>
        </div>
        <div className="bg-[#FFFFFF] inline-block relative pl-2 ">
          <span className="opacity-0 lg:whitespace-pre-wrap  text-xs lg:text-sm">
            {text.modes + text.features}
          </span>
          <TypeEffect
            text={text.modes + text.features}
            typingSpeed={10}
            classname="text-xs lg:text-sm absolute inset-0 pl-2 pt-2 dark:text-black "
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
