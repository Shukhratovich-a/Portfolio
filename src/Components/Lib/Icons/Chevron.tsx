import React from "react";

const Chevron: React.FC<{ left?: boolean; right?: boolean }> = ({
  left = false,
  right = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      style={{ transform: `rotate(${right ? 180 : left ? 0 : 0}deg)` }}
    >
      <path
        d="M19.586 26.414 10.171 17l9.415-9.414 2.828 2.828L15.829 17l6.585 6.586-2.828 2.828z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Chevron;
