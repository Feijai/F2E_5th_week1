import React from "react";
import image11 from "@/assets/image11.png";
import TextButton from "../TextButton";

interface Frame5CardProps {
  color: string;
  bgColor: string;
  title: string;
  content: string;
  buttonText: string;
  img?: string;
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
    <div className={`bg-${color} rounded-[32px] px-[24px] py-[40px]`}>
      <div className="text-white leading-[57.92px] text-[40px] font-mant">
        {title}
      </div>
      <p className="text-white text-[20px] mt-[16px]">{content}</p>
      <div className="flex mt-[24px] justify-between items-center">
        <TextButton bgColor={bgColor} text={buttonText} />
        {img ? <img src={img} alt="" className="w-[102px] h-[105px]" /> : null}
      </div>
    </div>
  );
};

export default function Frame5() {
  return (
    <div className="py-[64px] px-[16px] flex flex-col gap-y-[24px]">
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
      />
    </div>
  );
}
