import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center">
        <div className="w-[1170px] h-[400px] flex justify-between items-center">
          <div className="w-[217px] h-[344px] pr-5 border-r-[1px] border-gray-500">
            <ul className="h-full w-full flex flex-col justify-around">
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Woman’s Fashion`}</p>
                <IoIosArrowForward />
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Man’s Fashion`}</p>
                <IoIosArrowForward />
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Electronics`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Home & Lifestyle`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Home & Lifestyle`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Medicine`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Sports & Outdoor`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Sports & Outdoor`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Baby’s & Toys`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Groceries & Pets`}</p>
              </li>
              <li
                className={`flex justify-between items-center "${poppine} text-[16px] my-1 font-[400]`}
              >
                <p>{`Health & Beauty`}</p>
              </li>
            </ul>
          </div>
          <div className="w-[892px] h-[344px] bg-black flex justify-between">
            <div className="w-[396px] h-full flex flex-col justify-center">
              <div className="w-[190px] h-[50px] flex justify-around items-center  ml-[3rem]">
                <div className="w-[40px] h-[49px]">
                  <FaApple className="text-[32px] text-white w-full h-full" />
                </div>
                <p className={`${poppine} text-[16px] text-white font-[400]`}>
                  iPhone 14 Series
                </p>
              </div>
              <div className={`w-[294px] h-[120px] ml-[3rem] mt-[1rem] leading-[60px] ${inter} font-[600] text-[48px] text-white`}>
              Up to 10% off Voucher
              </div>

              <div className="flex justify-between mt-[1rem] items-center w-[110px] ml-[3rem]"><p className="text-white text-[16px]">Shop Now</p><FaArrowRight className="text-white "/></div>
            </div>
            
            <div className="w-[496px] h-full overflow-hidden">
              <Image
                src="/static/phone.jpg"
                alt="hero"
                width={496}
                height={344}
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
