import React from "react";
interface LinkButtonProps {
  icon: string;
  width: string;
  height: string;
  hasBorder?: boolean;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  width,
  height,
  hasBorder,
}) => {
  return (
    <>
      {hasBorder ? (
        <button
          className={`w-${parseInt(width) / 4} h-${
            parseInt(height) / 4
          } bg-white rounded-full flex items-center justify-center`}
        >
          <img
            src={icon}
            alt=""
            className={`w-${parseInt(width) - 20 / 4} h-${
              parseInt(height) - 20 / 4
            }`}
          />
        </button>
      ) : (
        <button
          className={`w-${parseInt(width) / 4} h-${parseInt(height) / 4}`}
        >
          <img src={icon} alt="" />
        </button>
      )}
    </>
  );
};

export default LinkButton;
