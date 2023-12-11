import React, { Component } from "react";
import Slider from "react-slick";
import slider_img_1 from "../assets/images/png/slider_img_1.png";
import slider_img_2 from "../assets/images/png/slider_img_2.png";
import slider_img_3 from "../assets/images/png/slider_img_3.png";
import slider_img_4 from "../assets/images/png/slider_img_4.png";
import slider_img_5 from "../assets/images/png/slider_img_5.png";


class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <>
        <a
          href="/"
          className="bg-blue my-8 mx-3 h-[48px] w-[120px] flex justify-center items-center sm:text-[16px] text-[14px] rounded-xl text-white font-Inter font-semibold"
        >
        home
        </a>
        <div className="max-w-[1188px] mx-auto px-6 py-[109px]  ">
          <div className="flex justify-between lg:flex-row flex-col-reverse items-center gap-[52px]">
            <div className="sm:w-1/2 w-full">
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                infinite={true}
              >
                <div>
                  <img
                    src={slider_img_1}
                    alt="Image 1"
                    className="w-full max-w-[531px] mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={slider_img_2}
                    alt="Image 2"
                    className="w-full max-w-[531px] mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={slider_img_3}
                    alt="Image 3"
                    className="w-full max-w-[531px] mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={slider_img_4}
                    alt="Image 4"
                    className="w-full max-w-[531px] mx-auto"
                  />
                </div>
                <div>
                  <img
                    src={slider_img_5}
                    alt="Image 5"
                    className="w-full max-w-[531px] mx-auto"
                  />
                </div>
              </Slider>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-[#1E1E1E] font-Inter md:text-[48px] sm:text-[40px] text-[36px] font-semibold leading-normal">
                Lorem ipsum
              </h2>
              <p className="pt-4 font-Inter sm:text-[16px] text-[14px] font-normal leading-normal text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas.
              </p>
              <p className="pt-4 font-Inter sm:text-[16px] text-[14px] font-normal leading-normal text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem
                vitae sed. Proin urna ornare dolor mauris convallis varius nunc.
              </p>
              <button className="bg-blue h-[48px] mt-8 w-[164px] flex justify-center items-center rounded-xl font-Inter sm:text-[16px] text-[14px] font-semibold leading-[157%] text-white hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue">
                Button
              </button>
            </div>
          </div>
          <div className="pt-11">
            <div className="max-w-[1008px] mx-auto">
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
                infinite={true}
                autoplay={true}
              >
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_1}
                    alt="Image 1"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_2}
                    alt="Image 2"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_3}
                    alt="Image 3"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_4}
                    alt="Image 4"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_5}
                    alt="Image 5"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_1}
                    alt="Image 1"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_2}
                    alt="Image 2"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_3}
                    alt="Image 3"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_4}
                    alt="Image 4"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
                <div className="lg:px-0 sm:px-2 px-1">
                  <img
                    src={slider_img_5}
                    alt="Image 5"
                    className="w-full lg:max-w-[182px]"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomSlider;
