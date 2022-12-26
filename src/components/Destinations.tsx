import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Container from "./Container";
import Destination from "./Destination";

import DestinationOne from "../images/destinationone.png";
import DestinationTwo from "../images/destinationtwo.png";
import DestinationThree from "../images/destinationthree.png";

import DecoreWave from "../images/decorewave.png";

const Destinations = () => {
  return (
    <div className="relative text-center mb-[166px] px-4 md:px-0">
      <img
        className="hidden md:block absolute z-[-1] top-[280px] right-[30px]"
        src={DecoreWave}
        alt="decorewave"
      />
      <SubTitle name="Top Selling" />
      <Title name="Top Destinations" />
      <Container width={1160}>
        <div className="flex flex-col md:flex-row gap-y-8 justify-between mt-[60px]">
          <Destination
            img={
              <img
                src={DestinationOne}
                className="h-full w-full"
                alt="destination-first"
              />
            }
            location="Rome, Italty"
            price="5,42"
            days={10}
          />
          <Destination
            img={
              <img
                src={DestinationTwo}
                className="h-full w-full"
                alt="destination-two"
              />
            }
            location="London, UK"
            price="4.2"
            days={12}
          />
          <Destination
            img={<img src={DestinationThree} alt="destination-three" />}
            location="Full Europe"
            price="15"
            days={28}
          />
        </div>
      </Container>
    </div>
  );
};

export default Destinations;
