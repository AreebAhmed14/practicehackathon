import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <>
      
    <div className='w-full  flex justify-center flex-col items-center'>
      
     <div className="w-[1180px] mt-[3rem] h-[56px] flex justify-between text-gray-500 items-center">
     <div>
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            / <span>About us</span>
          </div>
     </div>

     <div className='w-[1170px] h-[610px] mt-10 flex justify-between items-center'>
        <div className='w-[520px] h-[336px] flex flex-col justify-between'>
            <p className='font-[600] text-[54px] p-2'>Our Story</p>
            <p className='font-[400] text-[16px] p-2'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className='font-[400] text-[16px] leading-[26px] p-2 mt-1'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='w-[837px] h-[610px]'>
            <Image src={"/static/about.jpg"} alt='' width={950} height={950} className='w-full h-full'/>
        </div>
     </div>

     <div className='w-[1170px] h-[230px]  mt-[4rem] flex justify-between'>
        <div className='w-[270px] h-full shadow-lg hover:bg-red-500 flex flex-col justify-center items-center'>
          <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
            <Image src={"/static/home.png"} alt='' width={350} height={950} />
          </div>
          <p className='font-[700] text-[32px] '>10.5k </p>
          <p className='font-[400] text-[16px] '>Sallers active our site</p>
        </div>

        <div className='w-[270px] h-full shadow-lg hover:bg-red-500 flex flex-col justify-center items-center'>
          <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
            <Image src={"/static/home.png"} alt='' width={350} height={950} className='w-full h-full'/>
          </div>
          <p className='font-[700] text-[32px] '>33k</p>
          <p className='font-[400] text-[16px] '>Sallers active our site</p>
        </div>

        <div className='w-[270px] h-full shadow-lg hover:bg-red-500 flex flex-col justify-center items-center'>
          <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
            <Image src={"/static/gift.png"} alt='' width={350} height={950} />
          </div>
          <p className='font-[700] text-[32px] '>45.5k</p>
          <p className='font-[400] text-[16px] '>Customer active in our site</p>
        </div>

        <div className='w-[270px] h-full shadow-lg hover:bg-red-500 flex flex-col justify-center items-center'>
          <div className='w-[80px] h-[80px] bg-gray-500 rounded-full'>
            <Image src={"/static/coin.png"} alt='' width={350} height={950} />
          </div>
          <p className='font-[700] text-[32px] '>25k </p>
          <p className='font-[400] text-[16px] '>Anual gross sale in our site</p>
        </div>
        
     </div>
     
        <div className='w-[1170px] h-[564px]  mt-[4rem] flex justify-between items-center'>
          <div className='w-[370px] h-[530px] flex flex-col items-center justify-between'>
            <div className='w-full h-[410px] '>
              <Image src={"/static/man1.png"} alt='' width={350} height={950} className='w-full h-full'/>
            </div>
            <div className='w-full flex flex-col justify-center mb-5'>
              <p className='font-[500] text-[32px]'>Tom Cruise</p>
              <p className='font-[400] text-[16px]'>Founder & Chairman</p>
            </div>
          </div>

          <div className='w-[370px] h-[530px] flex flex-col items-center justify-between'>
            <div className='w-full h-[410px] '>
              <Image src={"/static/man2.png"} alt='' width={350} height={950} className='w-full h-full'/>
            </div>
            <div className='w-full flex flex-col justify-center mb-5'>
              <p className='font-[500] text-[32px]'>Emma Watson</p>
              <p className='font-[400] text-[16px]'>Managing Director</p>
            </div>
          </div>

          <div className='w-[370px] h-[530px] flex flex-col items-center justify-between'>
            <div className='w-full h-[410px] '>
              <Image src={"/static/man3.png"} alt='' width={350} height={950} className='w-full h-full'/>
            </div>
            <div className='w-full flex flex-col justify-center mb-5'>
              <p className='font-[500] text-[32px]'>Will Smith</p>
              <p className='font-[400] text-[16px]'>Product Designer</p>
            </div>
          </div>
        </div>


     <div className='w-[945px] h-[161px] mt-[4rem] flex justify-between items-center'>
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

export default page
