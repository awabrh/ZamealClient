import React from "react";
import { getImage } from "../utils/getImage";

function FakeSearchItem() {
  const imgUrl = getImage("");
  return (
    <div className="flex flex-col justify-center items-center justify-self-center w-full border border-neutral-800 p-4 rounded-md">
      <img className="h-52 w-full object-cover rounded-lg" src={imgUrl} />
      <div className="w-full flex justify-between pt-3">
        <h6 className="font-light">منذ يومين</h6>
      </div>
      <div className="w-full font-light text-sm">
        <p>أبوبكر اسماعيل - هندسة - ميكانيكا - 017</p>
        <p>شارع الوادي - الواحة - ابروف - بيت المال</p>
      </div>
    </div>
  );
}

export default FakeSearchItem;
