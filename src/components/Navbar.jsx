import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />

        <ul className="hidden md:flex gap-7 text-white">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Projects</li>
          <li className="cursor-pointer hover:text-gray-400">Testimonials</li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={assets.cross_icon} alt="" className="w-6" />
          ) : (
            <img src={assets.menu_icon} className="w-7" alt="" />
          )}
        </div>
      </div>
      {/* ------------------ Mobile-menu --------------------- */}
      {isOpen && (
        <div className="md:hidden fixed w-full  right-0 top-16 bottom-0 overflow-hidden bg-white transition-all">
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li onClick={()=>setIsOpen(false)} className="cursor-pointer hover:text-gray-400">Home</li>
            <li onClick={()=>setIsOpen(false)} className="cursor-pointer hover:text-gray-400">About</li>
            <li onClick={()=>setIsOpen(false)} className="cursor-pointer hover:text-gray-400">Projects</li>
            <li onClick={()=>setIsOpen(false)} className="cursor-pointer hover:text-gray-400">Testimonials</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
