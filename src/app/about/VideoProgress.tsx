import React from "react";

export const VideoProgress: React.FC<{ value: number; max: number }> =
  function ({ value, max }) {
    return (
      <div className="bg-white/40 h-0.5 xl:h-1">
        <div
          style={{ width: `${(value * 100) / max}%` }}
          className="bg-white h-full"
        ></div>
      </div>
    );
  };
