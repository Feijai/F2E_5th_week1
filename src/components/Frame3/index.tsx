import React from "react";
import TextBlock from "../TextBlock";
import TitleBlock from "../TitleBlock";
import data from "./data";
import right_arr from "@/assets/icon/right_arr.png";
interface NewsCardProps {
  img: string;
  isCol: boolean;
  date: string;
  title: string;
  context: string;
}

const NewsCard: React.FC<NewsCardProps> = React.memo(
  ({ img, isCol, date, title, context }) => {
    return (
      <div className={`${!isCol && "flex h-[118px] xl:h-[134px]"}`}>
        <img
          src={img}
          alt=""
          className={`${
            isCol
              ? "w-full xl:max-h-[413px]"
              : "w-[109px] max-h-[118px] xl:w-[201px] xl:h-[134px]"
          }`}
        />
        <div
          className={`${
            isCol ? "mt-[16px]" : "ms-[16px]"
          } gap-[8px] flex flex-col`}
        >
          <div className="text-slate-400 text-[14px]">{date}</div>
          <h6
            className={`font-bold ${
              isCol ? "text-[20px]" : "text-[16px] leading-5"
            }`}
          >
            {title}
          </h6>
          <div
            className={`normal ${
              isCol ? "text-[16px]" : "line-clamp-2 text-[14px]"
            }`}
          >
            {context}
          </div>
        </div>
      </div>
    );
  }
);

export default function Frame3() {
  return (
    <div className="px-[16px] py-[64px] flex justify-center items-center flex-col">
      <div className="xl:py-[40px]">
        <div className="flex justify-center items-center flex-col">
          <TextBlock text="LATEST EVENTS" />
          <TitleBlock text={<>最新活動</>} />
        </div>
        <div className="mt-[40px] xl:flex xl:gap-[24px] xl:justify-center xl:items-start">
          <div className="xl:w-[33.75%]">
            <NewsCard {...data[0]} />
          </div>
          <div className="flex flex-col gap-[24px] mt-[24px] xl:mt-0 xl:w-[33.75%]">
            {data.slice(1).map((element) => (
              <NewsCard {...element} />
            ))}
            <button className="font-semibold self-start rounded-[500px] px-[24px] py-[16px] bg-slate-100 flex text-[16px] items-center">
              查看更多
              <img
                src={right_arr}
                alt=""
                className="ml-[8px] w-[32px] h-[32px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
