import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const Theader = () => {
  return (
    <>
      <div className='w-full h-[48px] bg-[#000000] flex justify-end items-center'>
            <div className='w-[860px] h-[24px] mr-[180px] flex justify-between items-center'>
                <p className={`${poppins} text-[14px] text-white`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className={`${poppins} text-[14px] font-[600] ml-2`}>ShopNow</span></p>

                <p className={`${poppins} font-[400] text-[14px] text-white flex items-center`}>English 
                    <RiArrowDropDownLine className='text-[24px]' />
                </p>
            </div>
      </div>
    </>
  )
}

export default Theader
