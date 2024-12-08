import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='w-full  flex justify-center flex-col items-center'>
     <div className="w-[1170px] mt-[3rem] h-[56px] flex justify-between text-gray-500 items-center">
          <div>
            <Link href={"/"}>
              <span>Home </span>
            </Link>
            / <span>My Account</span>
          </div>
          
        </div> 


        <div className='w-[1170px] h-[650px] mt-[4rem] flex justify-between'>
          <div className='w-[300px] '>
            <div className='w-full flex flex-col '>
              <p className='font-[500] text-[16px] my-3'>Manage My Account</p>
              <p className='font-[400] text-[16px] ml-7 my-1 text-[#DB4444]'>My Profile</p>
              <p className='font-[400] text-[16px] ml-7 my-1 text-gray-500'>Address Book</p>
              <p className='font-[400] text-[16px] ml-7 my-1 text-gray-500'>My Payment Options</p>
            </div>
            <div className='w-full flex flex-col '>
              <p className='font-[500] text-[16px] my-3'>My Orders</p>
              <p className='font-[400] text-[16px] ml-7 my-1 text-gray-500'>My Returns</p>
              <p className='font-[400] text-[16px] ml-7 my-1 text-gray-500'>My Cancellations</p>
            </div>
            <div className='w-full flex flex-col '>
              <p className='font-[500] text-[16px] my-3'>My Wishlist</p>
            </div>
          </div>
          <div className='w-[870px] h-full  flex flex-col justify-between items-center'>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex flex-col justify-between w-[330px] h-full'>
                <p>First Name</p>
                <input type="text" placeholder='Mid' className='h-[50px] px-2 bg-gray-300'/>
              </div>
            <div className='flex flex-col justify-between w-[330px] h-full'>
                <p>Last Name</p>
                <input type="text" placeholder='Rimel' className='h-[50px] px-2 bg-gray-300'/>
              </div>
            </div>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex flex-col justify-between w-[330px] h-full'>
                <p>Email</p>
                <input type="text" placeholder='Mid11@gmail.com' className='h-[50px] px-2 bg-gray-300'/>
              </div>
            <div className='flex flex-col justify-between w-[330px] h-full'>
                <p>Address</p>
                <input type="text" placeholder='Kingsstone, unites state' className='h-[50px] px-2 bg-gray-300'/>
              </div>
            </div>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex flex-col justify-between w-[330px] h-full'>
                <p>Password Change</p>
                <input type="text" placeholder='Current Password' className='h-[50px] w-[710px] px-2 bg-gray-300'/>
              </div>
            
            </div>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex flex-col justify-between w-[330px] h-full'>
                <input type="text" placeholder='New Password' className='h-[50px] w-[710px] px-2 bg-gray-300'/>
              </div>
           
            
            </div>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex flex-col justify-between w-[330px] h-full'>
                <input type="text" placeholder='Confirm New Password' className='h-[50px] w-[710px] px-2 bg-gray-300'/>
              </div>
           
            
            </div>
            <div className='w-[710px] h-[82px] mt-10  flex justify-between'>
              <div className='flex justify-end items-center w-[710px] h-full'>
                <p >Cancel</p>
                <button className='px-4 bg-[#DB4444] text-white py-2 rounded-4 ml-4'>Save Changes</button>
              </div>
           
            
            </div>

          </div>
        </div>


        </div>
    </>
  )
}

export default page
