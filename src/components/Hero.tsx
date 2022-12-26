import React from "react";
import Decoremain from "../images/Decoremain.png";
import Traveller from "../images/Traveller.png";
import Container from "./Container";
import Header from "./Header";

import Play from "../images/play.png";
import Tides from "../images/tides.png";
import FlightIcon from "../images/plane.png";

const Hero = () => {
  return (
    <div className="px-4 md:px-0 relative pt-[47px] h-[1018px] pb-[117px]">
      <div className="hidden md:block absolute right-0 top-0 bottom-0 left-0 z-[-3] h-full">
        <img className="w-full h-full" src={Decoremain} alt="Decore" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 top-[0] z-[-2] h-full pt-[105px]">
        <img className="w-full h-full" src={Traveller} alt="Traveller" />
      </div>
      <img
        className="hidden lg:block absolute top-[255px] left-[323px]"
        src={Tides}
        alt="tides"
      />
      <img
        className="hidden lg:block absolute top-[120px] right-[570px]"
        src={FlightIcon}
        alt="plane"
      />
      <img
        className="hidden lg:block absolute top-[250px] right-[0]"
        src={FlightIcon}
        alt="plane"
      />
      <Header />
      <Container width={1160}>
        <h3 className="font-poppins font-bold text-xl leading-[30px] uppercase text-left text-[#DF6951] mt-[65px] mt-[130px]">
          Best Destinations around the world
        </h3>
        <h1 className="max-w-[545px] not-italic tracking-[-0.04em] text-left font-serif font-bold text-[84px] leading-[89px] text-[#181E4B]">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="max-w-[477px] mt-[30px] text-base leading-[30px] font-medium font-poppins text-left text-[#5E6282]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex justify-start gap-x-11 mt-[34px]">
          <button className="w-[170px] h-[60px] font-sans font-medium text-lg leading-[26px] bg-[#F1A501] text-white rounded-[10px] shadow-[ 0px_20px_35px_rgba(241, 165, 1, 0.15)]">
            Find out more
          </button>
          <span className="flex items-center gap-x-[16px] gap-x-[21px] leading-[26px] text-[17px] cursor-pointer font-medium font-poppins text-[#686D77]">
            <button className="flex w-[52px] h-[52px] bg-[#DF6951] rounded-full flex justify-center items-center">
              <img src={Play} alt="play" />
            </button>
            Play Demo
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
