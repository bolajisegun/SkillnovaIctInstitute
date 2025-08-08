import React from "react";

type ProgressBarProps = {
  value: number;
  max?: number;
};

const ProgressBar = ({ value, max = 100 }: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 transition-all duration-300"
        style={{
          width: `${percentage}%`,
          backgroundColor: "#4A90E2",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
