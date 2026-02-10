import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import service1 from "../../assets/Service1.png";
import service2 from "../../assets/Service2.png";
import service3 from "../../assets/Service3.png";
import service4 from "../../assets/Service4.png";

import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";
import feature6 from "../../assets/feature6.png";

import element1 from "../../assets/Element1.png";
import element2 from "../../assets/Element2.png";
import element3 from "../../assets/Element3.png";

import RoomsData from "../../Rooms.json";

import aboutImg from "../../assets/About-Image.png";

import avatar1 from "../../assets/Review1.png";
import avatar2 from "../../assets/Review2.png";
import avatar3 from "../../assets/Review3.png";
import avatar4 from "../../assets/Review4.png";
import avatar5 from "../../assets/Review5.png";
import avatar6 from "../../assets/Review6.png";
import avatar7 from "../../assets/Review7.png";

import blog1 from "../../assets/Blog1.png";
import blog2 from "../../assets/Blog2.png";
import blog3 from "../../assets/Blog3.png";
import blog4 from "../../assets/Blog4.png";
import { div } from "framer-motion/client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Economy", "Standard", "Luxury"];

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  return (
    <>
      <div className="hero w-full px-6 sm:px-10 lg:px-[12%] py-20 sm:py-28 lg:py-[200px] flex items-start justify-start bg-[#f9f9f9]">
        <div className="hero-content w-full max-w-5xl flex flex-col gap-6 z-10 relative">
          {/* Badge */}
          <span
            className="text-[#204f5e] bg-[#36c6c2] 
             w-fit py-2 px-5 
             rounded-full text-base sm:text-lg 
             font-semibold shadow-sm 
             mx-auto sm:mx-0"
          >
            Oceanis Grand Palace
          </span>

          {/* Heading */}
          <h1
            className="tagline-text text-2xl sm:text-4xl lg:text-5xl font-bold 
                     text-[#204f53] leading-tight tracking-wide 
                     font-[var(--Oswald-font)] text-shadow-white"
          >
            Experience Light Live Tranquility
          </h1>

          {/* Reservation Form */}
          <form
            className="w-full flex flex-wrap items-center gap-4 
                     bg-white/60 contact-form backdrop-blur-md rounded-lg shadow-lg 
                     p-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Check-in */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-semibold text-white mb-2 uppercase">
                <i className="ri-calendar-line text-[#36c6c2]"></i> Check-in
              </label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select date"
                className="p-2 sm:p-3 h-[45px] sm:h-[50px] w-full sm:w-[200px] 
                         bg-[#eafbfb]/80 rounded-md border border-[#bea15d] 
                         outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-semibold text-white mb-2 uppercase">
                <i className="ri-calendar-event-line text-[#36c6c2]"></i>{" "}
                Check-out
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select date"
                className="p-2 sm:p-3 h-[45px] sm:h-[50px] w-full sm:w-[200px] 
                         bg-[#eafbfb]/80 rounded-md border border-[#bea15d] 
                         outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Adults */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-semibold text-white mb-2 uppercase">
                <i className="ri-user-line text-[#36c6c2]"></i> Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="p-2 sm:p-3 h-[45px] sm:h-[50px] w-full sm:w-[120px] 
                         bg-[#eafbfb]/80 rounded-md border border-[#bea15d] 
                         outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
              />
            </div>

            {/* Rooms */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-semibold text-white mb-2 uppercase">
                <i className="ri-home-2-line text-[#36c6c2]"></i> Rooms
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="p-2 sm:p-3 h-[45px] sm:h-[50px] w-full sm:w-[120px] 
                         bg-[#eafbfb]/80 rounded-md border border-[#bea15d] 
                         outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end translate-y-2 sm:translate-y-4 w-full sm:w-auto">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 
                         bg-[var(--text-light)] border border-[var(--text-light)] text-white 
                         rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold shadow-sm 
                         transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_0_15px_var(--text-light)] 
                         hover:bg-[var(--text-light)]/10 w-full sm:w-auto"
              >
                <i className="ri-search-line"></i>
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="service w-full lg:px-[12%] px-[8%] py-[100px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-6">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                 bg-[var(--prim-light)] text-[var(--text-color)] shadow-md"
          >
            Services at Oceanis Grand Palace
          </span>
          <h1
            className="text-5xl font-oswald font-semibold 
                 text-[var(--primary-color)] 
                 drop-shadow-[0_2px_6px_var(--prim-light)] 
                 [text-shadow:1px_1px_0_var(--text-color)]"
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
                     bg-[var(--prim-light)] text-[var(--text-color)] shadow-md"
          >
            Oceanis Highlights
          </span>
          <h1
            className="mt-6 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_2px_6px_var(--prim-light)] 
                   [text-shadow:1px_1px_0_var(--text-color)]"
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
        </div>
      </div>

      <div className="py-[80px]">
        <div className="section-title text-center mb-20">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                     bg-[var(--prim-light)] text-[var(--text-color)] shadow-md"
          >
            Oceanis Rooms
          </span>
          <h1
            className="mt-6 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_2px_6px_var(--prim-light)] 
                   [text-shadow:1px_1px_0_var(--text-color)]"
          >
            ”Elegance and serenity in every room”
          </h1>
        </div>
      </div>

      <div className="w-100 lg:px-[12%] px-[8%] pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((rooms) => (
            <div
              key={rooms.id}
              className="show-rooms rounded-2xl overflow-hidden flex flex-col 
                   bg-[rgba(255,255,255,0.65)] backdrop-blur-xl 
                   border border-[var(--primary-color)] 
                   shadow-lg transition-all duration-500 
                   hover:shadow-2xl hover:border-[var(--text-light)]"
            >
              {/* Image Slider */}
              <div className="relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-[280px]"
                >
                  {rooms.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt={`${rooms.title} ${index + 1}`}
                        className="w-full h-[280px] object-cover transition-opacity duration-500 hover:opacity-90"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Adults & Size Info Bar */}
              <div
                className="bg-[rgba(54,198,194,0.12)] backdrop-blur-md 
                        border-t border-[var(--primary-color)] 
                        flex justify-center items-center gap-6 py-3"
              >
                <span className="flex items-center gap-2">
                  <i className="bg-white/80 shadow rounded px-3 py-1 text-sm text-[var(--text-light)]">
                    Adults : {rooms.adults}
                  </i>
                </span>
                <span className="flex items-center gap-2">
                  <i className="bg-white/80 shadow rounded px-3 py-1 text-sm text-[var(--text-light)]">
                    Size : {rooms.size}
                  </i>
                </span>
              </div>

              {/* Content */}
              <Link to={`/rooms/${rooms.id}`} className="flex-1">
                <div className="px-6 pt-6 pb-6 text-center flex flex-col items-center">
                  {/* Heading & Description */}
                  <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-2 tracking-wide transition-colors duration-300 hover:text-[var(--text-light)]">
                    {rooms.title}
                  </h3>
                  <p className="text-md text-[var(--text-light)] max-w-[80%] mx-auto leading-relaxed mb-6">
                    {rooms.description}
                  </p>

                  {/* Price & Button (menyatu dengan konten) */}
                  <div className="mt-4 flex items-center justify-between w-full px-2">
                    <p className="text-xl font-bold text-[var(--text-color)] tracking-wide">
                      ${rooms.price}
                    </p>
                    <button className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xl shadow-md hover:bg-[var(--text-light)] hover:shadow-lg hover:ring-2 hover:ring-[var(--primary-color)] transition-all duration-300">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
