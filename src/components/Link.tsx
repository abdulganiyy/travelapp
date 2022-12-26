import React from "react";

type LinkProps = {
  title: string;
};

const Link: React.FC<LinkProps> = ({ title }) => {
  return (
    <a className="font-sans text-[17px] font-medium leading-[21.62px]">
      {title}
    </a>
  );
};

export default Link;
