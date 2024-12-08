import React from "react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-[1170px] mt-[3rem] h-[56px] flex justify-between text-gray-500 items-center">
          <div>
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            / <span>Cart</span>
          </div>
        </div>
        <div className="w-[1170px] mt-[3rem] shadow-md rounded-[4px] h-[56px] flex justify-between text-gray-700 items-center">
          <div className="w-[400px] flex justify-around ">
            Product
          </div>
          <div className="w-[400px] flex justify-around ">Price</div>
          <div className="w-[400px] flex justify-around ">
            Quantity
          </div>
          <div className="w-[400px] flex justify-around ">
            Subtotal
          </div>
        </div>
        <div className="w-[1170px] mt-[3rem] shadow-md rounded-[4px] h-[56px] flex justify-between text-gray-700 items-center">
          <div className="w-[400px] items-center flex justify-center ">
            <span className="w-[54px] mr-2 h-[54px]">
                <Image src={"/static/ctv.png"} alt="" width={950} height={950}/>
            </span>
            LCD Monitor
          </div>
          <div className="w-[400px] flex justify-around ">$650</div>
          <div className="w-[400px] flex justify-around ">
            <div className="w-[72px] h-[44px] border-[1px] border-gray-700 rounded-[4px] flex justify-center items-center">
              01{" "}
              <span className="flex flex-col w-[16px] h-[32px] ml-2">
                <IoIosArrowUp />
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div className="w-[400px] flex justify-around ">
            $660
          </div>
        </div>



        <div className="w-[1170px] mt-[3rem] shadow-md rounded-[4px] h-[56px] flex justify-between text-gray-700 items-center">
          <div className="w-[400px] items-center flex justify-center ">
            <span className="w-[54px] mr-2 h-[54px]">
                <Image src={"/static/cartgame.png"} alt="" width={950} height={950}/>
            </span>
            Hi Gamepad
          </div>
          <div className="w-[400px] flex justify-around ">$550</div>
          <div className="w-[400px] flex justify-around ">
            <div className="w-[72px] h-[44px] border-[1px] border-gray-700 rounded-[4px] flex justify-center items-center">
              02
              <span className="flex flex-col w-[16px] h-[32px] ml-2">
                <IoIosArrowUp />
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div className="w-[400px] flex justify-around ">
            $1100
          </div>
        </div>


        <div className="w-[1170px] mt-[3rem]  h-[56px] flex justify-between items-center">
          <button className=" px-5 border-[2px] border-gray-500 rounded-[5px] py-3 flex justify-around ">
            Return to shop
          </button>
          
          <button className=" px-5 border-[2px] border-gray-500 rounded-[5px] py-3 flex justify-around ">
            Update Cart
          </button>
        </div>

        
      </div>
    </>
  );
};

export default page;
