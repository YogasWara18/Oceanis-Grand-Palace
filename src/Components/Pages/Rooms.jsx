import React, { useState } from "react";
import roomsImg from "../../assets/Rooms-bg.jpg";

import RoomsData from "../../Rooms.json";

const Rooms = () => {
    const [activeTab, setactiveTab] = useState('All');

    const tab = ['All', 'Economy', 'Standard', 'Luxury'];

    const filteredRooms = activeTab === 'All'
        ? RoomsData
        : RoomsData.filter(room => room.type === activeTab);

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
            Choose Your Oceanis
          </h1>
        </div>
      </div>

      <div className="section-wrapper">
        {/* Rooms Search Info */}
        <div className="w-100 lg:px-[12%] px-[8%] py-[150px]">
            <div className="rooms-search-info flex flex-col md:flex-row gap-5 md:gap-0">
                <div className="md:w-1/2"/>
                <h2 className="">Search Results <span>{filteredRooms.length}</span></h2>
            </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
