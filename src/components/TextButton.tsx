import React from "react";
import right_arr from "@/assets/icon/right_arr.png";

const TextButton: React.FC<{ bgColor: string; text: string }> = ({
  bgColor,
  text,
}) => {
  return (
    <button
      className={`bg-${bgColor} font-semibold rounded-[500px] px-[24px] py-[16px]  flex text-[16px] items-center`}
    >
      {text}
      <img src={right_arr} alt="" className="ml-[8px] w-[32px] h-[32px]" />
    </button>
  );
};

export default TextButton;
