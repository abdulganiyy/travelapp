import React from "react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseHandler: React.MouseEventHandler<HTMLSpanElement>;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onCloseHandler }) => {
  return (
    <div
      className={`${
        !isOpen ? "-translate-y-full" : "translate-y-0"
      } fixed w-full h-full transition-transform top-0 left-0 flex justify-center items-center bg-stone-500/70`}
    >
      <span
        className="absolute top-4 text-white right-4 cursor-pointer"
        onClick={onCloseHandler}
      >
        close
      </span>
      {children}
    </div>
  );
};

export default Modal;
