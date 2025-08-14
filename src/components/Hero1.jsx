import React from "react";
import w1 from "../assets/w1.jpg";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={w1}
          alt="Business IT Solutions"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8">
         <h1 className="text-white text-2xl md:text-4xl font-extrabold mt-2 max-w-5xl text-right">
  Empowering Businesses Through Innovative IT Solutions
</h1>

         <div className="flex justify-end">
  <p className="text-white text-lg mt-4 max-w-2xl text-right">
    We are a leading IT consultancy dedicated to helping businesses thrive
    in the digital age. Our team provides tailored solutions to meet your
    unique needs, from strategy and implementation to ongoing support.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
