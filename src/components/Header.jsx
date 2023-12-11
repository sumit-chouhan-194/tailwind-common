import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
    return () => {
      document.body.classList.remove("overflow_hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div>
        <nav className="bg-white">
          <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
            <div className="flex items-center justify-between py-[26px]">
              <div className="flex-shrink-0">
                <button className="bg-[#C5C2C2] h-[48px] text-blue w-[87px] flex justify-center items-center sm:text-[16px] text-[14px] leading-normal font-semibold font-inter">
                  Logo
                </button>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-baseline  gap-12">
                  <li>
                    <a
                      href="#"
                      className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                    >
                      TAB NAME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                    >
                      TAB NAME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                    >
                      TAB NAME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm ]"
                    >
                      TAB NAME
                    </a>
                  </li>
                </ul>
              </div>
              <button className="md:flex hidden rounded-xl w-[164px] h-[48px] justify-center items-center font-inter sm:text-[16px] text-[14px] leading-normal bg-blue border-2 transition-all duration-300 hover.text-blue font-semibold text-[#fff] hover:bg-white border-transparent hover:border-blue  hover:text-blue">
                Button
              </button>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center relative z-50 justify-center p-2 rounded-md text-black hover.text-white transition-opacity duration-500"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen ? "opacity-1" : "opacity-0"}
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
            <div className={`md:opacity-0 transition-all duration-500 fixed h-screen w-screen z-30 bg-red-300 top-0 ${isOpen ?" translate-x-0":"translate-x-[-100%]"}`} id="mobile-menu">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center h_mobile gap-4">
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                  >
                    TAB NAME
                  </a>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                  >
                    TAB NAME
                  </a>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                  >
                    TAB NAME
                  </a>
                </li>
                <li onClick={() => setIsOpen(!isOpen)}>
                  <a
                    href="#"
                    className="text-black relative after:content-['']  after:w-0 after:h-[3px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-[blue]  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full hover:after:left-0 after:left-[50%]  font-inter hover:text-blue font-normal leading-normal rounded-md text-[5vw] sm:text-[3vw] md:text-sm "
                  >
                    TAB NAME
                  </a>
                </li>
                <button className="lg:hidden flex rounded-xl w-[164px] h-[48px] justify-center items-center font-inter sm:text-[16px] text-[14px] leading-normal   border-transparent  border-2 transition-all duration-300 hover.text-blue bg-blue font-semibold text-[#fff] ">
                  Button
                </button>
              </ul>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
