import React from "react";
import FakeSearchItem from "./FakeSearchItem";

function NeonSigns() {
  return (
    <div className="relative">
      <FakeSearchItem />
      <object
        type="image/svg+xml"
        data="/redArrows.svg"
        className="absolute -top-52 -left-14"
      />
      <object
        type="image/svg+xml"
        data="/blueArrow.svg"
        className="absolute -scale-x-100 -right-[14rem] top-[18rem]"
      />
      <object
        type="image/svg+xml"
        data="/hereSign.svg"
        className="absolute -top-[18rem] right-20"
      />
      <object
        type="image/svg+xml"
        data="/yellowSign.svg"
        className="absolute top-[20rem] left-8 scale-75"
      />
      <object
        type="image/svg+xml"
        data="/greenArrow.svg"
        className="absolute -top-[12rem] -right-[9rem]"
      />
      <object
        type="image/svg+xml"
        data="/hand.svg"
        className="absolute top-[13rem] right-[10rem] scale-50 rotate-[-20deg]"
      />
    </div>
  );
}

export default NeonSigns;
