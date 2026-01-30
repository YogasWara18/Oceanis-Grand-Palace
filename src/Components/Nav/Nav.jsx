import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bookmark from "../../../src/assets/Bookmark.gif";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setIsDate] = useState(null);
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
        className={`bg-white px-[8%] h-[100px] w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] transition-all duration-300 ${isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"}`}
      >
        <Link to="/">
          <Image
            src="/Logo-Oceanis.png" 
            alt="Oceanis Hotel Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Menu Navbar */}
        <ul className={`menu flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white md:pl-5 md:py-4 lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} lg:max-h-full lg-opacity-100 gap-10 text-sm font-medium`}>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">Home</Link>
            </li>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">About</Link>
            </li>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">Services</Link>
            </li>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">Rooms</Link>
            </li>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">Blog</Link>
            </li>
            <li>
                <Link to='/' className="uppercase text-base opacity-70 hover:opacity-100 md:opacity-100 transition px-4 py-2 lg:px-0 lg:py-0">Contact</Link>
            </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
            <button
                onClick={() => setIsModalOpen(true)}
                className="btn custom-btn bg-[#ecb934] flex items-center lg:py-6 lg:px-16 py-4 px-4 rounded-full gap-3 text-white uppercase tracking-widest"
            >
                <img src={bookmark} alt="bookmark" className="invert brightness-0"/>
                <span className="hidden lg:block">Reservation Now</span>
            </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
