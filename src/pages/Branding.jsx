import React from "react";
import Frame33 from "../assets/Frame33.png"    // Branding image
import Brush from "../assets/brush.jpg";
import Arrow from "../assets/arrow.jpg";
import Cam1 from "../assets/cam1.jpg";
import Cam2 from "../assets/cam2.jpg";
import Tripod from "../assets/tripod.jpg";

const Branding = () => {
  return (
    <div className="w-full min-h-screen bg-[#f7e8e2] px-8 md:px-20 py-16 relative overflow-hidden">

      {/* Top Brush Decoration */}
      <img src={Brush} alt="" className="w-full max-w-3xl mx-auto" />

      {/* Quote */}
      <h2 className="text-center text-[#252729] font-halant text-3xl md:text-4xl mt-6">
        “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
      </h2>

      {/* Decorative icons */}
      <img src={Cam1} className="w-20 absolute top-52 right-32 opacity-70" />
      <img src={Cam2} className="w-20 absolute top-[460px] right-64 opacity-70" />
      <img src={Tripod} className="w-16 absolute bottom-40 right-20 opacity-70" />

      {/* Main Content */}
      <div className="mt-20 flex flex-col md:flex-row gap-12 items-start justify-center">

        {/* Left Image Card */}
        <div className="bg-white shadow-xl p-4 rounded-sm">
          <img src={Frame33} alt="Branding" className="w-80 h-96 object-cover" />
          <p className="text-center mt-3 text-lg font-medium text-[#252729]">
            Branding
          </p>
        </div>

        {/* Right Text Section */}
        <div className="max-w-xl text-[#252729] leading-relaxed text-lg">
          
          <p>
            A brand isn’t just what you see – it’s what you remember,  
            what you carry home, and what you trust.
          </p>

          <p className="mt-4">
            We shape brands that people remember,  
            return to, and fall in love with.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-1">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>

          {/* Explore Now */}
          <div className="mt-8 flex items-center gap-3 cursor-pointer">
            <span className="text-xl font-semibold">Explore Now</span>
            <img src={Arrow} alt="" className="w-16" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Branding;
