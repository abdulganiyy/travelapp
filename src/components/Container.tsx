import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  width: number;
};
const Container: React.FC<ContainerProps> = ({ children, width }) => {
  return <div className={`max-w-[${width}px] mx-auto z-[10]`}>{children}</div>;
};

export default Container;
