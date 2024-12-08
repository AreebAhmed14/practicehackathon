import React from 'react'
import Image from 'next/image';

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Month = () => {
  return (
    <>
        <div className="w-full mt-[5rem] flex flex-col justify-center items-center ">
        <div className="w-[1170px] flex flex-col justify-between ">
          <div className="flex justify-between w-[110px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <div
              className={`text-[#DB4444] font-[600] text-[16px]`}
            >{`This Month`}</div>
          </div>
        </div>
        <div className="w-[1170px] flex justify-between mt-7">
          <div className="flex justify-between w-[600px]">
            <h1 className={`${inter} font-[600] text-[36px]`}>Best Selling Products</h1>
           
          </div>
          <button className="text-white font-[500] text-[16px] px-[20px] rounded-[5px]   bg-[#DB4444]">
          View All
        </button>
        </div>

        <div className="w-[1170px] flex justify-between mt-[4rem] ">
          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/mjacket.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            The north coat
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$260`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$360`}</p>
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
                <p className="text-gray-500 font-[600] text-[14px]">{`(65)`}</p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/mbag.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            Gucci duffle bag
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
              <Image src={"/static/msong.png"} alt="" width={270} height={250} />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            RGB liquid CPU Cooler
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$160`}</p>
              <del>
                <p className="font-[500] text-[16px] text-gray-500">{`$170`}</p>
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
                <p className="text-gray-500 font-[600] text-[14px]">{`(65)`}</p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/mtable.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              {"Small BookSelf "}
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$360`}</p>
             
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
                <p className="text-gray-500 font-[600] text-[14px]">{`(65)`}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};



export default Month
