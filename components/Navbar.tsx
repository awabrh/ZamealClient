import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { useMeQuery } from "../generated/graphql";

function Navbar() {
  const [{ data, fetching }] = useMeQuery();
  const [toggle, setToggle] = useState(false);

  let userLinks = null;

  // fetching data
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    userLinks = (
      <>
        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          <Link href="/login">تسجيل الدخول</Link>
        </li>
        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          <Link href="/register">تسجيل حساب</Link>
        </li>
      </>
    );

    // user logged in
  } else {
    userLinks = (
      <>
        <div>{data.me.email}</div>
        <div className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          تسجيل الخروج
        </div>
      </>
    );
  }

  return (
    // ------------------------------------------ mobile --------------------------------------------------
    <div dir="ltr">
      {toggle ? (
        <div className="absolute w-screen h-screen">
          <div className="fixed w-full z-50 h-full bg-[#000000e2]  flex flex-row-reverse justify-end transition-all duration-100">
            <HiX
              className="mx-7 my-2 hover:cursor-pointer"
              size={50}
              onClick={() => {
                setToggle((prevState) => !prevState);
              }}
            />
            <div className="flex flex-col ml-24 justify-center items-center w-full h-full">
              <ul className="flex flex-col justify-around h-1/2 items-center">
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/">الرئيسية</Link>
                </li>
                {userLinks}
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/add"> اضف ترحيلك </Link>
                </li>
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/about">من نحن؟</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center h-16 md:h-24 border-b-[1px] border-b-[#bdbdbd25] transition-all bg-black ">
        <div className="flex justify-between w-full items-center mx-8">
          <div className="hover:cursor-pointer">Zameal</div>

          <div className="hidden md:flex">
            <ul className="flex text-md font-light gap-4">
              {userLinks}
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/add"> اضف ترحيلك </Link>
              </li>
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/about">من نحن؟</Link>
              </li>
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/">الرئيسية</Link>
              </li>
            </ul>
          </div>

          <div
            className="md:hidden text-2xl hover:cursor-pointer"
            onClick={() => {
              setToggle((prevState) => !prevState);
            }}
          >
            {toggle ? <></> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
