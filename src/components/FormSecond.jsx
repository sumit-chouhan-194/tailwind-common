import React, { useState } from "react";

const FormSecond = () => {
  const [touchForm, setTouchForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      touchForm.name !== "" &&
      touchForm.email !== "" &&
      touchForm.contact !== "" &&
      touchForm.message !== "" &&
      regex.test(touchForm.email)
    ) {
      setError(false);
      setTouchForm({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div className="max-w-[1128px] mx-auto px-6 py-[72px]">
        <div className="flex justify-between  md:flex-row flex-col gap-12">
          <div className="md:w-1/2 w-full">
            <form
              onSubmit={(e) => OnsubmitHandler(e)}
              className="shadow-[5px_7px_19px_5px] shadow-[#ECECEC] bg-white sm:pt-[54px] pt-6 sm:pb-[46px] pb-6 sm:px-[34px] px-5 form_shadow rounded-xl"
            >
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-3 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-normal rounded-xl"
                  onChange={(e) =>
                    setTouchForm({ ...touchForm, name: e.target.value })
                  }
                  value={touchForm.name}
                />
                <p className="requiredHeight">
                  {error && touchForm.name === "" ? (
                    <p className=" absolute bottom-[-40%] text-red-600 left-0 font-Inter font-medium leading-[157%] text-[14px]">
                      Name is required
                    </p>
                  ) : (
                    touchForm !== ""
                  )}
                </p>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-3 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-normal rounded-xl mt-4"
                  onChange={(e) =>
                    setTouchForm({ ...touchForm, email: e.target.value })
                  }
                  value={touchForm.email}
                />
                <p className="requiredHeight">
                  {error && touchForm.name === "" ? (
                    <p className="text-red-600 absolute bottom-[-30%] left-0 font-Inter font-medium leading-[157%] text-[14px]">
                      Email is required
                    </p>
                  ) : (
                    touchForm !== ""
                  )}
                </p>
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Contact"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-3 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-normal rounded-xl mt-4"
                  onChange={(e) =>
                    setTouchForm({ ...touchForm, contact: e.target.value })
                  }
                  value={touchForm.contact}
                />
                <p className="requiredHeight">
                  {error && touchForm.name === "" ? (
                    <p className="absolute bottom-[-30%] left-0 font-Inter font-medium leading-[157%] text-red-600 text-[14px]">
                      Number is required
                    </p>
                  ) : (
                    touchForm !== ""
                  )}
                </p>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-3 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-normal rounded-xl mt-4 h-[90px]"
                  onChange={(e) =>
                    setTouchForm({ ...touchForm, message: e.target.value })
                  }
                  value={touchForm.message}
                />
                <p className="requiredHeight mb-1 text-danger font-medium text-end">
                  {error && touchForm.message === "" ? (
                    <p className="text-red-600 font-Inter font-medium leading-[157%] absolute bottom-[-20%] left-0 text-[14px]">
                      Text is required
                    </p>
                  ) : (
                    touchForm !== ""
                  )}
                </p>
              </div>
              <button className="mt-8 bg-blue h-[43px] w-[103px] flex justify-center items-center rounded-xl text-white font-Inter sm:text-[16px] text-[14px] hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-semibold leading-normal">
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-1/2 w-full md:pt-10">
            <div>
              <p className="text-black font-Inter sm:text-[36px] text-[32px] font-semibold leading-normal">
                Get In Touch
              </p>
              <p className="pt-4 font-Inter sm:text-[16px] text-[14px] max-w-[441px] font-normal leading-normal text-[#4D4D4D]">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum.
              </p>
              <button className="mt-[28px] bg-blue h-[48px] w-[146px] flex justify-center items-center rounded-xl text-white font-Inter sm:text-[16px] text-[14px]  hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue font-semibold leading-normal">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSecond;
