import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookmark from "../../../src/assets/Bookmark.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`px-[8%] h-[100px] w-full fixed top-5 left-0 lg:left-10 
        rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] 
        transition-all duration-300 
        ${isScrolled ? "bg-[#111111] shadow-xl scale-[1.01]" : "bg-white shadow-md"}`}
      >
        <Link to="/">
          <img
            src="/Logo-Oceanis.png"
            alt="Oceanis Hotel Logo"
            className="h-[90px] w-auto object-contain transition-transform duration-300 hover:scale-105 -translate-y-3"
          />
        </Link>

        {/* Menu Navbar */}
        <ul
          className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 
  w-full lg:w-auto bg-white md:pl-5 md:py-4 lg:bg-transparent z-50 
  transition-all duration-300 ease-in-out overflow-hidden 
  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} 
  lg:max-h-full lg:opacity-100 gap-10 text-sm font-medium font-oswald`}
        >
          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              Rooms
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="group relative uppercase text-base opacity-70 md:opacity-100 
      transition-all duration-300 px-4 py-2 lg:px-0 lg:py-0 
      hover:scale-110 hover:text-transparent hover:bg-clip-text 
      hover:bg-gradient-to-r hover:from-[#36c6c2] hover:to-[#36c6c2]"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#36c6c2] to-[#36c6c2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn custom-btn bg-[#bea15d] flex items-center 
            lg:py-4 lg:px-3 py-4 px-4 rounded-full gap-3 text-white uppercase tracking-widest 
            shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={bookmark}
              alt="bookmark"
              className="invert brightness-0"
            />
            <span className="hidden lg:block">Reservation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`ri-menu-line text-4xl transition ${
                  isOpen ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`ri-close-line text-4xl transition ${
                  isOpen ? "block" : "hidden"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {/* Modal Form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,.85)] backdrop-blur-sm">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(54,198,194,0.4)]">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 rounded-full w-10 h-10 flex items-center justify-center text-lg text-black font-bold bg-[#eafbfb] shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#bea15d] hover:to-[#bea15d] hover:text-white hover:shadow-lg hover:rotate-90"
              >
                <span className="bi bi-x-lg"></span>
              </button>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-8 text-[#204f5e] tracking-wide text-center">
                <i className="ri-search-line mr-2 text-[#36c6c2]"></i> Search
              </h2>

              {/* Form */}
              <form className="space-y-6">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                    <i className="ri-calendar-line text-[#36c6c2]"></i> Check-in
                  </label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    placeholderText="Select Check-in date"
                    className="w-full p-3 h-14 bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none shadow-inner transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                    dateFormat="dd/MM/yyyy"
                  />
                 
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                    <i className="ri-calendar-event-line text-[#36c6c2]"></i> Check-Out
                  </label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    placeholderText="Select Check-out date"
                    className="w-full p-3 h-14 bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none shadow-inner transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-sm font-semibold text-[#204f5e] uppercase mb-2">
                   <i className="ri-user-line text-[#36c6c2]"></i> Adults
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min="1"
                    className="w-full p-3 h-14 bg-[#eafbfb] rounded-lg border border-[#bea15d] outline-none transition-all duration-300 focus:ring-2 focus:ring-[#bea15d] hover:shadow-md"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#bea15d] to-[#bea15d] text-white py-3 px-5 rounded-full w-full uppercase tracking-widest font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Search Now
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
