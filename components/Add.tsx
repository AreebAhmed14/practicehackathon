import React from 'react'
import Image from 'next/image'

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Add = () => {
  return (
    <>
    <div className='w-full flex justify-center items-center mt-[7rem]'>
          <div className="w-[1170px] h-[500px] bg-black flex justify-between items-center">
            <div className="w-[396px] h-full flex flex-col justify-center">
              <div className="w-[190px] h-[50px] flex justify-around items-center  ">
                
                <p className={`${poppine} text-[16px] text-[#47B486] font-[400]`}>
                  Categories
                </p>
              </div>
              <div className={`w-[445px] h-[120px] ml-[3rem] mt-[1rem] leading-[60px] ${inter} font-[600] text-[48px] text-white`}>
              Enhance Your Music Experience
              </div>

              <div className='w-[320px] h-[62px] ml-[3rem] my-8 flex justify-between items-center'>
                <div className='w-[62px] h-[62px] flex flex-col justify-center items-center rounded-full bg-white'>
                    <p className={`${poppine} font-[600] text-[16px]`}>23</p>
                    <p className={`${poppine} font-[400] text-[11px]`}>Hours</p>
                </div>
                <div className='w-[62px] h-[62px] flex flex-col justify-center items-center rounded-full bg-white'>
                    <p className={`${poppine} font-[600] text-[16px]`}>05</p>
                    <p className={`${poppine} font-[400] text-[11px]`}>Days</p>
                </div>
                <div className='w-[62px] h-[62px] flex flex-col justify-center items-center rounded-full bg-white'>
                    <p className={`${poppine} font-[600] text-[16px]`}>59</p>
                    <p className={`${poppine} font-[400] text-[11px]`}>Minutes</p>
                </div>
                <div className='w-[62px] h-[62px] flex flex-col justify-center items-center rounded-full bg-white'>
                    <p className={`${poppine} font-[600] text-[16px]`}>35</p>
                    <p className={`${poppine} font-[400] text-[11px]`}>seconds</p>
                </div>
              </div>

              <div className="flex justify-between mt-[1rem] items-center w-[110px] ml-[3rem]"><button className="text-white text-[12px] px-5 py-2 rounded-[5px] bg-[#47B486]">Shop Now</button></div>
            </div>
            
            <div className="w-[600px] h-[420px] mr-5 overflow-hidden">
              <Image
                src="/static/addmusic.png"
                alt="hero"
                width={496}
                height={344}
                className='w-full h-full'
                
              />
            </div>
          </div>
          </div>
    </>
  )
}

export default Add
