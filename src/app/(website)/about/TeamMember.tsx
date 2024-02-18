import { ITeamMember } from "@/types";
import Image from "next/image";
import React from "react";

export const TeamMember: React.FC<ITeamMember> = function ({
  name,
  designation,
  image,
}) {
  return (
    <div>
      <Image
        className="w-[327px] h-[299px] 2xl:w-[394px] 2xl:h-[360px] object-cover"
        src={image}
        alt=""
        width={394}
        height={360}
      />

      <div className="text-sm text-title font-bold 2xl:text-2xl mt-3 2xl:mt-7 mb-2">
        {name}
      </div>
      <div className="text-[0.75rem] text-paragraph font-medium 2xl:text-lg">
        {designation}
      </div>
    </div>
  );
};
