import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Scroll = () => {
  return (
    <>
      <div className="w-full mt-[5rem] flex flex-col justify-center items-center ">
        <div className="w-[1170px] flex flex-col justify-between ">
          <div className="flex justify-between w-[100px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <div
              className={`text-[#DB4444] font-[600] text-[16px]`}
            >{`Today's`}</div>
          </div>
        </div>
        <div className="w-[1170px] flex justify-between mt-7">
          <div className="flex justify-between w-[600px]">
            <h1 className={`${inter} font-[600] text-[36px]`}>Flash Sales</h1>
            <div className="w-[302px] h-[50px] flex justify-between items-center">
              <div className="w-[46px] h-[50px] flex flex-col justify-between">
                <p className="font-[500] text-[12px]">Days</p>
                <p className="font-[700] text-[32px]">03</p>
              </div>
              <div className="w-[46px] h-[50px] flex flex-col justify-between">
                <p className="font-[500] text-[12px]">Hours</p>
                <p className="font-[700] text-[32px]">23</p>
              </div>
              <div className="w-[46px] h-[50px] flex flex-col justify-between">
                <p className="font-[500] text-[12px]">Minutes</p>
                <p className="font-[700] text-[32px]">19</p>
              </div>
              <div className="w-[46px] h-[50px] flex flex-col justify-between">
                <p className="font-[500] text-[12px]">Seconds</p>
                <p className="font-[700] text-[32px]">56</p>
              </div>
            </div>
          </div>
          <Image
            src={"/static/barraw.png"}
            alt=""
            width={950}
            height={650}
            className="w-[100px] h-[48px]"
          />
        </div>

        <div className="w-[1170px] flex justify-between mt-[4rem] ">
          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/igame.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              HAVIT HV-G92 Gamepad
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$120`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$160`}</p>
              </del>
            </div>
            <div className="w-[140px] h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(88)`}</p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/ikeyboard.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              AK-900 Wired Keyboard
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$960`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$1160`}</p>
              </del>
            </div>
            <div className="w-[140px] h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(75)`}</p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image src={"/static/itv.png"} alt="" width={270} height={250} />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              IPS LCD Gaming Monitor
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$370`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$400`}</p>
              </del>
            </div>
            <div className="w-[140px] h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(99)`}</p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/ichair.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              S-Series Comfort Chair{" "}
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$375`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$400`}</p>
              </del>
            </div>
            <div className="w-[140px] h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(99)`}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="text-white font-[500] text-[16px] px-[100px] rounded-[5px] my-[5rem]  py-[15px] bg-[#DB4444]">
          View All Products
        </button>
      </div>
    </>
  );
};

export default Scroll;
