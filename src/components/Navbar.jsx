import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import VFilmsLogo from "../assets/VFilmsLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#FFFCFC] shadow-sm relative z-50">

        {/* Logo */}
        <div className="flex items-center">
          <img src={VFilmsLogo} alt="VFilms Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
          <Link to="/services"><li className="hover:text-orange-500 cursor-pointer">Services</li></Link>
          <Link to="/about"><li className="hover:text-orange-500 cursor-pointer">About Us</li></Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <button className="hidden md:flex items-center space-x-2 bg-[#F15A29] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#e34d1c] transition-all">
              <span>Let’s Talk</span>
              <Mail size={18} />
            </button>
          </Link>

          {/* Mobile Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 50 50">
                <path d="M5 5 L45 45 M45 5 L5 45" stroke="#0E1F33" strokeWidth="8" strokeLinecap="round" />
              </svg>
            ) : (
              // Brush Hamburger
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 50 50">
                <path d="M5 15 H45" stroke="#0E1F33" strokeWidth="8" strokeLinecap="round" />
                <path d="M5 35 H45" stroke="#0E1F33" strokeWidth="8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed left-0 top-16 w-full bg-[#FFFCFC] shadow-lg z-40 transition-all duration-300 ${
          menuOpen ? "max-h-[300px] py-6" : "max-h-0 py-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-6 text-gray-800 text-lg font-medium">

          <Link to="/services" onClick={closeMenu}>
            <li className="hover:text-orange-500 cursor-pointer">Services</li>
          </Link>

          <Link to="/about" onClick={closeMenu}>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            <button className="flex items-center space-x-2 bg-[#F15A29] text-white px-6 py-2 rounded-full shadow hover:bg-[#e34d1c] transition-all">
              <span>Let’s Talk</span>
              <Mail size={18} />
            </button>
          </Link>

        </ul>
      </div>

      {/* Click Outside Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
