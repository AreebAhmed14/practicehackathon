import React from 'react'
import Image from 'next/image';
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <>
      <div className='w-full flex'>
        <div className='w-[1305px] h-[781px] mt-[4rem] flex justify-between items-center'>
            <div className='w-[805px] h-full'>
                <Image src={"/static/loginimage.png"} alt="" width={950} height={950} />
            </div>
            <div className='w-[370px]  flex flex-col mr-5 justify-between items-center'>
                <div>
                <h1 className={`${inter} text-[36px] font-[500]`}>Create an account</h1>
                <h1 className={`${inter} text-[16px] font-[400]`}>Enter your details below</h1>
                </div>

                <div className='w-[300px] my-5 text-gray-400 border-b-[2px] border-gray-400 h-[32px]'>Name</div>
                <div className='w-[300px] my-5 text-gray-400 border-b-[2px] border-gray-400 h-[32px]'>Email or Phone Number</div>
                <div className='w-[300px] my-5 text-gray-400 border-b-[2px] border-gray-400 h-[32px]'>Password</div>
                <div className='w-[300px] my-2 bg-[#DB4444] text-white font-[500] border-gray-400 h-[32px] flex justify-center items-center rounded-[5px] '>Create Account</div>
                <div className='w-[300px] my-2 flex justify-center items-center border-[2px] border-gray-400 h-[32px]'>Sign up with Google</div>
                <div className='w-[300px] my-2 flex text-gray-600 justify-center items-center h-[32px]'>Already have account? <Link href={"/Login"}><span className='ml-2 text-blue-600 font-[500] underline'>Log in</span></Link></div>


            </div>
        </div>
      </div>
    </>
  )
}

export default Page
