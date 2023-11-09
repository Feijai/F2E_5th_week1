import React from "react";
import image11 from "@/assets/image11.png";
import image14 from "@/assets/image14.png";
import TextButton from "../TextButton";

interface Frame5CardProps {
  color: string;
  bgColor: string;
  title: string;
  content: string;
  buttonText: string;
  img: string;
}

const Frame5Card: React.FC<Frame5CardProps> = ({
  color,
  bgColor,
  title,
  content,
  buttonText,
  img,
}) => {
  return (
    <div
      className={`bg-${color} rounded-[32px] px-[24px] py-[40px] xl:w-[648px] xl:px-[96px] xl:py-[96px] xl:p-b-[120px]`}
    >
      <div className="text-white leading-[57.92px] text-[40px] font-mant">
        {title}
      </div>
      <p className="text-white text-[20px] mt-[16px]">{content}</p>
      <div className="flex mt-[24px] justify-between items-center">
        <TextButton bgColor={bgColor} text={buttonText} />
        <img
          src={img}
          alt=""
          className="w-[135px] h-[126px] object-contain md:w-[128px] xl:w-auto xl:h-auto"
        />
      </div>
    </div>
  );
};

export default function Frame5() {
  return (
    <div className="py-[64px] px-[16px] grid grid-cols-1 gap-y-[24px] md:grid-cols-2 md:px-[32px] md:py-[60px] md:gap-[24px] xl:flex xl:justify-center">
      <Frame5Card
        color="primary"
        bgColor="white"
        title="小額支持喵喵"
        content="您的小筆捐款，是每隻毛孩未來的大大動力！"
        buttonText="小額捐款"
        img={image11}
      />
      <Frame5Card
        color="textPrimary"
        bgColor="white"
        title="民眾服務信箱"
        content="親愛的鄉親，每一位市民的意見都是我們社區前進的原動力"
        buttonText="填寫表單"
        img={image14}
      />
    </div>
  );
}
