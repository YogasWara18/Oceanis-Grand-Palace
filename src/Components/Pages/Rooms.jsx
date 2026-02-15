import React, { useState } from "react";
import roomsImg from "../../assets/Rooms-bg.jpg";

import RoomsData from "../../Rooms.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Rooms = () => {
  const [activeTab, setactiveTab] = useState("All");

  // Tambahkan di atas komponen Rooms
  const tabs = [
    "All",
    "Economy",
    "Deluxe",
    "Suite",
    "Family",
    "Presidential",
    "Luxury",
  ];
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
          className="w-full h-auto object-contain"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
        -translate-y-12 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-20 xl:-translate-y-13
        font-oswald font-semibold
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
        <div className="w-full lg:px-[12%] px-[8%] py-[120px]">
          <div className="rooms-search-info flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <h2
              className="text-5xl md:text-5xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 
             text-[var(--text-color)] tracking-wide border-b-2 border-[var(--text-color)] pb-4"
            >
              Search Results
              <span
                className="bg-[var(--primary-color)] px-6 py-3 rounded-lg 
               text-[var(--white-color)] text-3xl md:text-4xl font-[var(--Arimo-font)] shadow-xl 
               transition duration-300 hover:bg-[var(--secondary-color)] hover:scale-105"
              >
                {filteredRooms.length}
              </span>
            </h2>

            {/* Tabs di kanan */}
            <div className="search-tabs flex justify-end gap-4 translate-y-7">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setactiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-[var(--Arimo-font)] text-sm tracking-wide uppercase 
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
        <div className="w-100 lg:px-[12%] px-[8%] pb-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms"
              >
                <div className="relative">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full h-[280px] costum-swiper"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
