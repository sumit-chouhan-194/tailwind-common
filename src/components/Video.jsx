import React, { useState } from "react";
import sample_video from "../assets/videos/sample_video.mp4";
import thumbnail from "../assets/images/png/colorfull_img.png";
import play from "../assets/images/png/play_button.png";

const Video = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isVideoPlaying) {
      setVideoPlaying(true);
      const video = document.getElementById("videoElement");
      if (video) {
        video.play();
      }
    }else{
      setVideoPlaying(false)
    }
  };

  return (
    <>
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <div className="py-12">
        <div className="max-w-[1188px] mx-auto px-6 h-[680px]">
          <div className="flex justify-center items-centre h-full ">
            <div className=" w-full h-full">
              <div className="relative">
                <video
                  id="videoElement"
                  onClick={handleVideoClick}
                  controls
                  className="w-full h-full"
                  poster={thumbnail}
                >
                  <source src={sample_video} type="video/mp4" />
                </video>
                {!isVideoPlaying && (
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex items-center justify-center">
                    <img
                      src={play}
                      alt="play button"
                      className="sm:w-16 sm:h-16 w-10 h-10 object-contain cursor-pointer"
                      onClick={handleVideoClick}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
