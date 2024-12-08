import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Header = () => {
  return (
    <>
      <div className="w-full h-[80px] flex justify-center items-center border-b-[1px] border-gray-500">
        <div className="w-[1170px] h-[38px] mt-3 flex justify-between items-center">
          <h1 className={`${inter} font-[700] text-[24px]`}>Exclusive</h1>
          <div className="w-[376px] h-full flex justify-between items-center">
            <Link href="/">
              <p className={`${poppine} text-[16px]`}>Home</p>
            </Link>
            <Link href={"/About"}><p className={`${poppine} text-[16px]`}>About</p></Link>
            <Link href={"/Contact"}><p className={`${poppine} text-[16px]`}>Contact</p></Link>
            <Link href={"/Signup"}>
              <p className={`${poppine} text-[16px]`}>Sign Up</p>
            </Link>
          </div>
          <div className="w-[347px] flex justify-between h-full items-center">
            <div className="w-[243px] bg-[#F5F5F5] h-full flex justify-between items-center">
              <p className={`${poppine} text-[12px] ml-4 text-gray-500`}>
                What are you Looking for?
              </p>
              <HiMagnifyingGlass className="text-[24px] mr-2" />
            </div>

            <Link href={"/WishList"}>
              <CiHeart className="text-[24px]" />
            </Link>
            <Link href={"/Cart"}>
              <MdOutlineShoppingCart className="text-[24px]" />
            </Link>
            <Link href={"/Account"}>
              <MdAccountCircle className="text-[24px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
