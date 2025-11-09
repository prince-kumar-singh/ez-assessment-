import React from "react";
import { Link } from "react-router-dom";

import Vector5 from "../assets/Vector5.svg";
import TapeLeft from "../assets/image7.png";
import TapeCenter from "../assets/image8.png";
import TapeRight from "../assets/image6.png";
import Film from "../assets/Frame31_3.png";
import BrandingImg from "../assets/Frame31_4.png";
import Art from "../assets/Frame31_2.png";

const StoryboardSection = () => {
  return (
    <section className="bg-[#FFF7F2] relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative bottom border */}
      <img
        src={Vector5}
        alt="Decorative Border"
        className="absolute bottom-0 left-0 w-full"
      />

      {/* Title */}
      <h2 className="text-[#0E1F33] text-center text-xl md:text-2xl font-serif mb-14">
        The storyboard reveals the breadth of our craft.
      </h2>

      {/* Polaroid Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative">
        
        {/* Film Production */}
        <div className="relative transform rotate-[-4deg]">
          <img
            src={TapeLeft}
            alt="Tape Left"
            className="absolute -top-5 left-10 w-28 md:w-36 z-10"
          />

          <Link to="/film-production">
            <img
              src={BrandingImg}
              alt="Film Production"
              className="w-[250px] md:w-[280px] shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <p className="text-center mt-2 text-[#0E1F33] font-serif">
            Film Production
          </p>
        </div>

        {/* Branding */}
        <div className="relative transform rotate-1 z-20">
          <img
            src={TapeCenter}
            alt="Tape Center"
            className="absolute -top-5 left-12 w-28 md:w-36 z-10"
          />

          <Link to="/branding">
            <img
              src={Film}
              alt="Branding"
              className="w-[250px] md:w-[280px] shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <p className="text-center mt-2 text-[#0E1F33] font-serif">
            Branding
          </p>
        </div>

        {/* Art Curation */}
        <div className="relative transform rotate-[7deg]">
          <img
            src={TapeRight}
            alt="Tape Right"
            className="absolute -top-5 left-14 w-28 md:w-36 z-10"
          />

          <Link to="/art-curation">
            <img
              src={Art}
              alt="Art Curation"
              className="w-[250px] md:w-[280px] shadow-2xl border-4 border-white cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <p className="text-center mt-2 text-[#0E1F33] font-serif">
            Art Curation
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryboardSection;
