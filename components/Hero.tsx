import React from "react";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <div
      className=" border-blue-600 flex flex-col w-full justify-start h-full"
      dir="rtl"
    >
      <div className="flex flex-col py-6 w-full  border-red-600 justify-center items-center z-10">
        <div className="flex flex-col items-center pb-8">
          <h2 className="text-2xl">عاوز ترحيل؟</h2>
          <h1 className="font-bold text-5xl">ما تشيل هم!</h1>
        </div>
      </div>

      <div className="relative border-fuchsia-700">
        <div className="flex absolute w-full h-4/6 justify-center items-center">
          <div className="flex gap-4 justify-center">
            <button
              className="bg-primary h-12 px-5 pb-3 pt-2 rounded-md hover:bg-purple-900 transition-all duration-300"
              onClick={() => router.push("/search?query=")}
            >
              عرض الكل
            </button>

            <button
              className="border-primary h-12 bg-black border-2 px-5 pb-3 pt-2 rounded-md hover:bg-primary transition-all duration-300"
              onClick={() => router.push("/add")}
            >
              أضف ترحيلك
            </button>
          </div>
        </div>
        <object
          type="image/svg+xml"
          data="/bg.svg"
          className=" border-green-500"
        >
          svg-animation
        </object>
      </div>
      <div className="border border-[#9EA5B3] w-full h-12" />
    </div>
  );
}

export default Hero;
