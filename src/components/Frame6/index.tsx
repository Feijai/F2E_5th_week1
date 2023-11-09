import SingLogo from "../SingLogo";

export default function Frame6() {
  return (
    <div className="py-[64px]">
      <div className="flex items-center justify-center flex-col py-[40px]">
        <h2 className="hidden lg:block font-mant font-normal text-[64px] bg-gradient-to-r from-linerStart to-linerEnd bg-clip-text text-transparent">
          台灣的明天 喵先鋪路
        </h2>
        <h2 className="text-center lg:hidden font-mant font-normal text-[52px] bg-gradient-to-r from-linerStart to-linerEnd bg-clip-text text-transparent">
          台灣的明天
          <br />
          喵先鋪路
        </h2>
        <div className="mt-[24px] contents md:flex md:items-center xl:mt-[16px] xl:px-[16px] xl:py-[12px]">
          <SingLogo
            useLogo={false}
            textSize="3xl"
            numberSize="10"
            textMarginLeft="4"
            shadow={false}
            padding={false}
          />
        </div>
      </div>
    </div>
  );
}
