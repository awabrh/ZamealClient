import React from "react";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center h-5/6"
      dir="rtl"
    >
      <div className="flex flex-col w-full justify-center h-3/4 items-center">
        <div className="flex flex-col items-center pb-10">
          <h2 className="text-2xl">عاوز ترحيل؟</h2>
          <h1 className="font-bold text-5xl">ما تشيل هم!</h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col items-center">
            <SearchBar />
          </div>
        </div>
        <p className="my-8 text-sm">أو</p>
        <button className="border-primary bg-black border-2 px-5 pb-3 pt-2 rounded-md hover:bg-primary transition-all duration-300">
          أضيف ترحيلك
        </button>
      </div>
    </div>
  );
}

export default Hero;
