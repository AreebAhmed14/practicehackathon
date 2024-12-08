import React from 'react'
import Image from 'next/image';
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const page = () => {
  return (
    <>
      <div className='w-full flex'>
        <div className='w-[1305px] h-[781px] mt-[4rem] flex justify-between items-center'>
            <div className='w-[805px] h-full'>
                <Image src={"/static/loginimage.png"} alt="" width={950} height={950} />
            </div>
            <div className='w-[370px]  flex flex-col mr-5 justify-between'>
                <div>
                <h1 className={`${inter} text-[36px] font-[500]`}>Log in to Exclusive</h1>
                <h1 className={`${inter} text-[16px] font-[400]`}>Enter your details below</h1>
                </div>

                
                <div className='w-[370px] my-5 mt-10 text-gray-400 border-b-[2px] border-gray-400 h-[32px]'>Email or Phone Number</div>
                <div className='w-[370px] my-5 text-gray-400 border-b-[2px] border-gray-400 h-[32px]'>Password</div>
                <div className='flex justify-between w-[370px] my-10'>
                <div className='w-[143px] my-2 bg-[#DB4444] text-white font-[500] border-gray-400 h-[32px] flex justify-center items-center rounded-[5px] '>Login</div>
                <div className='w-[141px] my-2 flex justify-center items-center h-[32px]'>Forget Password?</div>
                </div>
                


            </div>
        </div>
      </div>
    </>
  )
}

export default page
