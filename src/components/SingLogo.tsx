import React from "react";
import logo from "@/assets/logo.png";

interface SingLogoProps {
  useLogo: boolean;
  textSize: string;
  logoSize: string;
  textMarginLeft: string;
  numberSize?: string;
}

const SingLogo: React.FC<SingLogoProps> = ({
  useLogo = true,
  textSize,
  logoSize,
  textMarginLeft = "2",
  numberSize = "8",
}) => {
  React.useLayoutEffect(() => {}, []);
  return (
    <div className="flex">
      {useLogo ? (
        <img src={logo} alt="" className={`h-${logoSize}`} />
      ) : (
        <div
          className={`w-${numberSize} h-${numberSize} text-center bg-gradient-to-r from-linerStart to-linerEnd text-white rounded-full flex items-center justify-center`}
        >
          <span className={`text-${textSize} `}>3</span>
        </div>
      )}
      <h2
        className={`ml-${textMarginLeft} text-${textSize} font-bold text-primary`}
      >
        喵立翰 Miao Li-Han
      </h2>
    </div>
  );
};

export default SingLogo;