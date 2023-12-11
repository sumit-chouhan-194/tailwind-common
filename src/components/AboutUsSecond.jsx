import React from "react";
import color_img from "../assets/images/png/colorfull_img.png";

const AboutUsSecond = () => {
  return (
    <>
      <div className="lg:py-[72px] md:py-16 py-12">
        <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
          <div className="flex xl:items-end items-center lg:flex-row flex-col lg:gap-[50px] gap-6 mx-auto">
            <div className="lg:w-1/2 md:w-[80%] sm:w-[90%] flex justify-center">
              <img
                src={color_img}
                className="w-full"
                alt="about us section col image"
              />
            </div>
            <div className="lg:w-1/2  w-[100%] flex flex-col lg:items-start items-center">
              <h3 className="text-[#1E1E1E] sm:text-[48px] lg:text-start text-[36px] font-Inter font-semibold leading-normal">
                Lorem ipsum
              </h3>
              <p className="text-center pt-4 lg:max-w-[536px] lg:text-start text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas.
              </p>
              <p className="text-center pt-4 lg:max-w-[536px] lg:text-start text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white lg:mt-8 mt-6 hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] bg-blue py-3 px-14 rounded-xl">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSecond;
