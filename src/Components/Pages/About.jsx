import React from "react";
import CountUp from "react-countup";
import authorImg from "../../assets/about.jpg";
import signatureImg from "../../assets/Signature.png";

import heroImg from "../../assets/Hero-about2.png";
import { Link } from "react-router-dom";

import sectionImg from "../../assets/Section-about.png";

function About() {
  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
        <img
          src={sectionImg}
          alt="Section-about"
          className="w-full h-auto object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
    text-4xl sm:text-5xl md:text-6xl lg:text-8xl
    -translate-y-16 sm:-translate-y-40 md:-translate-y-60 lg:-translate-y-80
    font-oswald font-semibold
    text-transparent bg-clip-text
    bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]
    drop-shadow-[0_3px_8px_var(--primary-color)]"
            style={{
              textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
            }}
          >
            Oceanis Grand Palace
          </h1>
        </div>
      </div>

      <div className="bg-[#f9f9f9] py-[80px] px-[5%] w-full pb-0">
        <div className="w-full p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]">
          <div className="mx-auto">
            <div className="mb-12">
              <span
                className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                     bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
              >
                About Us
              </span>
              <h2
                className="text-3xl sm:text-4xl font-semibold mt-4 font-oswald font-semibold
    text-transparent bg-clip-text
    bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]
    drop-shadow-[0_3px_8px_var(--primary-color)]"
                style={{
                  textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
                }}
              >
                Story About Us
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#204f5e] leading-relaxed text-[15px]">
              <div>
                <p className="mb-5 text-[var(--color-text)]">
                  Oceanis Grand Palace stands as a symbol of timeless luxury in
                  the heart of Medan, blending modern sophistication with the
                  warmth of Indonesian heritage. More than a hotel, we are the
                  centerpiece of premium hospitality, redefining the true
                  meaning of comfort and grandeur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
