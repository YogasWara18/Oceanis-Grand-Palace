import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import checkoutImg from "../../assets/Checkout-bg.jpg";

import RoomsData from "../../Rooms.json";

import amenitis1 from "../../assets/Amenitis1.png";
import amenitis2 from "../../assets/Amenitis2.png";
import amenitis3 from "../../assets/Amenitis3.png";
import amenitis4 from "../../assets/Amenitis4.png";
import amenitis5 from "../../assets/Amenitis5.png";
import amenitis6 from "../../assets/Amenitis6.png";

import feature1 from "../../assets/feature1.gif";
import feature2 from "../../assets/feature2.gif";
import feature3 from "../../assets/feature3.gif";
import feature4 from "../../assets/feature4.gif";
import feature5 from "../../assets/feature5.gif";
import feature6 from "../../assets/feature6.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Checkout = () => {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);

  if (!room) {
    return <div className="text-center py-20 text-xl">Room not Found?</div>;
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
        <img
          src={checkoutImg}
          alt="Section-about"
          className="w-full h-auto object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl -translate-y-12 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-20 xl:translate-y-5 font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] drop-shadow-[0_3px_8px_var(--primary-color)] text-center px-4"
            style={{
              textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
            }}
          >
            Booking Confirmation
          </h1>
        </div>
      </div>
      {/* Booking Content */}
      <div className="py-[150px] px-[8%] w-full bg-[var(--prim-light)]">
        <div className="bg-white rounded-3xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start border-t-4 border-[var(--text-light)]">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-[var(--Oswald-font)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mb-6 drop-shadow-[0_3px_8px_var(--prim-light)]">
              Confirm & Payment
            </h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Payment Method
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none"
                  required
                >
                  <option value="">Select a method</option>
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-full font-oswald font-medium bg-[var(--text-light)] text-[var(--white-color)] transition duration-500 transform hover:scale-105 hover:shadow-lg"
              >
                <i className="ri-bookmark-line mr-2"></i> Confirm Booking
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="bg-gradient-to-br from-[var(--prim-light)] to-[rgba(255,255,255,0.85)] backdrop-blur-2xl rounded-3xl shadow-xl p-8 space-y-6 border border-[var(--primary-color)] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <img
              src={room.photos[0]}
              alt={room.title}
              className="rounded-2xl mb-6 w-full h-[240px] object-cover shadow-md transition-transform duration-500 hover:scale-[1.03]"
            />

            <div className="flex justify-between text-sm text-[var(--text-light)] mb-4 px-1 mt-2 font-[var(--Arimo-font)] tracking-wide">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-[var(--primary-color)]"></i>
                Adults: {room.adults}
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-expand-left-right-line text-[var(--primary-color)]"></i>
                Size: {room.size}
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[var(--primary-color)] mt-3 font-[var(--Oswald-font)] tracking-wide">
              {room.title}
            </h3>

            <div className="mt-6 space-y-3 text-sm text-[#204f5e] border-t border-[var(--secondary-color)] pt-6 font-[var(--Arimo-font)]">
              <p className="flex justify-between">
                <span>Check In Date:</span>
                <span>2025-07-03</span>
              </p>
              <p className="flex justify-between">
                <span>Check Out Date:</span>
                <span>2025-07-04</span>
              </p>
              <p className="flex justify-between">
                <span>Total Nights:</span>
                <span>1</span>
              </p>
              <p className="flex justify-between font-bold text-lg">
                <span>Total Cost:</span>
                <span className="text-[var(--primary-color)] font-[var(--Oswald-font)] tracking-wide">
                  ${room.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-gradient-to-br from-[var(--prim-light)] to-[rgba(255,255,255,0.9)] backdrop-blur-2xl rounded-3xl p-10 w-[90%] max-w-md shadow-2xl text-center relative border border-[var(--primary-color)] transition-all duration-500">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-5 font-[var(--Oswald-font)] tracking-wide">
              Booking Confirmed!
            </h2>

            <p className="text-[var(--color-text)] font-[var(--Arimo-font)] leading-relaxed">
              Thank you for your reservation <br />A confirmation mail has been
              sent to you
            </p>

            <button
              className="mt-8 bg-[var(--text-light)] hover:scale-105 text-white px-8 py-3 rounded-full font-[var(--Oswald-font)] tracking-wide shadow-md transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>

            <button
              className="absolute top-4 right-5 text-[var(--text-light)] hover:text-[var(--black-color)] text-2xl transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
