import React from "react";

const TextBlock: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="rounded-2xl px-[16px] py-[12px] bg-textPrimary text-white text-[20px] h-fit">
      {text}
    </span>
  );
};

export default TextBlock;
