import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center'>
      <div className='w-[1170px] mt-[4rem]'>
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            / <span>My Account</span>
          </div>
        <div className='w-[1170px] h-[560px] mt-[4rem] flex justify-between items-center'>
            <div className='w-[300px] shadow-lg px-4 h-[366px] flex flex-col items-center justify-center'>
                    <div className='w-[270px]  border-b-[1px] border-gray-600 flex flex-col'>
                        <div className='flex w-[135px] justify-center items-center h-[40px]'>
                            <div className='w-[40px] h-[40px]  rounded-full'>
                                <Image src="/static/contactphone.png" alt="" width={40} height={40} />
                            </div>
                            <p className='font-[500] text-[16px] ml-3'>Call To Us</p>
                        </div>
                        <p className='w-[270px] my-2'>We are available 24/7, 7 days a week.</p>
                        <p className='w-[270px] my-2'>Phone: +8801611112222</p>
                    </div>

                    <div className='w-[270px] mt-[1rem] flex flex-col'>
                        <div className='flex w-[155px] justify-center items-center h-[40px]'>
                            <div className='w-[40px] h-[40px]  rounded-full'>
                                <Image src="/static/Envolop.png" alt="call-to-us" width={40} height={40} />
                            </div>
                            <p className='font-[500] text-[16px] ml-3'>Write To Us</p>
                        </div>
                        <p className='w-[270px] my-2'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='w-[270px] my-2'>Emails: customer@exclusive.com</p>
                        <p className='w-[270px] my-2'>Emails: support@exclusive.com</p>
                    </div>
            </div>
            <div className='w-[750px] h-[377px] shadow-lg px-4 flex flex-col justify-start'>
                <div className='w-full h-[50px] flex justify-between'>
                    <input type="text" placeholder='your Name' className='w-[235px] h-full bg-gray-200 px-2 rounded-md'/>
                    <input type="text" placeholder='your Email' className='w-[235px] h-full bg-gray-200 px-2 rounded-md'/>
                    <input type="text" placeholder='your Phone' className='w-[235px] h-full bg-gray-200 px-2 rounded-md'/>
                </div>
                <input type="text" placeholder='your message...' className='w-full mt-[2rem] px-2 pb-[10rem] bg-gray-200 rounded-md'/>

                <button className='w-[150px] h-[50px] mt-[2rem] bg-red-600 text-white font-[500] rounded-md px-5'>Send Message</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default page
