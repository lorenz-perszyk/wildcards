// I M P O R T S
import { FC } from "react";
import { imageData } from "../ts/data/data";

// C O M P O N E N T
type InfoProps = {
  index: number;
};

const Info: FC<InfoProps> = ({ index }) => {
  return (
    <div className="w-[110px] flex flex-col gap-4">
      <div className="text-left">
        <p>Lorenz Perszyk</p>
        <p>For {imageData[index].client}</p>
      </div>
      <div className="text-right">{imageData[index].date}</div>
      <button
        className="small relative flex items-center overflow-hidden px-4 py-2 rounded-full bg-white group
         after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-[#202020] after:transition-all after:duration-300 after:ease-out
         hover:after:h-full"
      >
        <p className="relative z-10 text-[#202020] font-[700] transition duration-300 group-hover:text-white">
          Have A Look
        </p>
      </button>
    </div>
  );
};

export { Info };