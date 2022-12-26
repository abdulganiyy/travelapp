import React from "react";
import Link from "./Link";
import Modal from "./Modal";
import AuthForm from "./AuthForm";

import Logo from "../images/Logo.png";
import ArrowDown from "../images/arrowdown.png";

const MobileNav = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <>
      <div
        className="block md:hidden w-[40px]"
        onClick={() => setShowNav(!showNav)}
      >
        <div className="w-[40px] h-1 bg-[#14183E]"></div>
        <div className="w-[30px] my-1 h-1 bg-[#14183E]"></div>
        <div className="w-[20px] h-1 bg-[#14183E]"></div>
      </div>
      <div
        className={`fixed text-left top-[100px] transition-transform -translate-x-full ${
          showNav ? "translate-x-0" : ""
        } left-0 w-full p-4 bg-white`}
      >
        <div className={`flex flex-col md:hidden gap-y-2`}>
          <Link title="Destinations" />
          <Link title="Hotels" />
          <Link title="Flights" />
          <Link title="Bookings" />
          <button className="text-left font-sans text-[17px] font-medium leading-[21.62px]">
            Login
          </button>
          <button className="w-[102px] h-[40px] font-sans text-[17px] font-medium leading-[21.62px] border-2 border-[#212832] rounded-[10px]">
            Sign up
          </button>
          <span className="flex items-center font-sans text-[17px] gap-x-2 font-medium leading-[21.62px]">
            EN <img className="" src={ArrowDown} alt="arrowdown" />
          </span>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  return (
    <div className="flex justify-between items-center max-w-[1160px] h-[40px] mx-auto">
      <img src={Logo} alt="Logo" />
      <div className={`hidden md:flex gap-x-14 items-center`}>
        <Link title="Destinations" />
        <Link title="Hotels" />
        <Link title="Flights" />
        <Link title="Bookings" />
        <button
          onClick={() => setOpenLogin(!openLogin)}
          className="h-[40px] font-sans text-[17px] font-medium leading-[21.62px]"
        >
          Login
        </button>
        <button
          onClick={() => setOpenSignUp(!openSignUp)}
          className="w-[102px] h-[40px] font-sans text-[17px] font-medium leading-[21.62px] border-2 border-[#212832] rounded-[10px]"
        >
          Sign up
        </button>
        <span className="flex items-center font-sans text-[17px] gap-x-2 font-medium leading-[21.62px]">
          EN <img className="" src={ArrowDown} alt="arrowdown" />
        </span>
      </div>
      <MobileNav />
      <Modal isOpen={openSignUp} onCloseHandler={() => setOpenSignUp(false)}>
        <AuthForm />
      </Modal>
      <Modal isOpen={openLogin} onCloseHandler={() => setOpenLogin(false)}>
        <AuthForm type="Login" />
      </Modal>
    </div>
  );
};

export default Header;
