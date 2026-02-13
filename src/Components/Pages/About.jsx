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
                className="mt-6 -mb-5 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                    drop-shadow-[0_3px_8px_var(--prim-light)] 
                   [text-shadow:2px_2px_0_var(--text-color)]"
              >
                Story About Us
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#204f5e] leading-relaxed text-[15px]">
              <div>
                <p className="mb-5 text-[var(--color-text)]">
                  Oceanis Grand Palace rises proudly in the heart of Medan as a
                  symbol of timeless luxury and refined hospitality. Its grand
                  architecture harmonizes modern sophistication with the warmth
                  of Indonesian heritage, creating a sanctuary where every
                  detail reflects elegance and excellence.
                </p>
                <p className="mb-5 text-[var(--color-text)]">
                  From the moment you step into the majestic lobby, Oceanis
                  Grand Palace reveals its cinematic design and curated
                  interiors. Each space is crafted to evoke harmony and comfort,
                  offering a seamless blend of grandeur and intimacy for both
                  leisure and business.
                </p>
                <p className="mb-5 text-[var(--color-text)]">
                  Beyond being a destination, Oceanis Grand Palace serves as the
                  centerpiece of Medan’s hospitality scene. It is a place where
                  international conferences, family celebrations, and romantic
                  escapes find their perfect stage, supported by impeccable
                  service and heartfelt dedication.
                </p>
              </div>

              <div>
                <p className="mb-5 text-[var(--color-text)]">
                  Standing proudly as an icon of the city, Oceanis Grand Palace
                  connects Medan to the world with elegance and prestige. Its
                  presence is not only architectural but cultural, symbolizing
                  the city’s growth and global aspirations. Here, luxury is not
                  simply offered it is lived, creating stories that guests carry
                  long after their stay.
                </p>
                <p className="mb-5 text-[var(--color-text)]">
                  Oceanis Grand Palace is more than a hotel it is a living
                  testament to refinement, harmony, and unforgettable
                  experiences. Each visit becomes part of a larger narrative one
                  of grandeur, comfort, and prestige making Oceanis the ultimate
                  symbol of premium living in Sumatera Utara.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                    <div className="flex items-center gap-4">
                        <img src={authorImg} alt="Emma Millar" 
                        className="w-20 h-20 -mt-5 "
                        />
                        <div>
                            <h4 className="font-semibold text-[var(--color-text)]">
                                Priscillia Miller
                            </h4>
                            <span className="text-sm text-[var(--color-text)]">Hotel Administrator</span>
                        </div>
                    </div>

                    <img src={signatureImg} alt="Signature" className="w-32 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
