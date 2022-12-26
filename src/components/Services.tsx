import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Service from "./Service";
import Container from "./Container";

import WeatherIcon from "../images/weather.png";
import FlightIcon from "../images/plane.png";
import EventIcon from "../images/events.png";
import CustomIcon from "../images/custom.png";

import ServicesLay from "../images/serviceslay.png";

const Services = () => {
  return (
    <div className="relative text-center my-[97px] px-4 md:px-0">
      <img
        className="hidden md:block absolute top-0 right-4"
        src={ServicesLay}
        alt="serviceslay"
      />
      <SubTitle name="CATEGORY" />
      <Title name="We Offer Best Services" />
      <Container width={1160}>
        <div className="pt-[68px] block md:flex justify-between">
          <Service
            img={<img src={WeatherIcon} alt="weathericon" />}
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <Service
            img={<img src={FlightIcon} alt="weathericon" />}
            active={true}
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
          <Service
            img={<img src={EventIcon} alt="weathericon" />}
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          />
          <Service
            img={<img src={CustomIcon} alt="weathericon" />}
            title="Customization"
            description="We deliver outsourced
            aviation services for
            military customers"
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
