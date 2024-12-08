import React from "react";
import Image from "next/image";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="w-[1170px] mt-[3rem] h-[56px] flex justify-between text-gray-500 items-center">
          {`Wishlist (4)`}
          <button className="text-black h-full px-5 border-[1px] rounded-[7px] ">
            Move All To Bag
          </button>
        </div>



        <div className="w-[1170px] flex justify-between mt-[4rem] ">
          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/wbag.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            Gucci duffle bag
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$960`}</p>
              
        
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/wlaptop.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            ASUS FHD Gaming Laptop
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$960`}</p>
              
           
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image src={"/static/wmusic.png"} alt="" width={270} height={250} />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            RGB liquid CPU Cooler
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$1960`}</p>
              
            
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/wgame.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              {"HAVIT HV-G92 Gamepad"}
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$360`}</p>
             
            </div>

          </div>
        </div>
        
        
        <div className="w-[1170px] mt-[2rem] flex flex-col justify-between ">
          <div className="flex justify-between w-[120px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <div
              className={`text-[#DB4444] font-[600] text-[16px]`}
            >{`Just For You`}</div>
          </div>
        </div>


        <div className="w-[1170px] flex justify-between mt-[4rem] ">
          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/joycar.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            Kids Electric Car
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$960`}</p>
              
            <div className="w-[140px] ml-2 h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(88)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/shose.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              AK-900 Wired Keyboard
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$1160`}</p>
              
            <div className="w-[140px] ml-2 h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(35)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image src={"/static/game.png"} alt="" width={270} height={250} />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            GP11 Shooter USB Gamepad
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$660`}</p>
              
            <div className="w-[140px] ml-2 h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(55)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/jacket.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              {"Quilted Satin Jacket "}
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$375`}</p>
              
            <div className="w-[140px] ml-2 h-[20px] flex justify-start iems-center">
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/star.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(99)`}</p>
              </div>
            </div>
            </div>

          </div>
        </div>

        
      </div>
    </>
  );
};

export default page;
