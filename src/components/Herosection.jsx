import React from "react";
import Mandala from "../assets/HeroMandala.png"; // your mandala image
import VFilmsLogo from "../assets/VFilmsLogo.png"; // your VFilms logo

const HeroSection = () => {
  return (
    <section className="bg-[#FFF7F2] min-h-screen flex flex-col md:flex-row justify-center items-center px-8 md:px-20 py-16 relative">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mb-12 md:mb-0">
        <img
          src={Mandala}
          alt="Mandala Background"
          className="w-[350px] md:w-[500px] opacity-80"
        />
        <img
          src={VFilmsLogo}
          alt="V Films Logo"
          className="absolute w-[180px] md:w-[250px]"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="text-[#0E1F33] text-3xl md:text-4xl italic font-[cursive] leading-snug">
          Varnan is where stories find <br /> their voice and form
        </h2>

        <h3 className="text-[#E25D34] font-serif text-xl md:text-2xl">
          Films . Brands . Art
        </h3>

        <p className="text-gray-800 text-sm md:text-base max-w-md leading-relaxed">
          Since 2009, V’ve been telling stories – stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way – by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories – V honors them.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
