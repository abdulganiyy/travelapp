import React from "react";

type SubTitleProps = {
  name: string;
};
const SubTitle: React.FC<SubTitleProps> = ({ name }) => {
  return (
    <h3 className="font-poppins text-[#5E6282] font-semibold text-lg leading-[27px]">
      {name}
    </h3>
  );
};

export default SubTitle;
