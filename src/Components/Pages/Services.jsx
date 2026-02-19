import React from "react";
import serviceImg from "../../../public/Service-image.jpg";

import service1 from "../../../public/Services/Service1.png";
import service2 from "../../../public/Services/Service2.png";
import service3 from "../../../public/Services/Service3.png";
import service4 from "../../../public/Services/Service4.png";
import service5 from "../../../public/Services/Service5.png";
import service6 from "../../../public/Services/Service6.png";
import service7 from "../../../public/Services/Service7.png";
import service8 from "../../../public/Services/Service8.png";

import feature1 from "../../../public/Feature/Feature1.png";
import feature2 from "../../../public/Feature/Feature2.png";
import feature3 from "../../../public/Feature/Feature3.png";
import feature4 from "../../../public/Feature/Feature4.png";
import feature5 from "../../../public/Feature/Feature5.png";
import feature6 from "../../../public/Feature/Feature6.png";
import feature7 from "../../../public/Feature/Feature7.png";
import feature8 from "../../../public/Feature/Feature8.png";
import feature9 from "../../../public/Feature/Feature9.png";
import feature10 from "../../../public/Feature/Feature10.png";
import feature11 from "../../../public/Feature/Feature11.png";
import feature12 from "../../../public/Feature/Feature12.png";

function Services() {
  return (
    <>
    <div className="section-banner relative flex items-center justify-center">
        <img
          src={serviceImg}
          alt="Section-about"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="service w-full lg:px-[12%] px-[8%] py-[100px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-6">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                       bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
          >
            Services at Oceanis Grand Palace
          </span>
          <h1
            className="text-5xl font-oswald font-semibold 
                       text-[var(--primary-color)] 
                       drop-shadow-[0_3px_8px_var(--prim-light)] 
                         [text-shadow:2px_2px_0_var(--text-color)]"
          >
            “Crafting Moments of Timeless Elegance”
          </h1>
        </div>

        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          {/* Service Item */}
          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service1}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Oceanis Dive & Discovery
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service2}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Oceanis Night of Elegance
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service3}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Oceanis Sunset Wellness
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service4}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Luxury Water Sports by Oceanis
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service5}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Chef Master by Oceanis
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service6}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Aqua Dine Experience
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service7}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Seaside Family Haven
            </span>
          </div>

          <div className="service-item relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <img
              src={service8}
              alt="service-image"
              className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 
                       bg-transparent text-center rounded-full py-2 px-4 
                       text-sm font-oswald font-semibold tracking-widest uppercase 
                       text-[var(--white-color)] shadow-md w-[90%] max-w-[250px] 
                       opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 
                       group-hover:-translate-y-1/2 transition-all duration-500 ease-out"
            >
              Oceanis Surf Escape
            </span>
          </div>
        </div>

        <div className="service-bottom  w-full flex lg:flex-row flex-col justify-between items-center gap-5">
          <p className="lg:w-1/2 text-lg leading-relaxed text-[#204f5e]">
            Oceanis Grand Palace delivers exclusive service, attentive
            hospitality, and professional care, ensuring every guest experiences
            comfort, satisfaction, and distinction.
          </p>
          <button
            className="w-[220px] h-[60px] 
                     bg-[var(--text-light)] 
                     hover:bg-[var(--text-color)] 
                     transition-transform duration-500 ease-in-out 
                     rounded-full text-white uppercase tracking-[2px] 
                     shadow-lg hover:shadow-xl 
                     hover:scale-105 hover:drop-shadow-lg"
          >
            Discover Luxury
          </button>
        </div>
      </div>

      <div className="features relative w-full bg-[#f9f9f9] lg:px-[12%] px-[8%] py-[100px] overflow-hidden">
        {/* Section Title */}
        <div className="section-title text-center mb-20">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                           bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
          >
            Oceanis Highlights
          </span>
          <h1
            className="mt-6 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                          drop-shadow-[0_3px_8px_var(--prim-light)] 
                         [text-shadow:2px_2px_0_var(--text-color)]"
          >
            ”Unveiling Excellence in Every Detail”
          </h1>
        </div>

        {/* Features Showcase */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Feature Item */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature1}
              alt="Beachfront"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Pristine Beachfront
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                White sands, clear waters, and romantic sunsets.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature2}
              alt="Infinity Pool"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Infinity Pool Oasis
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Panoramic views and luxurious leisure.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature3}
              alt="Fine Dining"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Fine Dining Excellence
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Gourmet cuisine with global and local flavors.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature4}
              alt="Spa Retreat"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Exclusive Spa Retreat
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Holistic treatments for body, mind, and spirit.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature5}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Grand Ballroom & Events
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Elegant venues for weddings and celebrations.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature6}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Personal Service
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Exceptional care, always delivered.
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature7}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Oceanfront Villas
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Private sanctuaries with breathtaking views
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature8}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Adventure Excursions
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Guided tours and thrilling outdoor activities
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature9}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Ocean View Suite
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Awaken to turquoise horizons
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature10}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">Grand Lobby</h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Elegance that welcomes you home
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature11}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Private Island
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                An oasis of exclusivity
              </p>
            </div>
          </div>

          <div className="relative group rounded-xl overflow-hidden shadow-lg">
            <img
              src={feature12}
              alt="Ballroom"
              className="w-full h-auto object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                            text-center p-5 transition-opacity duration-500 group-hover:from-black/40"
            >
              <h3 className="text-xl font-semibold text-white">
                Coral Paradise{" "}
              </h3>
              <p className="text-gray-200 text-xs mt-1 max-w-[85%] mx-auto">
                Dive into vibrant wonders
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
