import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Tweets from "../components/Tweets";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import NeonSigns from "../components/NeonSigns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

function index() {
  const router = useRouter();
  return (
    <div className="bg-black text-white">
      <Parallax pages={3.3} className="">
        <ParallaxLayer offset={0} className="flex flex-col">
          <Navbar />
          <Hero />
          <Tweets />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} className="">
          <Footer />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0} className="">
          <div className="flex flex-col items-center justify-center">
            <NeonSigns />
            <h2 className="text-center font-black text-3xl w-32 mt-40 text-2lg">
              بدون ريتويت بدون متابعين
            </h2>
            <h2 className="text-center mt-4 mx-9 text-neutral-700">
              زميل بوصلك لي كل طلاب السنتر وبشيل منك هم الاعلان تماماً
            </h2>
            <h2 className="pt-12">سجل الان او تصفح عروض التراحيل الموجودة</h2>
            <div className="w-full flex justify-center px-8">
              <div className="relative z-10 w-full mt-4 sm:w-32">
                <button
                  className="bg-black border shadow-black shadow-md border-primary w-full h-11 mt-4 pb-2 rounded-sm"
                  onClick={() => router.push("/add")}
                >
                  اضف ترحيلك
                </button>
                <button
                  className="bg-white text-black border shadow-black shadow-md border-primary w-full h-11 mt-4 pb-2 rounded-sm"
                  onClick={() => router.push("/search")}
                >
                  تصفح العروض
                </button>
                <div className="absolute -z-10 w-full h-11 top-4 rounded-sm shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3)] shadow-primary"></div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3} className="">
          <div className="flex justify-center">
            <h2 className="text-3xl font-black text-center px-9">
              وتضيع في زحمة السوشيال ميديا
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={1.2} className="">
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
