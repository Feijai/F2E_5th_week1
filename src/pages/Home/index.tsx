import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Frame1 from "@/components/Frame1";
import Frame2 from "@/components/Frame2";
import Frame3 from "@/components/Frame3";
import Frame4 from "@/components/Frame4";
import Frame5 from "@/components/Frame5";
import Frame6 from "@/components/Frame6";
import Loading from "@/components/Loading";

export default function Home() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);
  return (
    <>
      <Header />
      {display ? (
        <>
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
          <Frame6 />
        </>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
