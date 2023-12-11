import React from "react";

const FooterSecond = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="pt-[61px] pb-[42px] max-w-[536px] px-6 mx-auto">
        <div className="flex justify-center items-center">
          <button className="text-blue font-Inter sm:text-[16px] text-[14px] font-semibold leading-normal bg-[#D6D1E7] py-4 px-6">
            Logo
          </button>
        </div>
        <ul className="flex justify-between items-center sm:gap-5 pt-6">
          <li className="text-[#4D4D4D] font-Inter hover_li transition-all duration-300 font-semibold sm:text-[16px] text-[14px] leading-normal">
            <a href="#"> Home</a>
          </li>
          <li className="text-[#4D4D4D] font-Inter hover_li transition-all duration-300 font-semibold sm:text-[16px] text-[14px] leading-normal">
            <a href="#"> About</a>
          </li>
          <li className="text-[#4D4D4D] font-Inter hover_li transition-all duration-300 font-semibold sm:text-[16px] text-[14px] leading-normal">
            <a href="#">Community</a>
          </li>
          <li className="text-[#4D4D4D] font-Inter hover_li transition-all duration-300 font-semibold sm:text-[16px] text-[14px] leading-normal">
            <a href="#"> RoadMap</a>
          </li>
          <li className="text-[#4D4D4D] font-Inter hover_li transition-all duration-300 font-semibold sm:text-[16px] text-[14px] leading-normal">
            <a href="#">Faqs</a>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-blue"></div>
      <p className="pt-2 pb-4 text-[#4D4D4D] sm:sm:text-[16px] text-[14px]  font-normal leading-normal font-Inter text-center">
        © {year} Copyright company name. All Right Reserved.
      </p>
    </>
  );
};

export default FooterSecond;
