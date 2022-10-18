import React, { useState } from "react";
import {FaBars} from "react-icons/fa"
import {HiX} from "react-icons/hi"

function Navbar() {
    const [toggle, setToggle] = useState(false)

  return (
    // ------------------------------------------ mobile 
    <div dir="ltr">
    { toggle ?
        <div className="absolute w-screen h-screen">
            <div className="fixed w-full z-50 h-full bg-[#000000e2]  flex flex-row-reverse justify-end transition-all duration-100">
                <HiX className="mx-7 my-2 hover:cursor-pointer" size={50} onClick={() => {setToggle((prevState) => (!prevState))}}/>
                <div className="flex flex-col ml-24 justify-center items-center w-full h-full">
                    <ul className="flex flex-col justify-around h-1/2 items-center">
                        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200"><a >الرئيسية</a></li>
                        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200"><a>تسجيل الدخول</a></li>
                        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200"><a>اضف ترحيلك</a></li>
                        <li className="hover:text-[#555] hover:cursor-pointer transition-all duration-200"><a>من نحن ؟</a></li>
                    </ul>
                </div>
            </div>
        </div>
        : <></> 
    } 
        
        <div className="flex items-center h-16 md:h-24 border-b-[1px] border-b-[#bdbdbd25] transition-all bg-black ">
            <div className="flex justify-between w-full items-center mx-8">
                <div className="hover:cursor-pointer">Zameal</div>

                <div className="hidden md:flex">
                <ul className="flex text-md font-light">
                    <li className="mr-4 hover:text-[#555] hover:cursor-pointer"><a href="#"></a>الرئيسية</li>
                    <li className="mr-4 hover:text-[#555] hover:cursor-pointer"><a href="#">تسجيل الدخول</a></li>
                    <li className="mr-4 hover:text-[#555] hover:cursor-pointer"><a href="#">اضف ترحيلك</a></li>
                    <li className="hover:text-[#555] hover:cursor-pointer"><a href="#">من نحن ؟</a></li>
                </ul>
                </div>

                <div className="md:hidden text-2xl hover:cursor-pointer" onClick={() => {setToggle((prevState) => (!prevState))}}>
                    {toggle  
                        ? <></>
                        : <FaBars />
                }
                </div>

            </div>

        </div>
    </div>
  );
}

export default Navbar;
