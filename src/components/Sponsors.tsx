import React from "react";
import Container from "./Container";
import SponsorOne from "../images/axon.png";
import SponsorTwo from "../images/jetstar.png";
import SponsorThree from "../images/expedia.png";
import SponsorFour from "../images/qantas.png";
import SponsorFive from "../images/aiita.png";

const Sponsors = () => {
  return (
    <Container width={1160}>
      <div className="px-4 md:px-0 flex flex-col md:flex-row items-center justify-between md:gap-x-[50px]">
        <div className="hover:shadow-2xl hover:rounded-[10px] flex justify-center items-center w-[241px] h-[86px]">
          <img className="w-[162px]" src={SponsorOne} alt="axoin" />
        </div>
        <div className="hover:shadow-2xl hover:rounded-[10px] flex justify-center items-center w-[241px] h-[86px]">
          <img className="w-[162px]" src={SponsorTwo} alt="axoin" />
        </div>
        <div className="hover:shadow-2xl hover:rounded-[10px] flex justify-center items-center w-[241px] h-[86px]">
          <img className="w-[162px]" src={SponsorThree} alt="axoin" />
        </div>
        <div className="hover:shadow-2xl hover:rounded-[10px] flex justify-center items-center w-[241px] h-[86px]">
          <img className="w-[162px]" src={SponsorFour} alt="axoin" />
        </div>
        <div className="hover:shadow-2xl hover:rounded-[10px] flex justify-center items-center w-[241px] h-[86px]">
          <img className="w-[162px]" src={SponsorFive} alt="axoin" />
        </div>
      </div>
    </Container>
  );
};

export default Sponsors;
