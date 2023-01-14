import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-end h-full py-3">
      <div className="flex w-full justify-center">
        <a className="px-1">made by</a>
        <a
          href="https://twitter.com/awabrh"
          className="cursor-pointer text-primary"
        >
          awabrh
        </a>
      </div>
    </div>
  );
}

export default Footer;
