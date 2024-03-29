import { useLayoutEffect, useRef } from "react";
import SingLogo from "../SingLogo";
import TextBlock from "../TextBlock";
import LinkButton from "../LinkButton";
import fb from "@/assets/icon/fb.png";
import ig from "@/assets/icon/ig.png";
import youtue from "@/assets/icon/youtue.png";
import { gsap } from "gsap";

export default function Frame1() {
  const frame1Animate = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const loop = gsap.context(() => {
      gsap
        .timeline({})
        .to(".header", {
          opacity: 0,
          visibility: "invisible",
          duration: 0,
        })
        .to(".content", {
          opacity: 0,
          visibility: "invisible",
          duration: 0,
        })
        .to(".logo", {
          opacity: 0,
          visibility: "invisible",
          duration: 0,
        })
        .to(".header", {
          ease: "sine.in",
          opacity: 1,
          duration: 1,
        })
        .to(".content", {
          ease: "sine.in",
          opacity: 1,
          duration: 1,
        })
        .to(".logo", {
          ease: "sine.in",
          opacity: 1,
          duration: 0.5,
        });
    }, frame1Animate);

    return () => loop.revert();
  }, []);

  return (
    <div className="mt-[16px] px-[24px]" ref={frame1Animate}>
      <div className="flex items-center justify-center flex-col mt-[32px] mb-[16px]">
        <h1 className="header mb-[16px] hidden lg:block font-mant font-normal text-8xl bg-gradient-to-r from-linerStart to-linerEnd bg-clip-text text-transparent">
          台灣的明天 喵先鋪路
        </h1>
        <h1 className="mb-[16px] text-center lg:hidden font-mant font-normal text-[52px] bg-gradient-to-r from-linerStart to-linerEnd bg-clip-text text-transparent">
          台灣的明天
          <br />
          喵先鋪路
        </h1>
        <div className="content mt-[16px] contents md:flex md:items-center">
          <TextBlock text="2024 立委參選人" />
          <SingLogo
            useLogo={false}
            textSize="3xl"
            numberSize="10"
            textMarginLeft="4"
            shadow={true}
          />
        </div>
      </div>
      <div className="logo bg-[url('@/assets/image12.png')] h-[255px] bg-contain bg-center bg-no-repeat relative lg:h-[537px] ">
        <div className="md:hidden absolute w-[208px] px-[40px] py-[8px] flex items-center justify-between bg-white rounded-[16px] bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-0">
          <LinkButton icon={fb} width="32" height="32" />
          <LinkButton icon={ig} width="32" height="32" />
          <LinkButton icon={youtue} width="32" height="32" />
        </div>
      </div>
    </div>
  );
}
