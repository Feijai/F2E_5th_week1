import React, { ReactElement } from "react";
import TextBlock from "../TextBlock";
import TitleBlock from "../TitleBlock";
import image4 from "@/assets/image4.png";
import image6 from "@/assets/image6.png";
import image9 from "@/assets/image9.png";

const PolicyCard: React.FC<{ text: ReactElement; img: string }> = ({
  text,
  img,
}) => {
  return (
    <div>
      <div className="px-[16px] py-[16px] pt-0">
        <h4 className="font-bold text-[24px] leading-[36px]">{text}</h4>
      </div>
      <img src={img} alt="" className="rounded-[16px] max-h-[229px]" />
    </div>
  );
};

export default function Frame4() {
  return (
    <div className="px-[16px] py-[64px]">
      <div>
        <div className="flex justify-center items-center flex-col">
          <TextBlock text="POLICY ISSUES" />
          <TitleBlock text={<>政策議題</>} />
        </div>
        <div className="flex flex-col mt-[40px] gap-[64px]">
          <PolicyCard
            text={
              <>
                為毛孩子謀福利！
                <br />
                推動寵物醫療保障方案
              </>
            }
            img={image4}
          />
          <PolicyCard
            text={
              <>
                打造休閒天堂！
                <br />
                推廣寵物休閒與娛樂場所
              </>
            }
            img={image6}
          />
          <PolicyCard text={<>推廣寵物飼養教育，讓愛更加專業</>} img={image9} />
        </div>
      </div>
    </div>
  );
}
