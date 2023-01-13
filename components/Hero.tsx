import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);
  const [shadows, setShadows] = useState({
    shadow1: "",
    shadow2: "",
  });

  useEffect(() => {
    setWidth(ref.current?.clientWidth || 0);
    console.log(width);
    const offset = width / 2 - 288;
    setShadows({
      shadow1: `${offset + 165},0  ${offset - 135},360  ${offset + 280},360 ${
        offset + 285
      },0`,
      shadow2: `${offset + 307},0  ${offset + 360},360  ${offset + 750},360 ${
        offset + 415
      },0 `,
    });
  });

  return (
    <div
      className=" border-blue-600 flex flex-col w-full justify-start h-full"
      dir="rtl"
    >
      <div className="relative flex flex-col pt-24 pb-2 w-full justify-center items-center">
        <div className="absolute overflow-clip pt-[3rem] mb-[3.6rem] flex justify-center items-center w-full h-[10rem]">
          <div className="border-2 mt-32 border-[#9EA5B3] h-72 w-72 rounded-full" />
        </div>
        <div className="flex flex-col items-center mb-3">
          <h2 className="text-2xl">عاوز ترحيل؟</h2>
          <h1 className="font-bold text-5xl">ما تشيل هم!</h1>
        </div>
      </div>

      <div className="relative border-fuchsia-700">
        <div className="flex absolute border-blue-600 z-10 w-full h-4/6 justify-center items-center">
          <div className="flex gap-4 justify-center">
            <button
              className="border-[#9EA5B3] border-2 bg-black h-12 px-5 pb-3 pt-2 rounded-md hover:bg-purple-900 transition-all duration-300"
              onClick={() => router.push("/search?query=")}
            >
              عرض الكل
            </button>

            <button
              className="border-[#9EA5B3] h-12 bg-black border-2 px-5 pb-3 pt-2 rounded-md hover:bg-primary transition-all duration-300"
              onClick={() => router.push("/add")}
            >
              أضف ترحيلك
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center absolute w-full h-full z-0 fill-black  border-emerald-700">
          <div className="flex w-full h-1/2 justify-center items-center" />
          <svg
            id="svgelem"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-full mt-8 h-full border-blue-800"
            ref={ref}
          >
            <polygon points={shadows.shadow1} />
            <polygon points={shadows.shadow2} />
          </svg>
        </div>
        <object
          type="image/svg+xml"
          data="/bg.svg"
          className="bg-[#c038ff3b] z-20"
        >
          svg-animation
        </object>
      </div>
      <div className="border border-[#9EA5B3] w-full h-12" />
    </div>
  );
}

export default Hero;
