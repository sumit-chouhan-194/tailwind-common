import React from 'react'
import RoadMap from './RoadMap'
import RoadmapTwo from './RoadmapTwo'
import BackToTop from './BackToTop'

const AllRoadmap = () => {
  return (
    <>
    <BackToTop/>
     <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <RoadMap/>
      <RoadmapTwo/>
    </>
  )
}

export default AllRoadmap