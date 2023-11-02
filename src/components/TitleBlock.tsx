import React, { ReactElement } from "react";

const TitleBlock: React.FC<{ text: ReactElement }> = ({ text }) => {
  return (
    <h2 className="text-[52px] leading-[75px] font-mant bg-gradient-to-r from-linerStart to-linerEnd bg-clip-text text-transparent lg:text-[64px]">
      {text}
    </h2>
  );
};

export default TitleBlock;
