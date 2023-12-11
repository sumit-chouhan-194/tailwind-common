import React from "react";
import Header from "./Header";
import hero_top_left from "../assets/images/png/hero_top_left.png";
import hero_bottom_left from "../assets/images/png/hero_bottom_left.png";
import hero_top_right from "../assets/images/png/hero_top_right.png";
import hero_bottom_right from "../assets/images/png/hero_bottom_right.png";

const AbsoluteHeroSecond = () => {
  return (
    <>
      <div className="flex flex-col justify-center mb-12 max-w-[1920px] mx-auto">
        <Header />
        <div className="flex md:pt-[192px] sm:pt-[230px] md:pb-[259px] sm:pb-[230px] py-36 h-full items-center relative overflow-hidden">
          <div className="container max-w-[1140px] mx-auto xl:px-0 px-3">
            <div className="flex justify-center items-center">
              <div className="lg:w-[48%] w-[100%]">
                <h2 className="text-black text-center lg:text-[32px] text-[24px] font-Inter font-normal leading-normal">
                  A nice headline
                </h2>
                <h3 className="text-black text-center font-Inter font-semibold md:text-[58px] lg:text-[64px] text-[30px] md:leading-normal leading-[1.2]">
                  Goes here
                </h3>
                <p className="pt-2 text-[#4A4A4A] text-center sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum.
                </p>
                <div className="flex gap-5 justify-center items-center mt-8">
                  <button className="text-white w-[164px] h-[48px] hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] bg-blue flex justify-center items-center rounded-xl">
                    Button
                  </button>
                  <button className="hover:text-white w-[164px] h-[48px] bg-white hover:border-transparent border-blue border-2 transition-all duration-300 text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] hover:bg-blue flex justify-center items-center rounded-xl">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-[16px]">
            <img
              src={hero_top_left}
              alt="hero left top image"
              className="w-full xl:max-w-[393px] lg:max-w-[343px] sm:max-w-[250px] max-w-[143px]"
            />
          </div>
          <div className="absolute left-0 bottom-[10px]">
            <img
              src={hero_bottom_left}
              alt="hero left bottom image"
              className="w-full xl:max-w-[393px] lg:max-w-[343px] md:max-w-[293px] sm:max-w-[243px] max-w-[143px]"
            />
          </div>
          <div className="absolute right-0 top-0">
            <img
              src={hero_top_right}
              alt="hero left top image"
              className="w-full xl:max-w-[358px] lg:max-w-[308px] sm:max-w-[230px] max-w-[143px]"
            />
          </div>
          <div className="absolute xl:right-[34px] right-0 lg:bottom-[-6%] bottom-[10px]">
            <img
              src={hero_bottom_right}
              alt="hero left bottom image"
              className="w-full xl:max-w-[407px] lg:max-w-[357px] md:max-w-[307px] sm:max-w-[257px] max-w-[143px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsoluteHeroSecond;
