import React from "react";

const Chevron: React.FC<{ left?: boolean; right?: boolean }> = ({ left = true, right = false }) => {
  return (
    <svg
      width="34"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${right ? 180 : left ? 0 : 0})`}
    >
      <path d="m21 9-8 8 8 8" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};

export default Chevron;
