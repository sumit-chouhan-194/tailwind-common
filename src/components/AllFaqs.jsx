import React from 'react'
import FaqSection from './FaqSection';
import FaqSecond from './FaqSecond';
import BackToTop from './BackToTop';

const AllFaqs = () => {
  return (
    <>
    <BackToTop/>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <FaqSection />
      <FaqSecond />
    </>
  );
}

export default AllFaqs;