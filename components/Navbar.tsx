import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useEffect } from "react";
import Head from "next/head";

function Navbar() {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  });

  const [{ data, fetching }] = useMeQuery({
    pause: isServer,
  });

  const [, logout] = useLogoutMutation();
  const [toggle, setToggle] = useState(false);

  let userLinks = null;

  // fetching data
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    userLinks = (
      <>
        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          <Link href="/login" suppressHydrationWarning>
            تسجيل الدخول
          </Link>
        </li>
        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          <Link href="/add">اضف ترحيلك</Link>
        </li>
      </>
    );

    // user logged in
  } else {
    userLinks = (
      <>
        <div>{data.me.email}</div>
        <div
          className="hover:text-[#555] hover:cursor-pointer transition-all duration-200"
          onClick={() => {
            logout({});
          }}
        >
          تسجيل الخروج
        </div>
        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
          {data.me.post ? (
            <Link href={`/post/${data.me.post.id}`} suppressHydrationWarning>
              ترحيلي
            </Link>
          ) : (
            <Link href="/add" suppressHydrationWarning>
              اضف ترحيلك
            </Link>
          )}
        </li>
      </>
    );
  }

  return (
    // ------------------------------------------ mobile --------------------------------------------------
    <div dir="ltr">
      <Head>
        <title>زميل - اعرض ترحيلك لي كل الجامعة بسهولة</title>
        <meta
          name="description"
          content="منصة بتوصلك لي كل طلاب الجامعة بدون متابعين ولا ريتويت!"
        />

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemProp="name" content="زميل" />
        <meta
          itemProp="image"
          content="https://res.cloudinary.com/dqws5t0at/image/upload/v1674334249/ZamealCard_m58v8u.jpg"
        />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta
          property="og:title"
          content="زميل - اعرض ترحيلك لي كل الجامعة بسهولة"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqws5t0at/image/upload/v1674334249/ZamealCard_m58v8u.jpg"
        />
        <meta property="og:url" content="https://zameal.com" />
        <meta property="og:type" content="website" />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta
          name="twitter:title"
          content="زميل - اعرض ترحيلك لي كل الجامعة بسهولة"
        />
        <meta
          name="twitter:description"
          content=" زميل هي منصة بتوصل ترحيلك لي كل طلاب السنتر بدون متابعين او رتيويت ، مجاناً وبدون رسوم من الطلاب وللطلاب"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dqws5t0at/image/upload/v1674334249/ZamealCard_m58v8u.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
                <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                  <Link href="/search">بحث</Link>
                </li>
                {userLinks}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center h-16 md:h-24 border-b-[1px] border-b-[#bdbdbd25] transition-all bg-black ">
        <div className="flex justify-between w-full items-center mx-8">
          <a className="hover:cursor-pointer" href="https://zameal.com">
            Zameal
          </a>

          <div className="hidden md:flex">
            <ul className="flex text-md font-light gap-4">
              {userLinks}
              <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200">
                <Link href="/search">بحث</Link>
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
