import React from "react";

type TitleProps = {
  name: string;
};
const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <h3 className="font-serif text-[#14183E] font-bold text-[50px] leading-[64px]">
      {name}
    </h3>
  );
};

export default Title;
