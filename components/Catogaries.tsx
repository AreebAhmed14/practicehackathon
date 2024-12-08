import React from 'react'

import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Catogary = () => {
  return (
    <>
       <div className='w-full mt-[4rem] flex justify-center items-center flex-col border-b-[1px] border-gray-500 pb-20'>
       <div className="w-[1170px] flex flex-col justify-between">
          <div className="flex justify-between w-[100px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <div
              className={`text-[#DB4444] font-[600] text-[16px]`}
            >{`Categories`}</div>
          </div>
        </div>
        <div className="w-[1170px] flex justify-between mt-7">
          <div className="flex justify-between w-[600px]">
            <h1 className={`${inter} font-[600] text-[36px]`}>Browse By Category</h1>
          </div>
          <Image
            src={"/static/barraw.png"}
            alt=""
            width={950}
            height={650}
            className="w-[100px] h-[48px]"
          />
        </div>

        <div className='w-[1170px] h-[145px] mt-8 flex justify-between items-center'>
            <div className='w-[170px] h-full '>
                <Image src={'/static/cphone.png'} alt="" width={950} height={950}/>
            </div>
            <div className='w-[170px] h-full '>
                <Image src={'/static/ccom.png'} alt="" width={950} height={950}/>
            </div>
            <div className='w-[170px] h-full '>
                <Image src={'/static/cwatches.png'} alt="" width={950} height={950}/>
            </div>
            <div className='w-[170px] h-full '>
                <Image src={'/static/ccam.png'} alt="" width={950} height={950} className='w-full h-full'/>
            </div>
            <div className='w-[170px] h-full '>
                <Image src={'/static/chead.png'} alt="" width={950} height={950}/>
            </div>
            <div className='w-[170px] h-full '>
                <Image src={'/static/cgame.png'} alt="" width={950} height={950}/>
            </div>
        </div>
       </div>
    </>
  )
}

export default Catogary
