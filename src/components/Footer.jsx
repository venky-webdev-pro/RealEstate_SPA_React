import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-8 mb:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="text-white">abc</div>
        <div></div>
      </div>
      {/*  */}
      <div></div>
    </div>
  );
};

export default Footer;
