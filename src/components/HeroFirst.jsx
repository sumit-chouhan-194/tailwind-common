import React from "react";
import Header from "./Header";

const HeroFirst = () => {
  return (
    <>
      <div className="lg:min-h-screen flex flex-col justify-center mb-12 max-w-[1920px] mx-auto">
      <Header/>
        <div className="hero_first_bg lg:flex-grow flex md:py-48 py-24 lg:py-0 h-full items-center">
          <div className="max-w-[1140px] mx-auto xl:px-0 px-3 h-full">
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-[#1E1E1E] md:text-[58px] text-center sm:text-[40px] text-[30px] font-Inter font-bold md:leading-normal leading-[1.2]">
                Lorem ipsum Lorem ipsum
              </h2>
              <p className="pt-4 text-center max-w-[777px] text-[#4A4A4A] sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="text-white sm:mt-8 mt-6 w-[164px] h-[48px] hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-Inter font-semibold leading-normal sm:text-[16px] text-[14px] bg-blue flex justify-center items-center rounded-xl">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFirst;
