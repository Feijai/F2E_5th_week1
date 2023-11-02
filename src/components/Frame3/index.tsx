import React from "react";
import TextBlock from "../TextBlock";
import TitleBlock from "../TitleBlock";
import top from "@/assets/events/top.png";

interface NewsCardProps {
  isCol?: boolean;
  img: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ isCol = false, img }) => {
  return (
    <>
      {isCol ? (
        <div>
          <img src={img} alt="" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default function Frame3() {
  return (
    <div className="px-[16px] py-[64px] flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <TextBlock text="LATEST EVENTS" />
        <TitleBlock text={<>最新活動</>} />
      </div>
      <div className="mt-[40px]">
        <NewsCard isCol={true} img={top} />
      </div>
    </div>
  );
}
