import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Container from "./Container";

import Testifier from "../images/testifier.png";

const Testimonials = () => {
  return (
    <Container width={1160}>
      <div className="px-4 md:px-0 flex flex-col md:flex-row gap-y-[100px] md:gap-x-[118px] mb-[138px]">
        <div className="text-left">
          <SubTitle name="Testimonials" />
          <div className="max-w-[511px]">
            <Title name="What people say about Us." />
          </div>
          <div className="mt-[82px] flex gap-x-[26px]">
            <span className="h-[26px] w-[26px] rounded-full bg-[#39425D]"></span>
            <span className="h-[26px] w-[26px] rounded-full bg-[#E5E5E5]"></span>
            <span className="h-[26px] w-[26px] rounded-full bg-[#E5E5E5]"></span>
          </div>
        </div>
        <div className="relative w-full md:w-[504px] h-[245px]">
          <div className="w-[14px] h-[72px] absolute top-[100px] text-[#3E2E4D] right-[-100px] flex flex-col justify-between">
            <span className="cursor-pointer inline-block  text-[#BCB7C2]">
              {"^"}
            </span>
            <span className="cursor-pointer inline-block rotate-180">
              {"^"}
            </span>
          </div>
          <div className="relative text-left w-full h-full bg-white shadow-2xl px-[34px] rounded-[10px] py-[28px]">
            <img
              className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[30px] md:w-[68px] rounded-full h-[30px] md:h-[68px] absolute"
              src={Testifier}
              alt="testifier"
            />
            <p className="mb-[34px] font-poppins text-[16px] leading-[32px] text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h5 className="mb-[5px] font-poppins font-semibold text-[18px] leading-[27px] text-[#5E6282]">
              Mike taylor
            </h5>
            <p className="font-poppins text-[14px] leading-[21px] text-[#5E6282]">
              Lahore, Pakistan
            </p>
          </div>
          <div className="z-[-2] top-0 left-0 absolute text-left w-full h-full translate-y-20 translate-x-10 border-2 border-[#F7F7F7] px-[34px] rounded-[10px] py-[28px]">
            <img
              className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[68px] rounded-full h-[68px] absolute"
              src={Testifier}
              alt="testifier"
            />
            <p className="mb-[34px] font-poppins text-[16px] leading-[32px] text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h5 className="mb-[5px] font-poppins font-semibold text-[18px] leading-[27px] text-[#5E6282]">
              Chris Thomas
            </h5>
            <p className="font-poppins text-[14px] leading-[21px] text-[#5E6282]">
              CEO of Red Button
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
