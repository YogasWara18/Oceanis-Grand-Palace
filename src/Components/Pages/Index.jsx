import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import service1 from "../../assets/Service1.png";
import service2 from "../../assets/Service2.png";
import service3 from "../../assets/Service3.png";
import service4 from "../../assets/Service4.png";

import feature1 from "../../assets/feature-icon-1.svg";
import feature2 from "../../assets/feature-icon-2.svg";
import feature3 from "../../assets/feature-icon-3.svg";
import feature4 from "../../assets/feature-icon-4.svg";
import feature5 from "../../assets/feature-icon-5.svg";
import feature6 from "../../assets/feature-icon-6.svg";

import element1 from "../../assets/Element1.png";
import element2 from "../../assets/Element2.png";
import element4 from "../../assets/Element3.png";

function Index() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <>
      <div className="hero w-full lg:px-[12%] px-[8%] py-[120px] flex items-start justify-start bg-[#f9f9f9]">
        <div className="hero-content w-full max-w-5xl flex flex-col gap-6 z-10 relative">
          {/* Badge */}
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-4 rounded-full text-sm lg:text-base font-semibold shadow-sm">
            Oceanis Grand Palace
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold text-[#204f5e] leading-tight drop-shadow-md">
            A Palace of Light and Tranquility
          </h1>

          {/* Reservation Form */}
          <form className="w-full flex flex-wrap items-center gap-4 bg-white/60 backdrop-blur-md rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-[1.02]">
            {/* Check-in */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#204f5e] mb-2 uppercase">
                <i className="ri-calendar-line text-[#36c6c2]"></i> Check-in
              </label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select date"
                className="p-3 h-[50px] w-[200px] bg-[#eafbfb]/80 rounded-md border border-[#bea15d] outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#204f5e] mb-2 uppercase">
                <i className="ri-calendar-event-line text-[#36c6c2]"></i>{" "}
                Check-out
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select date"
                className="p-3 h-[50px] w-[200px] bg-[#eafbfb]/80 rounded-md border border-[#bea15d] outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Adults */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#204f5e] mb-2 uppercase">
                <i className="ri-user-line text-[#36c6c2]"></i> Adults
              </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                className="p-3 h-[50px] w-[120px] bg-[#eafbfb]/80 rounded-md border border-[#bea15d] outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
              />
            </div>

            {/* Rooms */}
            <div className="flex flex-col w-full sm:w-auto">
              <label className="text-sm font-semibold text-[#204f5e] mb-2 uppercase">
                <i className="ri-home-2-line text-[#36c6c2]"></i> Rooms
              </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                className="p-3 h-[50px] w-[120px] bg-[#eafbfb]/80 rounded-md border border-[#bea15d] outline-none focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end translate-y-4 translate-x-40 w-full sm:w-auto">
              <button
                type="submit"
                className="bg-transparent border border-[#bea15d] text-[#204f5e] 
               rounded-md px-6 py-2 font-semibold 
               shadow-sm transition-all duration-300 
               hover:shadow-md hover:scale-105 hover:bg-[#bea15d]/10"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Index;
