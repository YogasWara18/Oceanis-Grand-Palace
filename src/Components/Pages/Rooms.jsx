import React, { useState } from "react";
import { Link } from "react-router-dom";
import roomsImg from "../../assets/Rooms-bg.jpg";

import RoomsData from "../../Rooms.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Rooms = () => {
  const [activeTab, setactiveTab] = useState("All");

  // Tambahkan di atas komponen Rooms
  const tabs = ["All", "Economy", "Deluxe", "Suite", "Family", "Presidential"];
  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
        <img
          src={roomsImg}
          alt="Section-about"
          className="w-full h-auto object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
        -translate-y-12 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-20 xl:-translate-y-28       font-oswald font-semibold
        text-transparent bg-clip-text
        bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]
        drop-shadow-[0_3px_8px_var(--primary-color)]
        text-center px-4
      "
            style={{
              textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
            }}
          >
            Choose Your Rooms
          </h1>
        </div>
      </div>

      <div className="section-wrapper bg-[var(--white-color)]">
        {/* Rooms Search Info */}
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-[12%] py-[80px] md:py-[120px]">
          <div className="rooms-search-info flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)] border-b-2 border-[var(--text-color)] pb-4">
              Search Results
              <span className="bg-[var(--primary-color)] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-[var(--white-color)] text-2xl sm:text-3xl md:text-4xl font-[var(--Arimo-font)] shadow-xl transition duration-300 hover:bg-[var(--secondary-color)] hover:scale-105">
                {filteredRooms.length}
              </span>
            </h2>

            {/* Tabs */}
            <div
              className="search-tabs flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-3 md:gap-4 
                overflow-x-auto md:overflow-visible translate-y-4 md:translate-y-7"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setactiveTab(tab)}
                  className={`px-4 md:px-6 py-2 rounded-md font-[var(--Arimo-font)] text-xs sm:text-sm tracking-wide uppercase 
                  transition duration-300 shadow-md relative
        ${
          activeTab === tab
            ? "bg-[var(--primary-color)] text-[var(--white-color)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[var(--text-color)]"
            : "bg-transparent border border-[var(--primary-color)] text-[var(--text-color)] hover:bg-[var(--prim-light)] hover:text-[var(--black-color)]"
        }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rooms Info */}
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-[12%] pb-[80px] md:pb-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="show-rooms rounded-2xl overflow-hidden flex flex-col bg-gradient-to-br from-[rgba(255,255,255,0.45)] to-[rgba(255,255,255,0.25)] backdrop-blur-xl border border-[var(--primary-color)] shadow-lg shadow-inner transition-all duration-500 ease-in-out hover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] hover:border-[var(--text-light)] hover:scale-[1.02]"
              >
                {/* Image Slider */}
                <div className="relative rounded-t-2xl border-b border-[var(--prim-light)]">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px]"
                  >
                    {room.photos.map((photo, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={photo}
                          alt={`${room.title} ${index + 1}`}
                          className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover transition-opacity duration-500 hover:opacity-90"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Adults & Size Info */}
                <div className="bg-gradient-to-r from-[rgba(54,198,194,0.12)] to-[rgba(42,212,170,0.08)] backdrop-blur-md border-t border-[var(--primary-color)] flex justify-center items-center gap-4 sm:gap-6 py-3 tracking-wide">
                  <span className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-light)]">
                    <i className="ri-user-line"></i> Adults: {room.adults}
                  </span>
                  <span className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-light)]">
                    <i className="ri-aspect-ratio-line"></i> Size: {room.size}
                  </span>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 pt-6 pb-6 text-center flex flex-col items-center flex-1">
                  <Link to={`/rooms/${room.id}`} className="w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-2 tracking-wide transition-colors duration-300 hover:text-[var(--text-light)] hover:animate-pulse">
                      {room.title}
                    </h3>
                    <p className="text-sm sm:text-md text-[var(--black-color)] max-w-[90%] mx-auto leading-relaxed mb-6 line-clamp-3">
                      {room.description}
                    </p>
                  </Link>

                  {/* Price & Button */}
                  <div className="mt-4 flex items-center justify-between w-full px-2">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-color)] tracking-wide drop-shadow-[0_0_5px_var(--prim-light)]">
                      ${room.price}
                    </p>
                    <button className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow-md hover:bg-[var(--text-light)] hover:shadow-lg hover:ring-2 hover:ring-[var(--primary-color)] hover:ring-offset-2 hover:ring-offset-[var(--prim-light)] transition-all duration-300 ease-in-out">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
