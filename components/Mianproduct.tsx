import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppine = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const MainProduct = () => {
  return (
    <>
      <div className="w-full mt-[5rem] flex flex-col justify-center items-center ">
        <div className="w-[1170px] flex flex-col justify-between ">
          <div className="flex justify-between w-[130px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <div
              className={`text-[#DB4444] font-[600] text-[16px]`}
            >{`Our Products`}</div>
          </div>
        </div>
        <div className="w-[1170px] flex justify-between mt-7">
          <div className="flex justify-between w-[600px]">
            <h1 className={`${inter} font-[600] text-[36px]`}>Explore Our Products</h1>
          </div>
          <Image
            src={"/static/barraw.png"}
            alt=""
            width={950}
            height={650}
            className="w-[100px] h-[48px]"
          />
        </div>

        <div className="w-[1170px] flex justify-between mt-[4rem] ">
          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/dogfood.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            Breed Dry Dog Food
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$100`}</p>
              
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
                <Image src={"/static/bstar.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[20px] h-[20px]">
                <Image src={"/static/bstar.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(35)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/cam.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            CANON EOS DSLR Camera
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$360`}</p>
              
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
                <Image src={"/static/bstar.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(95)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image src={"/static/laptop.png"} alt="" width={270} height={250} />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
            ASUS FHD Gaming Laptop
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$700`}</p>
              
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
                <p className="text-gray-500 font-[600] text-[14px]">{`(352)`}</p>
              </div>
            </div>
            </div>

          </div>

          <div className="w-[270px] h-[350px] flex flex-col justify-around">
            <div className="w-full h-[250px]">
              <Image
                src={"/static/makeup.png"}
                alt=""
                width={270}
                height={250}
              />
            </div>
            <h1 className={`${poppine} text-[16px] font-[500] `}>
              {"Curology Product Set"}
            </h1>
            <div className="flex justify-between w-[85px] h-[24px]">
              <p className="font-[500] text-[16px] text-[#DB4444]">{`$500`}</p>
             
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
                <Image src={"/static/bstar.png"} alt="" width={20} height={20} />
              </div>
              <div className="w-[32px] h-[20px] ml-4">
                <p className="text-gray-500 font-[600] text-[14px]">{`(145)`}</p>
              </div>
            </div>
            </div>

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



        <button className="text-white font-[500] text-[16px] px-[100px] rounded-[5px] my-[5rem]  py-[15px] bg-[#DB4444]">
          View All Products
        </button>
      </div>
    </>
  );
};

export default MainProduct;
