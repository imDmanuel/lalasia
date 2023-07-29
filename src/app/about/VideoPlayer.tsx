import Image from "next/image";
import playIcon from "@/assets/images/play-icon.svg";
import { VideoProgress } from "./VideoProgress";

export const VideoPlayer: React.FC = function () {
  return (
    <>
      {/* TODO: CONVERT THE IMAGE ELEMENT BELOW INTO A VIDEO ELEMENT */}
      <div className="relative">
        <Image
          //   className="w-[327px] h-[200px] xl:w-[1240px]"
          src={"/assets/images/article-hero.png"}
          width={1240}
          height={550}
          alt=""
        />
        {/* TODO: IMPLEMENT COLOR OVERLAY WHEN HOVERING OVER VIDEO ELEMENT */}
        {/* TODO: IMPLEMENT VIDEO CONTROLS */}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-title/60 via-title/10"></div>
        {/* Play Icon */}
        <button className="xl:w-14 w-6 xl:p-5 p-2 rounded-full grid place-items-center aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-title/60 ">
          <Image src={playIcon} alt="Play" />
        </button>
        <div className="absolute w-full bottom-0 xl:px-12 px-4 pb-5 xl:pb-8">
          {/* Progress */}
          <div className="mx-auto">
            <VideoProgress value={50} max={100} />
          </div>
          {/* Elapsed time */}
          <div className="flex justify-between text-white text-[0.75rem] font-normal xl:font-medium xl:text-base mt-2 xl:mt-5">
            <div>01:40</div>
            <div>03:52</div>
          </div>
        </div>
      </div>
    </>
  );
};
