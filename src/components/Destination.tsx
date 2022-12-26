import React from "react";

import Kite from "../images/kite.png";

type DestinationProps = {
  img: React.ReactNode;
  location: string;
  price: string;
  days: number;
};

const Destination: React.FC<DestinationProps> = ({
  img,
  location,
  price,
  days,
}) => {
  return (
    <div className="w-full md:w-[314px] h-[457px] rounded-3xl overflow-hidden relative shadow-2xl">
      <div className="absolute h-full w-full top-0 left-o right-0 bottom-0 rounded-3xl">
        {img}
      </div>
      <div className="absolute z-3 pt-[28px] pb-[42px] pl-[20px] pr-[25px] bottom-0 bg-white w-full h-[130px]">
        <div className="flex justify-between font-poppins text-[18px] leading-[22px] text-[#5E6282]">
          <span>{location}</span>
          <span>${price}k</span>
        </div>
        <div className="flex justify-start gap-x-4 text-left mt-[19px] text-[#5E6282] font-poppins text-[16px] leading-[28px]">
          <img src={Kite} alt="kite" />
          <span>{days} Days Trip</span>
        </div>
      </div>
    </div>
  );
};

export default Destination;
