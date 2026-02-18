import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import service1 from "../../assets/Service1.png";
import service2 from "../../assets/Service2.png";
import service3 from "../../assets/Service3.png";
import service4 from "../../assets/Service4.png";

import feature1 from "../../assets/Feature1.png";
import feature2 from "../../assets/Feature2.png";
import feature3 from "../../assets/Feature3.png";
import feature4 from "../../assets/Feature4.png";
import feature5 from "../../assets/Feature5.png";
import feature6 from "../../assets/Feature6.png";

import about1 from "../../assets/About1.png";
import about2 from "../../assets/About2.png";
import about3 from "../../assets/About3.png";
import about4 from "../../assets/About4.png";

import RoomsData from "../../Rooms.json";

import aboutImg2 from "../../assets/About-Image2.png";

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
import blog5 from "../../assets/Blog5.png";
import blog6 from "../../assets/Blog6.png";

import userBlog1 from "../../assets/blog-user1.png"
import userBlog2 from "../../assets/blog-user2.png"
import userBlog3 from "../../assets/blog-user3.png"
import userBlog4 from "../../assets/blog-user4.png"
import userBlog5 from "../../assets/blog-user5.png"
import userBlog6 from "../../assets/blog-user6.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeTab] = useState("All");

  

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  const swiperRef = useRef(null);

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
  ];

  const testimonials = [
    {
      name: "Sophia Williams",
      title: "Event Organizer",
      message:
        "”Hosting events here is extraordinary. The ambience, décor, and lighting elevate every occasion into something truly special”",
    },
    {
      name: "Daniel Thompson",
      title: "Business Strategist",
      message:
        "”Oceanis Grand Palace is more than a hotel; it is a destination that creates unforgettable memories with every stay”",
    },
    {
      name: "Olivia Brown",
      title: "Art Curator",
      message:
        "”Oceanis Grand Palace is where art and technology converge. Walking through its spaces feels like entering a living gallery”",
    },
    {
      name: "Christopher Evans",
      title: "Hospitality Director",
      message:
        "”The service is beyond exceptional. Guests are not just welcomed they are embraced with warmth and luxury”",
    },
    {
      name: "William Carter",
      title: "Architect & Design Consultant",
      message:
        "”The harmony between tradition and modern innovation here is remarkable. Oceanis Grand Palace sets a new benchmark in design”",
    },
    {
      name: "Emily Johnson",
      title: "Travel Blogger & Influencer",
      message:
        "”Every corner of Oceanis Grand Palace feels cinematic. It’s a place where beauty and comfort coexist perfectly”",
    },
    {
      name: "James Anderson",
      title: "CEO, Global Luxury Travel Group",
      message:
        "”Oceanis Grand Palace is a masterpiece of hospitality. Every detail reflects sophistication and timeless elegance”",
    },
  ];

  return (
    <>
      <div className="hero w-full px-6 sm:px-10 lg:px-[12%] py-20 sm:py-28 lg:py-[200px] flex items-start justify-start bg-[#f9f9f9]">
        <div className="hero-content w-full max-w-5xl flex flex-col gap-6 z-10 relative">
          {/* Badge */}
          <span
            className="text-[#fff] bg-[#36c6c2] 
             w-fit py-2 px-5 
             rounded-full text-base sm:text-lg 
             font-semibold shadow-sm 
             mx-auto sm:mx-0"
          >
            Oceanis Grand Palace
          </span>

          {/* Heading */}
          <h1 className="tagline-text text-lg sm:text-4xl lg:text-5xl font-bold text-[#36c6c2] leading-tight tracking-wide font-[var(--Oswald-font)] text-shadow-white whitespace-nowrap text-center sm:text-left">Experience Light Live Tranquility</h1>

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
        </div>
      </div>

      <div className="py-[80px]">
        <div className="section-title text-center mb-20">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                     bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
          >
            Oceanis Rooms
          </span>
          <h1
            className="mt-6 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_3px_8px_var(--prim-light)] 
                   [text-shadow:2px_2px_0_var(--text-color)]"
          >
            ”Elegance and serenity in every room”
          </h1>
        </div>
      </div>

      <div className="w-full lg:px-[12%] px-[8%] pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="show-rooms rounded-2xl overflow-hidden flex flex-col bg-gradient-to-br from-[rgba(255,255,255,0.45)] to-[rgba(255,255,255,0.25)] backdrop-blur-xl border border-[var(--primary-color)] shadow-lg shadow-inner transition-all duration-500 ease-in-out hover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--text-light)] hover:scale-[1.02]">
              {/* Image Slider */}
              <div className="relative rounded-t-2xl border-b border-[var(--prim-light)]">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-[280px]"
                >
                  {room.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt={`${room.title} ${index + 1}`}
                        className="w-full h-[280px] object-cover transition-opacity duration-500 hover:opacity-90"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Adults & Size Info Bar */}
              <div
                className="bg-gradient-to-r from-[rgba(54,198,194,0.12)] to-[rgba(42,212,170,0.08)] backdrop-blur-md border-t border-[var(--primary-color)] flex justify-center items-center gap-6 py-3 tracking-wide"
              >
                <span className="flex items-center gap-2 text-sm text-[var(--text-light)]">
                  <i className="ri-user-line"></i> Adults: {room.adults}
                </span>
                <span className="flex items-center gap-2 text-sm text-[var(--text-light)]">
                  <i className="ri-aspect-ratio-line"></i> Size: {room.size}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pt-6 pb-6 text-center flex flex-col items-center flex-1">
                <Link to={`/rooms/${room.id}`} className="w-full">
                  <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-2 tracking-wide transition-colors duration-300 hover:text-[var(--text-light)] hover:animate-pulse">
                    {room.title}
                  </h3>
                  <p className="text-md text-[var(--black-color)] max-w-[80%] mx-auto leading-relaxed mb-6 line-clamp-3">
                    {room.description}
                  </p>
                </Link>

                {/* Price & Button */}
                <div className="mt-4 flex items-center justify-between w-full px-2">
                  <p className="text-xl font-bold text-[var(--text-color)] tracking-wide drop-shadow-[0_0_5px_var(--prim-light)]">
                    ${room.price}
                  </p>
                  <button className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xl shadow-md hover:bg-[var(--text-light)] hover:shadow-lg hover:ring-2 hover:ring-[var(--primary-color)] hover:ring-offset-2 hover:ring-offset-[var(--prim-light)] transition-all duration-300 ease-in-out">
                    <i className="ri-bookmark-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about about-1 bg-[#f9f9f9] lg:px-[12%] px-[8%] py-[50px] flex items-center flex-col lg:flex-row justify-between gap-20 relative overflow-hidden">
        <div className="section-title text-start space-y-4 relative z-[9] lg:w-1/2 w-full">
          <span
            className="rounded-full px-6 py-2 font-bricolage tracking-wider text-sm uppercase 
                     bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
          >
            About Oceanis
          </span>
          <h1
            className="mt-6 text-6xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_2px_6px_var(--prim-light)] 
                   [text-shadow:1px_1px_0_var(--text-color)]"
          >
            “Where Grandeur Meets the Ocean”
          </h1>
          <ul className="flex flex-col gap-10">
            {[
              {
                num: "01.",
                title: "Majestic Architecture & Design",
                desc: "Oceanis Grand Palace is inspired by timeless royal architecture, seamlessly blended with modern elegance. Every arch, pillar, and interior detail reflects grandeur, creating the atmosphere of a palace by the ocean.",
              },
              {
                num: "02.",
                title: "Grandeur Suites & Exclusive Spaces",
                desc: "From exclusive suites to magnificent ballrooms, each space is designed to deliver unparalleled luxury. Premium materials, dramatic lighting, and refined layouts emphasize both comfort and sophistication.",
              },
              {
                num: "03.",
                title: "Ocean Serenity & Scenic Harmony",
                desc: "Positioned by the sea, the Grand Palace offers breathtaking views and calming ocean sounds. The harmony of waves, sea breeze, and majestic palace ambiance creates a unique sanctuary for the soul.",
              },
              {
                num: "04",
                title: "Culinary Excellence & Royal Flavors",
                desc: "Oceanis Grand Palace offers a curated dining experience where world-class chefs blend international cuisine with local delicacies. Each dish is crafted with artistry, premium ingredients, and refined presentation transforming every meal into a royal feast by the ocean.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row gap-1 items-start group"
              >
                {/* Nomor urut */}
                <span className="text-xl font-bold text-[var(--primary-color)] bg-[rgba(255,255,255,0.08)] px-4 py-2 rounded-lg shadow-sm group-hover:shadow-[0_0_15px_var(--primary-color)] transition-all duration-300">
                  {item.num}
                </span>

                {/* Konten */}
                <div>
                  <h4 className="text-xl md:text-xl font-semibold mb-2 text-[var(--primary-color)] tracking-wide transition-colors duration-300 group-hover:text-[var(--text-light)] [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
                    {item.title}
                  </h4>
                  <p className="text-base md:text-sm text-[#fff] leading-relaxed max-w-[95%] [text-shadow:1px_1px_4px_rgba(0,0,0,0.6)]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/4 w-full">
          <div className="about-images w-full h-full relative z-[9]">
            <img
              src={about1}
              alt="about-image1"
              className="about-image about-image1"
            />
            <img
              src={about2}
              alt="about-image2"
              className="about-image about-image2"
            />
            <img
              src={about3}
              alt="about-image3"
              className="about-image about-image3"
            />
            <img
              src={about4}
              alt="about-image4"
              className="about-image about-image4"
            />
          </div>
        </div>
      </div>

      <div className="about-2 bg-[var(--prim-light)] px-[6%] md:px-[8%] lg:px-[12%] py-[80px] md:py-[120px] lg:py-[150px] relative overflow-hidden pb-0">
        <div className="about flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20 relative z-[10]">
          {/* Right Hero Image */}
          <div className="w-full lg:w-1/2 relative z-[9]">
            <img
              src={aboutImg2}
              alt="About image"
              className="w-full h-auto max-w-[320px] md:max-w-[480px] lg:max-w-full object-contain relative z-10 drop-shadow-xl mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-[var(--prim-light)] text-[10px] md:text-xs font-medium text-[var(--text-light)] border border-[var(--text-light)] px-3 md:px-4 py-1 rounded-full mb-2 tracking-wide shadow-sm">
              ABOUT US
            </div>

            <h2
              className="mt-2 mb-2 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_3px_8px_var(--prim-light)] 
                   [text-shadow:2px_2px_0_var(--text-color)]"
            >
              “Oceanis Grand Palace”
            </h2>

            <p className="text-[#204f5e] mb-4 leading-relaxed text-sm md:text-base lg:text-lg">
              Oceanis Grand Palace stands as a timeless symbol of luxury and
              harmony. Every detail is carefully curated to deliver more than
              just design it is a journey into comfort, elegance, and
              unforgettable memories. Here, art blends seamlessly with
              technology, creating an atmosphere that feels cinematic,
              immersive, and deeply meaningful.
            </p>
            <p className="text-[#204f5e] mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
              More than just a space, Oceanis Grand Palace is a destination
              where tradition meets innovation. We celebrate the essence of
              classic elegance while embracing modern sophistication, presenting
              a refined experience that remains rooted in authenticity. Every
              interaction, every angle, and every moment is designed to leave a
              lasting impression, inviting guests to discover a world where
              beauty, comfort, and prestige coexist in perfect balance.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium flex items-center gap-2 sm:gap-3 bg-[var(--text-light)] text-[var(--white-color)] transition duration-500 overflow-hidden group transform hover:scale-105 hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 6-9 11-9 11s-9-5-9-11a9 9 0 1118 0z" />
                </svg>
                <span>Get In Touch</span>
              </button>
              <button className="px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium flex items-center gap-2 sm:gap-3 bg-[var(--text-light)] text-[var(--white-color)] transition duration-500 overflow-hidden group transform hover:scale-105 hover:shadow-lg">
                Book Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--prim-light)] w-full">
        <div
          className="w-full lg:w-[95%] mx-auto py-16 rounded-[30px] 
                  bg-[var(--white-color)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
                  relative z-[10] backdrop-blur-xl border border-[var(--prim-light)]"
        >
          <div className="text-center mb-12">
            <span
              className="rounded-full px-8 py-3 font-bricolage tracking-wider text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] shadow-md 
                   border border-[var(--text-light)]"
            >
              Reviews Oceanis
            </span>
            <h1
              className="mt-6 text-5xl font-oswald font-semibold text-[var(--primary-color)] 
                   drop-shadow-[0_3px_8px_var(--prim-light)] 
                   [text-shadow:2px_2px_0_var(--text-color)]"
            >
              “Stories of unforgettable journeys”
            </h1>

            {/* Avatar Navigation */}
            <div className="flex items-center justify-center space-x-6 mb-8 mt-8">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`avatar${index}`}
                  className={`cursor-pointer rounded-full object-cover border-2 
                        border-[var(--primary-color)] shadow-lg 
                        transition-all duration-500 ease-in-out 
                        ${activeIndex === index ? "w-20 h-20 scale-110" : "w-14 h-14 opacity-70"}`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideToLoop(index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Swiper Section */}
          <div className="max-w-4xl mx-auto relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".costum-next",
                prevEl: ".costum-prev",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center px-8">
                    <div className="text-[var(--text-color)] text-5xl mb-6 animate-pulse">
                      ”
                    </div>
                    <p
                      className="text-gray-700 text-lg italic max-w-2xl leading-relaxed 
             bg-[var(--prim-light)] px-6 py-4 rounded-2xl 
             shadow-[0_0_15px_var(--primary-color)] 
             border border-[var(--prim-light)] backdrop-blur-sm"
                    >
                      {testimonial.message}
                    </p>
                    <div className="mt-6">
                      <h4
                        className="font-bold text-xl text-[var(--black-color)] 
                               [text-shadow:1px_1px_0_var(--text-light)]"
                      >
                        {testimonial.name}
                      </h4>
                      <span className="text-sm uppercase tracking-wider text-gray-500">
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="blog blog-2 bg-[#eafbfb] lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-10 z-[9] relative overflow-hidden pt-[20px]">
        <span
          className="rounded-full mt-6 px-8 py-3 font-bricolage tracking-wider text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] shadow-md 
                   border border-[var(--text-light)]"
        >
          Oceanis Blog
        </span>
        <h1 className="mt-2 text-2xl sm:text-5xl font-oswald font-semibold text-[var(--primary-color)] drop-shadow-[0_3px_8px_var(--prim-light)] [text-shadow:2px_2px_0_var(--text-color)] text-center sm:text-left mx-auto sm:mx-0 leading-snug">“Stories crafted in elegance and prestige”</h1>


        {/* Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-left">
          <div
            className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog1}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog1}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Paul T.
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">24.09.2025</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Embrace the Ocean Breeze: Your Next Luxury Escape
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                Discover why the serene beauty of the beach is the perfect
                setting for your next unforgettable journey.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
          <div
           className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog2}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog2}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Shopia L.
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">12.10.2025</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Sunset Serenity: A Journey into Tranquility
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                Experience the calming embrace of Oceanis sunsets, where golden
                skies meet gentle waves, creating timeless memories.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
          <div
            className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog3}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog3}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Daniel R.
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">05.11.2025</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Culinary Bliss: Tastes of the Ocean
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                Indulge in exquisite flavors inspired by the sea. Oceanis Grand
                Palace offers a dining experience that awakens the senses.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
          <div
           className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog4}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog4}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Isabelle M.
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">18.12.2025</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Wellness Retreat: Rejuvenate by the Waves
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                Restore your mind and body with Oceanis spa rituals, blending
                natural elements and luxurious comfort.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
          <div
            className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog5}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog5}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Marco V.
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">02.01.2026</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Adventure Awaits: Explore the Oceanis Coast
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                From hidden coves to vibrant marine life, Oceanis offers
                adventures that spark curiosity and wonder.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
          <div
           className="bg-[var(--white-color)] rounded-[24px] overflow-hidden border border-[var(--primary-color)] shadow-inner transition-all duration-500 ease-in-outhover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--primary-color)] hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] group p-5 backdrop-blur-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-[20px]">
              <img
                src={blog6}
                alt="Oceanis blog image"
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-transparent rounded-b-[20px]">
              {/* Author & Date */}
              <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                <img
                  src={userBlog6}
                  alt="author avatar"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--primary-color)] shadow-sm"
                />
                <span className="font-semibold text-[var(--text-color)]">
                  Lucas T..
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="italic text-gray-400">02.0.2026</span>
              </div>

              {/* Title */}
              <h3
                className="font-oswald font-semibold text-xl text-[var(--black-color)] mb-3 leading-snug 
                     [text-shadow:1px_1px_0_var(--text-light)]"
              >
                Oceanis Wellness: Strength Meets Serenity
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
              >
                Discover a new dimension of fitness at Oceanis Coast. Train with
                world-class equipment in a luxurious space.
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
              >
                Read More
                <span className="ml-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
