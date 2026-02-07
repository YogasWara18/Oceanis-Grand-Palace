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
      <div className="hero w-full lg:px-[12%] px-[8%] py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex-col gap-4 z-9 relative">
          <span className="text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base">
            Oceanis Grand Place
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] mb-5">
            A Palace <br /> of Light and Tranquility.
          </h1>

          <form className="w-full flex justify-between items-center gap-2 bg-white contact-form p-2">
            {/* Check-in & Check-out */}
            <div className="flex gap-6 w-full">
              {/* Check-in */}
              <div className="relative input-box">
                <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                  <i className="ri-calendar-line text-[#36c6c2]"></i> Check-in
                </label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Select Check-in date"
                  className="w-auto xl-w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none shadow-inner transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Check-out */}
              <div className="relative input-box">
                <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                  <i className="ri-calendar-event-line text-[#36c6c2]"></i>{" "}
                  Check-Out
                </label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Select Check-out date"
                  className="w-auto xl-w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none shadow-inner transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            {/* Adults */}
            <div className="relative input-box">
              <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                <i className="ri-user-line text-[#36c6c2]"></i> Adults
              </label>
              <input
                type="number"
                placeholder="0"
                min="1"
                className="w-auto xl-w-[350px] p-3 h-[60px] bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#bea15d] to-[#bea15d] text-white rounded-full text-2xl w-xl-[100px] h-xl-[100px] w-[80px] h-[80px] tracking-widest font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
          <p className="text-[#5a8695] text-base">We celebrate splendor, we unveil serenity.</p>
        </div>
      </div>
    </>
  );
}

export default Index;
