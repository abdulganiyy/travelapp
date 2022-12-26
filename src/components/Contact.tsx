import React from "react";
import Container from "./Container";

import EllipseTop from "../images/ellipse-top.png";
import EllipseBottom from "../images/ellipse-bottom.png";
import Send from "../images/send-outline.png";
import EmailIcon from "../images/emailicon.png";
import Squares from "../images/squares.png";

const Contact = () => {
  return (
    <Container width={1160}>
      <div className="px-4 md:px-0 z-[2] relative my-[124px] h-[407px] bg-[#DFD7F9] rounded-[20px] rounded-tl-[50px] md:rounded-tl-[129px] pt-[79px]">
        <img
          className="hidden md:block absolute top-0 right-0 z-[-1]"
          src={EllipseTop}
          alt="ellipse-top"
        />
        <img
          className="hidden md:block absolute bottom-0 left-0 z-[-1]"
          src={EllipseBottom}
          alt="ellipse-top"
        />
        <img
          className="hidden md:block absolute top-0 right-0 -translate-y-1/3 translate-x-1/3"
          src={Send}
          alt="kite"
        />
        <img
          className="hidden md:block absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 z-[-10]"
          src={Squares}
          alt="squares"
        />
        <h2 className="font-poppins text-[#5E6282] font-semibold text-[20px] md:text-[33px] leading-[34px] md:leading-[54px] max-w-[859px] mx-auto pb-[74px]">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h2>
        <div className="flex justify-center gap-x-[24px]">
          <div className="px-[34px] flex gap-x-[14px]  max-w-[421px] bg-white rounded-[10px]">
            <img className="self-center" src={EmailIcon} alt="email-icon" />
            <input
              className="h-full w-full outline-0"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <button className="bg-[#FF946D] w-[180px] h-[68px] flex justify-center items-center font-semibold text-white text-[17px] leading-[23px] rounded-[10px]">
            Subscribe
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
