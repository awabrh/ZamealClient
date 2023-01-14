import Image from "next/image";
import React from "react";

function Tweets() {
  return (
    <div className="flex flex-col w-full justify-center items-center py-6 px-6 pt-32">
      <h3 className="font-light">بدل ما تعرض ترحيلك في تويتر</h3>
      <div className="border border-neutral-900 my-6">
        <Image src="/Untitled.png" height={167.6} width={320} />
      </div>
    </div>
  );
}

export default Tweets;
