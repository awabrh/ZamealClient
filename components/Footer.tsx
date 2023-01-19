import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-end py-3">
      <div className="flex w-full justify-center">
        <a className="px-1 text-xs text-neutral-600">made by</a>
        <a
          href="https://twitter.com/awabrh"
          className="cursor-pointer text-primary text-xs"
        >
          awabrh
        </a>
      </div>
    </div>
  );
}

export default Footer;
