import React from "react";
import fb from "@/assets/icon/fb.png";
import line from "@/assets/icon/line.png";
import youtue from "@/assets/icon/youtue.png";
import LinkButton from "../LinkButton";
import SingLogo from "../SingLogo";

export default function Header() {
  return (
    <div className="px-3.5 py-3.5 h-16 md:px-6 md:py-4 md:h-headerHeight">
      <div className="md:px-6 md:py-3 flex justify-between items-center">
        <SingLogo
          useLogo={true}
          textSize="xl"
          logoSize="7"
          textMarginLeft="2"
        />
        <div className="hidden lg:flex text-textPrimary text-lg">
          <div className="p-2">候選人主張</div>
          <div className="p-2 ml-4">最新活動</div>
          <div className="p-2 ml-4">政策議題</div>
          <div className="p-2 ml-4">小額捐款</div>
          <div className="p-2 ml-4">民眾服務信箱</div>
        </div>
        <div className="hidden md:flex md:justify-between md:items-center md:w-32">
          <LinkButton icon={fb} width="32" height="32" />
          <LinkButton icon={line} width="32" height="32" />
          <LinkButton icon={youtue} width="32" height="32" />
        </div>
      </div>
    </div>
  );
}
