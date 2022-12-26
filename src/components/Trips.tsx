import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Container from "./Container";
import DestinationStep from "./DestinationStep";

import IconOne from "../images/deststepone.png";
import IconTwo from "../images/deststeptwo.png";
import IconThree from "../images/deststepthree.png";

import View from "../images/ladyview.jpg";
import LeafIcon from "../images/leaf.png";
import DeskIcon from "../images/desk.png";
import SendIcon from "../images/send.png";
import BuildingIcon from "../images/building.png";
import LoveIcon from "../images/love.png";
import Mansion from "../images/mansion.png";

const Trips = () => {
  return (
    <Container width={1160}>
      <div className="px-4 md:px-0 flex flex-col md:flex-row gap-y-[50px] gap-x-[118px] mb-[209px]">
        <div className="grow text-left">
          <SubTitle name="Easy and Fast" />
          <div className="max-w-[511px]">
            <Title name="Book your next trip in 3 easy steps" />
          </div>
          <div className="flex flex-col gap-y-[48px] mt-[31px]">
            <DestinationStep
              icon={<img src={IconOne} alt="deststepone" />}
              heading="Choose Destination"
              subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
            <DestinationStep
              icon={<img src={IconTwo} alt="deststepone" />}
              heading="Choose Destination"
              subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
            <DestinationStep
              icon={<img src={IconThree} alt="deststepone" />}
              heading="Choose Destination"
              subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
            />
          </div>
        </div>
        <div className="grow">
          <div className="relative w-full md:w-[370px] h-[400px] px-[25px] py-[20px] shadow-2xl rounded-[26px]">
            <div className="hidden md:flex absolute flex gap-x-[11px] bg-white p-[20px] text-left shadow-2xl w-[263px] h-[139px] right-0 rounded-[18px] bottom-[52px] translate-x-1/4 shadow-2xl z-10">
              <img
                src={Mansion}
                alt="mansion"
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <span className="text-left font-poppins font-medium text-[14px] leading-[17px] text-[#84829A]">
                  Ongoing
                </span>
                <h5 className="mt-[6px] text-left font-poppins font-medium text-[18px] leading-[22px] text-[#080809]">
                  Trip To Greece
                </h5>
                <div className="mt-[14px] font-poppins font-medium text-[14px] leading-[17px]">
                  <span className="inline-block text-[#8A79DF] mr-[2px]">
                    40%
                  </span>
                  <span>completed</span>
                </div>
                <div className="mt-[10px] w-[166px] h-[5px] rounded-[30px] bg-[#F5F5F5]">
                  <div className="mt-[10px] w-[73px] h-[5px] rounded-[30px] bg-[#8A79DF]"></div>
                </div>
              </div>
            </div>
            <div className="mb-[26px] w-full h-[161px] overflow-hidden rounded-3xl">
              <img src={View} alt="ladyview" />
            </div>
            <div>
              <h5 className="text-left font-poppins font-medium text-[18px] leading-[22px] text-[#080809]">
                Trip To Greece
              </h5>
              <div className="mt-[13px] mb-[21px] flex gap-x-4 font-poppins font-medium text-[16px] leading-[19px] text-[#84829A]">
                <span>14-29 June</span>
                <span>by Robbin joseph</span>
              </div>
              <div className="flex gap-x-4 mb-[30px]">
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F5F5F5]">
                  <img src={LeafIcon} alt="leaf" />
                </span>
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F5F5F5]">
                  <img src={DeskIcon} alt="leaf" />
                </span>
                <span className="w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#F5F5F5]">
                  <img src={SendIcon} alt="leaf" />
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex grow gap-x-4">
                  <img src={BuildingIcon} alt="building" />
                  <span className="inline-block font-poppins font-medium text-[16px] leading-[19px] text-[#84829A]">
                    24 people going
                  </span>
                </div>
                <img src={LoveIcon} alt="love" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trips;
