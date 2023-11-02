import React from "react";
import SingLogo from "../SingLogo";
import fb from "@/assets/icon/fb.png";
import ig from "@/assets/icon/ig.png";
import youtue from "@/assets/icon/youtue.png";
import LinkButton from "../LinkButton";

export default function Footer() {
  return (
    <div className="bg-bgFooter px-4 py-16 lg:flex lg:gap-4 lg:items-center lg:justify-center">
      <div className="lg:w-[35%]">
        <SingLogo
          useLogo={false}
          textSize="2xl"
          logoSize="8"
          textMarginLeft="2"
          padding={false}
        />
        <div className="flex w-40 justify-between mt-4">
          <LinkButton icon={fb} width="48" height="48" hasBorder />
          <LinkButton icon={ig} width="48" height="48" hasBorder />
          <LinkButton icon={youtue} width="48" height="48" hasBorder />
        </div>
        <div className="text-sm mt-4 text-textPrimary font-normal">
          © 2023 喵立翰 Miao Li-Han 版權所有
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:w-[35%]">
        <h4 className="text-2xl font-bold">競選總部</h4>
        <div className="mt-4 text-base font-normal">
          辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
          <br />
          電話：(02) 888-5678
          <br />
          電子郵件地址：meowoffice@linmeow.tw
        </div>
      </div>
    </div>
  );
}
