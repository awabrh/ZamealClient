import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
      shadow1: `${offset + 160},0  ${offset + 5},360  ${offset + 300},360 ${
        offset + 285
      },0`,
      shadow2: `${offset + 305},0  ${offset + 350},360  ${offset + 577},360 ${
        offset + 415
      },0 `,
    });
  });

  return (
    <div
      className=" border-blue-600 flex flex-col w-full justify-start h-full"
      dir="rtl"
    >
      <div className="flex flex-col pt-6 pb-2 w-full  border-red-600 justify-center items-center z-10">
        <div className="flex flex-col items-center">
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
            className="w-full max-w-full mt-8 h-full border border-blue-800"
            ref={ref}
          >
            <polygon points={shadows.shadow1} />
            <polygon points={shadows.shadow2} />
          </svg>
        </div>
        <object
          type="image/svg+xml"
          data="/bg.svg"
          className=" border-green-500 -z-20"
        >
          svg-animation
        </object>
      </div>
      <div className="border border-[#9EA5B3] w-full h-12" />
    </div>
  );
}

export default Hero;
