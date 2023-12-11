import React from 'react'
import FooterFirst from './FooterFirst';
import FooterSecond from './FooterSecond';

const AllFooter = () => {
  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <FooterFirst />
      <FooterSecond />
    </>
  );
}

export default AllFooter;