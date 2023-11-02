import React from "react";
import Carousel from "../Carousel";
import TitleBlock from "../TitleBlock";

export default function index() {
  return (
    <div>
      <Carousel />
      <div className="py-[64px] px-[16px] md:px-[36px] bg-bgFooter text-center xl:py-[104px] ">
        <div className="rounded-3xl bg-white flex items-center justify-center flex-col xl:flex-row xl:w-[68.75%] xl:mx-auto xl:justify-between">
          <div className="px-[24px] py-[40px] flex flex-col xl:max-w-[648px] xl:px-[40px] xl:py-[64px] xl:w-[calc(50%-12px)]">
            <div className="text-center">
              <p className="px-3 py-2 bg-textPrimary rounded-lg text-white text-[16px] inline-block">
                ADVOCATE
              </p>
              <TitleBlock text={<>候選人主張</>} />
            </div>
            <div className="mt-8 text-textPrimary font-bold text-[24px] xl:text-[28px]">
              我堅信 ! 藉由推動更完善的
              <span className="text-primary">貓咪福利</span>
              和相關政策，更是間接地投資於
              <span className="text-primary">台灣的未來</span>。
            </div>
            <p className="text-textPrimary mt-[16px] text font-normal xl:mt-[18px]">
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
            </p>
          </div>
          <div className="rounded-b-3xl xl:rounded-b-none xl:rounded-r-3xl bg-[url('@/assets/image8.png')] h-[244.55px] md:h-[514px] w-full bg-cover bg-center bg-no-repeat xl:max-w-[648px] xl:w-[calc(50%-12px)]" />
        </div>
      </div>
    </div>
  );
}
