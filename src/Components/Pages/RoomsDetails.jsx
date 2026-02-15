import React, { useState } from "react";
import { Link } from "react-router-dom";
import roomsImg from "../../assets/Rooms-bg.jpg";

import RoomsData from "../../Rooms.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RoomsDetails = () => {
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
            Get Your Rooms
          </h1>
        </div>
      </div>
    </>
  );
};

export default RoomsDetails;
