import React from "react";
import Frame22 from "../assets/Frame22.png"; // 85+ Projects
import Frame9 from "../assets/Frame9.png"; // 50+ Happy Clients
import Frame23 from "../assets/Frame23.png"; // 10+ Experts Team
import Objects from "../assets/OBJECTS.png"; // Mountain illustration
import Group10 from "../assets/Group10.png"; // Circular brand logos

const ProjectsSection = () => {
  return (
    <section className="bg-[#FFF7F2] py-20 px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#0E1F33] text-2xl md:text-3xl font-serif mb-4">
            A montage of familiar faces and names.
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
            Some stories come from the biggest names. Others begin with bold,
            rising voices. We’ve been fortunate to walk alongside both –
            listening, creating, and building stories that matter.
          </p>

          {/* Floating Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
            <img
              src={Frame22}
              alt="85+ Projects"
              className="w-32 md:w-40 transform rotate-[3deg] drop-shadow-2xl"
            />
            <img
              src={Frame9}
              alt="50+ Happy Clients"
              className="w-32 md:w-40 transform rotate-[3deg] drop-shadow-2xl"
            />
            <img
              src={Frame23}
              alt="10+ Experts Team"
              className="w-32 md:w-40 transform rotate-[3deg] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-[#0E1F33] italic text-2xl md:text-3xl font-[cursive] leading-snug mb-10 max-w-lg">
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written. <br />
            Together, we’ve crafted tales that inspire, <br />
            connect, and endure.
          </h3>

          {/* Circular Brands */}
          <img
            src={Group10}
            alt="Brand Logos"
            className="w-[300px] md:w-[400px] mb-6"
          />

          {/* Mountain Illustration */}
          <img
            src={Objects}
            alt="Mountain Illustration"
            className="w-[350px] md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
