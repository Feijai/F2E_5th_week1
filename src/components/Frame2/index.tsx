import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Frame2() {
  const carousl = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const loop = gsap.context(() => {
      gsap.to(".loop", {
        xPercent: "-50", //往左50%
        ease: "none",
        duration: 10,
        repeat: -1,
      });
    }, []);

    return () => loop.revert();
  }, []);
  return (
    <div className="font-mant overflow-hidden" ref={carousl}>
      <p>為喵星人，護台灣！</p>
      <p>從喵的眼中，看見台灣</p>
      <p>喵的未來，人的希望</p>
      <p>為喵星人，護台灣！</p>
      <p>從喵的眼中，看見台灣</p>
      <p>喵的未來，人的希望</p>
    </div>
  );
}
