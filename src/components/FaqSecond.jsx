import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FaqImage from "../assets/images/png/Faq-image.png";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className={`${
        id === open ? "rotate-180" : ""
      } w-7 sm:h-9 h-7 sm:w-9 transition-transform`}
    >
      <path
        d="M10.8912 12.5091C10.2387 11.8341 9.15875 11.8341 8.50625 12.4866C7.83125 13.1616 7.83125 14.2191 8.50625 14.8716L16.3137 22.7241C16.6287 23.0391 17.0562 23.2191 17.5062 23.2191C17.9562 23.2191 18.3837 23.0391 18.6987 22.7241L26.5062 14.8716C26.8437 14.5566 27.0012 14.1291 27.0012 13.7016C27.0012 13.2516 26.8437 12.8241 26.5062 12.4866C25.8312 11.8341 24.7737 11.8341 24.1212 12.5091L17.5062 19.1466L10.8912 12.5091Z"
        fill="#3C278D"
      />
    </svg>
  );
}

export function FaqSecond() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 lg:py-16 md:py-14 py-12">
      <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 gap-6">
        <div className="lg:w-2/4">
          <h1 className="font-Lato text-light-blackE mb-3  sm:mb-4 font-bold sm:text-[40px] text-[36px] sm:text-5xl lg:text-start text-center">
            FAQ
          </h1>
          <p className="font-Lato sm:text-[16px] text-[14px] text-light-black lg:text-start text-center mx-auto max-w-[788px] leading-[150%] pb-4  ">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
          <div className="max-w-[834px] mx-auto">
            <Accordion
              className="flex flex-col justify-between   px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden relative"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(1)} className="py-4 ">
                <h2 className="font-Inter text-light-blue  sm:text-[16px] text-[14px] md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start mb-0  ">
                  <span className="font-normal">1.</span> What is a
                  cryptocurrency token?
                </h2>
              </AccordionHeader>
              <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                <p className="font-Inter md:sm:text-[16px] text-[14px] font-normal text-light-black max-w-[786px]  leading-[150%] ">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh
                </p>
              </AccordionBody>
            </Accordion>

            <Accordion
              className="flex flex-col justify-between  px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(2)} className="py-4 ">
                <h2 className="font-Inter text-light-blue sm:text-[16px] text-[14px] md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start mb-0  ">
                  <span className="font-normal">2.</span> How can I buy
                  cryptocurrency tokens?
                </h2>
              </AccordionHeader>
              <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                <p className="font-Inter md:sm:text-[16px] text-[14px] font-normal text-light-black  max-w-[786px] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col justify-between  px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(3)} className="py-4 ">
                <h2 className="font-Inter text-light-blue sm:text-[16px] text-[14px] md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start mb-0  ">
                  <span className="font-normal">3.</span> What is a token
                  wallet, why do I need one?
                </h2>
              </AccordionHeader>
              <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                <p className="font-Inter md:sm:text-[16px] text-[14px] font-normal text-light-black max-w-[786px] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh
                </p>
              </AccordionBody>
            </Accordion>

            <Accordion
              className="flex flex-col justify-between  px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)} className="py-4 ">
                <h2 className="font-Inter text-light-blue sm:text-[16px] text-[14px] md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start mb-0  ">
                  <span className="font-normal">4.</span> Are cryptocurrency
                  tokens secure?
                </h2>
              </AccordionHeader>
              <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                <p className="font-Inter md:sm:text-[16px] text-[14px] font-normal text-light-black max-w-[786px] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion
              className="flex flex-col justify-between  px-4 md:px-6 border rounded-[12px] border-light-blue my-4 overflow-hidden"
              open={open === 5}
              icon={<Icon id={5} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(5)} className="py-4 ">
                <h2 className="font-Inter text-light-blue sm:text-[16px] text-[14px] md:text-xl font-semibold leading-[140%] md:leading-[150%] text-start mb-0  ">
                  <span className="font-normal">5.</span> What is a token
                  wallet, and why do I need one?
                </h2>
              </AccordionHeader>
              <AccordionBody className=" border-t-[1px] border-light-blue border-solid pt-3 pb-4">
                <p className="font-Inter md:sm:text-[16px] text-[14px] font-normal text-light-black max-w-[786px] leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh lectus risus ornare ullamcorper fames. Cursus libero
                  nec facilisis risus malesuada arcu cum. Gravida massa
                  scelerisque sociis nulla diam nisl ligula.bh
                </p>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="lg:w-6/12">
          <img
            className="w-full  xl:max-w-[570px] xl:max-h-[594px] rounded-[20px]"
            src={FaqImage}
            alt="FaqImage"
          />
        </div>
      </div>
    </div>
  );
}

export default FaqSecond;
