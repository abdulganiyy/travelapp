import React from "react";

type ServiceProps = {
  img: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
};
const Service: React.FC<ServiceProps> = ({
  img,
  title,
  description,
  active,
}) => {
  return (
    <div
      className={`${
        active ? "bg-white rounded-[36px] shadow-2xl" : ""
      } w-full md:w-[267px] h-[314px] flex flex-col justify-center relative items-center`}
    >
      {!active ? (
        img
      ) : (
        <div className="relative h-[78px] w-[92px]">
          <div className="absolute bg-[#FFF1DA] top-0 left-0 w-[50px] h-[50px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px]"></div>
          <div className="absolute bottom-0 right-0 w-[110px]">{img}</div>
        </div>
      )}
      <h4 className="mt-[29px] mb-[15px] font-sans font-semibold text-[#1E1D4C] text-xl leading-[27px]">
        {title}
      </h4>
      <p className="max-w-[181px] font-poppins font-medium text-[#5E6282] text-base leading-[26px]">
        {description}
      </p>
      {active ? (
        <div className="bg-[#DF6951] h-[100px] rounded-t-[30px] rounded-br-[30px] w-[100px] absolute z-[-1] bottom-0 left-0 translate-y-1/3 -translate-x-1/3"></div>
      ) : null}
    </div>
  );
};

export default Service;
