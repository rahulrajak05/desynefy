import React from "react";
import w2 from "../assets/w2.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <img
        src={w2}
        alt="Business IT solutions"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
        {/* Heading stays in center */}
        <h1 className="text-white text-2xl md:text-4xl font-extrabold mt-2 max-w-5xl text-right">
          Empowering Businesses with  Innovative IT Solutions<br className="hidden sm:block" />
         
        </h1>

        {/* Paragraph moves to bottom-right */}
        <p className="absolute bottom-5 right-5 text-white text-lg md:text-xl max-w-xl text-right">
          We provide cutting-edge technology consulting and implementation
          services to help businesses thrive in the digital age.
        </p>
      </div>
    </section>
  );
};

export default Hero;
