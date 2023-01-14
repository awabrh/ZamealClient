import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Tweets from "../components/Tweets";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import NeonSigns from "../components/NeonSigns";

function index() {
  return (
    <div className="bg-black text-white">
      <Parallax pages={3} className="">
        <ParallaxLayer offset={0} className="flex flex-col">
          <Navbar />
          <Hero />
          <Tweets />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0} className="">
          <div className="flex flex-col items-center justify-center">
            <NeonSigns />
            <h2 className="text-3xl text-center px-9 pt-52 text-neutral-500">
              زميل بوصلك لي كل طلاب السنتر وبشيل منك هم الاعلان تماماً
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3} className="">
          <div className="flex justify-center">
            <h2 className="text-3xl text-center px-9">
              وتضيع في زحمة السوشيال ميديا
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.2} className="">
          <div className="relative rotate-3">
            <Image
              src="/tweet1.png"
              height={60.747}
              width={250}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6} className="">
          <div className="flex justify-end -rotate-3">
            <Image
              src="/tweet6.png"
              height={81.032}
              width={200}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="">
          <div className="flex justify-center pr-10 rotate-3">
            <Image
              src="/tweet7.png"
              height={148.14}
              width={300}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} className="">
          <div className="rotate-3">
            <Image
              src="/tweet8.png"
              height={74.44}
              width={170}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="">
          <div className="flex justify-end mr-7 -rotate-3">
            <Image
              src="/tweet3.png"
              height={116.9}
              width={250}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.3} className="">
          <div className="flex justify-end mr-5 blur-[1px]">
            <Image
              src="/tweet2.png"
              height={110.25}
              width={650}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.7} className="">
          <div className="relative flex -rotate-3 blur-[1.5px] right-20">
            <Image
              src="/tweet5.png"
              height={200.89}
              width={500}
              className="border"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} className="">
          <div className="flex justify-end blur-[2px] rotate-12">
            <Image
              src="/tweet4.png"
              height={256}
              width={400}
              className="border"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default withUrqlClient(createUrqlClient, { ssr: true })(index);
