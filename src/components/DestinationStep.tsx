import React from "react";

type DestinationStepProps = {
  icon: React.ReactNode;
  heading: string;
  subheading: string;
};

const DestinationStep: React.FC<DestinationStepProps> = ({
  icon,
  heading,
  subheading,
}) => {
  return (
    <div className="flex gap-x-[21px]">
      <div className="grow-0">{icon}</div>
      <div className="grow">
        <h2 className="font-bold font-poppins text-[16px] leading-[20px] text-[#5E6282]">
          {heading}
        </h2>
        <h3 className="max-w-[327px] font-normal font-poppins text-[16px] leading-[20px] text-[#5E6282]">
          {subheading}
        </h3>
      </div>
    </div>
  );
};

export default DestinationStep;
