import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Frame2() {
  const carousel = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const loop = gsap.context(() => {
      gsap.to(".loop", {
        xPercent: "-100", //往左50%
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, carousel);

    return () => loop.revert();
  }, []);
  return (
    <div
      className="font-mant overflow-hidden whitespace-nowrap bg-primary text-white text-[62px]"
      ref={carousel}
    >
      <ul className="loop flex">
        <li>
          <span> 為喵星人，護台灣！ </span>
          <span> 從喵的眼中，看見台灣 </span>
          <span> 喵的未來，人的希望 </span>
        </li>
        <li>
          <span> 為喵星人，護台灣！ </span>
          <span> 從喵的眼中，看見台灣 </span>
          <span> 喵的未來，人的希望 </span>
        </li>
      </ul>
    </div>
  );
}
