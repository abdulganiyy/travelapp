import React from "react";
import Container from "./Container";

import FacebookIcon from "../images/facebook.png";
import InstagramIcon from "../images/instagram.png";
import TwitterIcon from "../images/twitter.png";
import GooglePlayIcon from "../images/googleplay.png";
import PlayStoreIcon from "../images/playstore.png";

type FooterLinksProps = {
  title: string;
  links: string[];
};

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className="text-left mb-4 md:mb-0">
      <h4 className="font-poppins font-bold text-[21px] leading-[26px] text-[21px] text-[#080809] mb-[34px]">
        {title}
      </h4>
      <div className="flex flex-col gap-y-[12px]">
        {links.map((link: string, i) => (
          <a
            className="font-poppins font-medium text-[18px] leading-[22px] text-[#5E6282]"
            key={i}
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <Container width={1160}>
      <div className="px-4 md:px-0 flex flex-col md:flex-row justify-between">
        <div className="text-left max-w-[207px] mb-4 md:mb-0">
          <h3 className="font-poppins font-medium text-[44px] leading-[66px] text-[#181E4B]">
            Jadoo.
          </h3>
          <p className="ont-poppins font-medium text-[13px] leading-[16px] text-[#5E6282]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <FooterLinks title="Company" links={["About", "Careers", "Mobile"]} />
        <FooterLinks
          title="Contact"
          links={["Help/FAQ", "Press", "Affiliates"]}
        />
        <FooterLinks
          title="More"
          links={["Airlinefees", "Airline", "Low fare tips"]}
        />
        <div className="text-left">
          <div className="flex mb-[20px]">
            <img src={FacebookIcon} alt="facebook-icon" />
            <img src={InstagramIcon} alt="insta-icon" />
            <img src={TwitterIcon} alt="twitter-icon" />
          </div>
          <p className="font-poppins font-medium text-[20px] leading-[25px] text-[#5E6282] mb-[16px]">
            Discover our app
          </p>
          <div className="flex gap-x-4">
            <img src={GooglePlayIcon} alt="googleplay-icon" />
            <img src={PlayStoreIcon} alt="playstore-icon" />
          </div>
        </div>
      </div>
      <div className="my-[80px] font-poppins font-medium text-[14px] leading-[17px] text-[#5E6282]">
        All rights reserved@jadoo.co
      </div>
    </Container>
  );
};

export default Footer;
