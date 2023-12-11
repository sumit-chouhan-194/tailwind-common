import React, { useState } from "react";

const FormForth = () => {
     const [typicalForm, setTypicalForm] = useState({
       name: "",
       email: "",
       message: "",
       number: "",
     });
     const [error, setError] = useState(false);
     const regex =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     const OnsubmitHandler = (e) => {
       e.preventDefault();
       setError(true);
       if (
         typicalForm.name !== "" &&
         typicalForm.email !== "" &&
         typicalForm.message !== "" &&
         typicalForm.number !== "" &&
         regex.test(typicalForm.email)
       ) {
         setError(false);
         setTypicalForm({
           name: "",
           email: "",
           message: "",
           number: "",
         });
       }
     };
    return (
      <>
        <div className="max-w-[652px] mx-auto px-6 py-[92px]">
          <div className="flex justify-center items-center">
            <p className="text-black text-center max-w-[439px] sm:text-[40px] text-[36px] font-Inter font-medium leading-[120%]">
              Love to hear from you, Get in touch
            </p>
          </div>
          <form
            onSubmit={(e) => OnsubmitHandler(e)}
            className="flex justify-center flex-col"
          >
            <div className="flex justify-center sm:flex-row flex-col sm:gap-6 gap-3 pt-[61px]">
              <div className="sm:w-1/2 w-full relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-5 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-[157%] rounded-xl"
                  onChange={(e) =>
                    setTypicalForm({ ...typicalForm, name: e.target.value })
                  }
                  value={typicalForm.name}
                />
                <p className="requiredHeight mb-2">
                  {error && typicalForm.name === "" ? (
                    <p className="absolute bottom-[-30%] left-0 text-red-600 font-Inter font-medium leading-[157%] sm:text-[16px] text-[14px]">
                      Name is required
                    </p>
                  ) : (
                    typicalForm !== ""
                  )}
                </p>
              </div>
              <div className="sm:w-1/2 w-full relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-[#00000070] border border-[#8F8F8F] w-full px-5 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-[157%] rounded-xl"
                  onChange={(e) =>
                    setTypicalForm({
                      ...typicalForm,
                      email: e.target.value,
                    })
                  }
                  value={typicalForm.email}
                />
                <p className="">
                  {error &&
                  typicalForm.email ===
                    "text-black font-Inter font-medium leading-[157%] sm:text-[16px] text-[14px]" ? (
                    "Email is required"
                  ) : error && regex.test(typicalForm.email) === false ? (
                    <p className="absolute bottom-[-30%] left-0 text-red-600 font-Inter font-medium leading-[157%] sm:text-[16px] text-[14px]">
                      Email is required
                    </p>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div className="w-full pt-4 relative">
              <textarea
                placeholder="Message"
                className="outline-[#00000070] border border-[#8F8F8F] w-full px-5 py-3 font-inter text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-[157%] rounded-xl h-[107px]"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, message: e.target.value })
                }
                value={typicalForm.message}
              />
              <p className="requiredHeight mb-1 text-danger font-medium text-end">
                {error && typicalForm.message === "" ? (
                  <p className="absolute bottom-[-30%] left-0 text-red-600 font-Inter font-medium leading-[157%] sm:text-[16px] text-[14px]">
                    Text is required
                  </p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
            <div className="w-full pt-4 relative">
              <div className="flex justify-between items-center border border-[#8F8F8F] rounded-xl">
                <input
                  type="number"
                  placeholder="2990-8928-78"
                  className="outline-[#00000070] w-full px-5 py-3 font-inter rounded-xl text-[#8F8F8F] sm:text-[16px] text-[14px] font-normal leading-[157%]"
                  onChange={(e) =>
                    setTypicalForm({ ...typicalForm, number: e.target.value })
                  }
                  value={typicalForm.number}
                />
                <button className="bg-blue h-[51px] w-[135px] flex justify-center items-center rounded-xl font-Inter sm:text-[16px] text-[14px] font-semibold leading-[157%] text-white hover:bg-white border-transparent hover:border-blue border-2 transition-all duration-300 hover:text-blue">
                  Submit
                </button>
              </div>
              <p className="requiredHeight mb-2 text-danger font-medium text-end">
                {error && typicalForm.number === "" ? (
                  <p className="absolute bottom-[-30%] left-0 text-red-600 font-Inter font-medium leading-[157%] sm:text-[16px] text-[14px]">
                    Number is required
                  </p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
          </form>
        </div>
      </>
    );
};

export default FormForth;
