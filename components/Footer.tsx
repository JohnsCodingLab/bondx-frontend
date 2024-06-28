import React from "react";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="mt-5 mb-10 p-5">
        <div className="border border-secondary w-full mb-20"></div>
        <div className="flex justify-center text-white gap-10 mb-5 max-sm:flex-col max-sm:items-center max-sm:mb-10">
          <a>About</a>
          <a>Contact</a>
          <a>Terms of Services</a>
          <a>Privacy Policy</a>
        </div>
        <div className="flex justify-center gap-5">
          <FaTwitter className="text-white" size={25} />
          <FaTelegram className="text-white" size={25} />
          <FaFacebook className="text-white" size={25} />
        </div>
        <p className="text-white text-center mt-5">
          &copy; All Rights Reserved{" "}
          <span className="font-main text-primary font-bold">
            {" "}
            Bond<span className="text-white">X </span>
          </span>
          {currentYear}
        </p>
      </div>
    </>
  );
};

export default Footer;
