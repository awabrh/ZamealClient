import React from "react";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col pt-20 w-full px-8 justify-start h-full items-center"
      dir="rtl"
    >
      <div className="flex z-0 flex-col w-full justify-center items-center">
        <h4 className="font-light text-xl">عاوز ترحيل؟</h4>
        <h4 className="font-black text-5xl">ما تشيل هم!</h4>
      </div>
      <p className="text-center z-0 pt-5 text-neutral-600">
        زميل هي منصة تمكن الطلاب من عرض سياراتهم كتراحيل لزملائهم الطلبة في كل
        انحاء مجمع الوسط.
      </p>
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
  );
}

export default Hero;
