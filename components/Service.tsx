import React from 'react'
import Image from 'next/image';

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Service = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[945px] h-[161px] flex justify-between items-center'>
            <div className='w-[250px] h-[160px]  flex justify-between items-center flex-col'>
                <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
                    <Image src={'/static/scarr.png'} alt='' width={80} height={80} />
                </div>
                <div className=' flex justify-center items-center flex-col'>
                <p className='font-[600] text-[20px]'>FREE AND FAST DELIVERY</p>
                <p className='font-[600] text-[14px]'>Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className='w-[250px] h-[160px]  flex justify-between items-center flex-col'>
                <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
                    <Image src={'/static/shead.png'} alt='' width={80} height={80} />
                </div>
                <div className=' flex justify-center items-center flex-col'>
                <p className='font-[600] text-[20px]'>24/7 CUSTOMER SERVICE</p>
                <p className='font-[600] text-[14px]'>Friendly 24/7 customer support</p>
                </div>
            </div>
            <div className='w-[250px] h-[160px]  flex justify-between items-center flex-col'>
                <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
                    <Image src={'/static/stick.png'} alt='' width={80} height={80} />
                </div>
                <div className=' flex justify-center items-center flex-col'>
                <p className='font-[600] text-[20px]'>MONEY BACK GUARANTEE</p>
                <p className='font-[600] text-[14px]'>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service
