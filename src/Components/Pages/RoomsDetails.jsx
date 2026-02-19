import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import roomsImg from "../../../public/RoomDetails-bg.jpg";

import RoomsData from "../../Rooms.json";

import amenitis1 from "../../../public/Amenities/Amenitis1.png";
import amenitis2 from "../../../public/Amenities/Amenitis2.png";
import amenitis3 from "../../../public/Amenities/Amenitis3.png";
import amenitis4 from "../../../public/Amenities/Amenitis4.png";
import amenitis5 from "../../../public/Amenities/Amenitis5.png";
import amenitis6 from "../../../public/Amenities/Amenitis6.png";

import feature1 from "../../../public/BookDetailsGIF/Feature1.gif";
import feature2 from "../../../public/BookDetailsGIF/Feature2.gif";
import feature3 from "../../../public/BookDetailsGIF/Feature3.gif";
import feature4 from "../../../public/BookDetailsGIF/Feature4.gif";
import feature5 from "../../../public/BookDetailsGIF/Feature5.gif";
import feature6 from "../../../public/BookDetailsGIF/Feature6.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RoomsDetails = () => {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);

  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // hitung total harga
  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
        )
      : 0;
  const totalPrice = nights > 0 ? room.price * nights : room.price;

  if (!room) {
    return <div className="text-center py-20 text-xl">Room not Found?</div>;
  }

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl -translate-y-12 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-20 xl:translate-y-5 font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] drop-shadow-[0_3px_8px_var(--primary-color)] text-center px-4"
            style={{
              textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
            }}
          >
            Get Your Rooms
          </h1>
        </div>
      </div>

      {/* Show Rooms Details */}
      <div className="w-full min-h-screen py-[100px] px-[6%] lg:px-[10%] bg-[var(--prim-light)] bg-gradient-to-b from-[var(--prim-light)] to-white">
        <h2
          className="text-3xl sm:text-4xl mb-4 md:text-5xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)] border-b-2 border-[var(--text-color)] pb-4"
        >
          {room.title}
        </h2>

        <div className="w-full flex flex-col lg:flex-row gap-12">
          {/* Left side: Swiper + Features + Amenities */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            {/* Swiper */}
            <div className="p-6 rounded-3xl bg-white shadow-2xl relative overflow-hidden group">
              <Swiper
                spaceBetween={30}
                speed={1000}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="w-full h-[400px] md:h-[480px] bg-white shadow-lg rounded-2xl overflow-hidden costum-swiper"
              >
                {room.photos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={photo}
                      alt={`${room.title} ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Features */}
            <div>
              <h2
                className="text-3xl mb-4 sm:text-4xl md:text-4xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
              >
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* 6 features inline */}
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature1}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    Air Conditioned Comfort
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature2}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    High Speed Wifi
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature3}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    Smart Entertainment
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature4}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    Pet Friendly Options
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature5}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    Complimentary Breakfast
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-all">
                  <img
                    src={feature6}
                    className="w-[45px] h-[45px] p-2 bg-[var(--prim-light)] rounded-xl"
                    alt=""
                  />
                  <p className="font-medium text-[var(--black-color)] text-sm md:text-base font-arimo truncate">
                    Ocean Adventure Access
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2
                className="text-3xl mb-4 sm:text-4xl md:text-4xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
              >
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {/* 6 amenities inline */}
                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis1}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Elegant Bedrooms
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    King-size or queen-size beds with premium linen.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis2}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Luxury Bathrooms
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    Marble finishes, rain showers, and jacuzzi options.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis3}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Private Balconies
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    Scenic city or ocean views with outdoor seating.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis4}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Living & Lounge Areas
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    Spacious suites with separate living rooms.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis5}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Butler Service
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    24-hour personalized assistance for VIP guests.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 flex flex-col items-start rounded-xl shadow-md hover:scale-105 transition-all">
                  <img
                    src={amenitis6}
                    alt="amenitis"
                    className="w-[45px] h-[45px] mb-3 p-2 bg-[var(--prim-light)] rounded-md"
                  />
                  <h2 className="text-base md:text-lg font-semibold font-oswald text-[var(--text-color)]">
                    Private Pools & Villas
                  </h2>
                  <p className="mt-1 font-arimo text-sm text-gray-700 leading-snug">
                    Oceanfront villas with direct beach access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Booking & Description */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Description */}
            <div className="flex flex-col gap-3">
              <h2
                className="text-2xl mb-5 md:text-3xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
              >
                Description
              </h2>
              <p className="font-arimo text-sm md:text-base text-gray-700 leading-snug">
                Oceanis Grand Palace presents a sanctuary of timeless luxury,
                blending cinematic interiors with modern comfort and Indonesian
                artistry.
              </p>
              <p className="font-arimo text-sm md:text-base text-gray-700 leading-snug">
                Each room is designed with premium bedding, elegant furnishings,
                and panoramic views that create an exclusive and memorable stay.
              </p>
              <p className="font-arimo text-sm md:text-base text-gray-700 leading-snug">
                Guests enjoy seamless connectivity, refined dining, and
                personalized services, ensuring both leisure and business
                travelers feel at home.
              </p>
              <p className="font-arimo text-sm md:text-base text-gray-700 leading-snug">
                Whether for a romantic escape, a family holiday, or a
                distinguished business trip, Oceanis Grand Palace embodies
                sophistication and warmth.
              </p>
              <p className="font-arimo text-sm md:text-base text-gray-700 leading-snug">
                Every stay is enriched with thoughtful amenities and attentive
                hospitality, allowing guests to immerse themselves in a refined
                atmosphere where luxury and Indonesian artistry harmoniously
                converge.
              </p>
            </div>

            {/* Booking Form */}
            <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
              <h2
                className="text-2xl md:text-3xl font-bold font-[var(--Oswald-font)] flex items-center gap-6 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)] mb-4"
              >
                Book This Room
              </h2>
              <form className="flex flex-col gap-4">
                {/* Guest Name */}
                <div>
                  <label className="block text-sm font-arimo text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-arimo text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  />
                </div>

                {/* Check-in / Check-out */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-arimo text-gray-700 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-arimo text-gray-700 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-arimo text-gray-700 mb-1">
                    Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={room.adults}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max {room.adults} adults
                  </p>
                </div>

                {/* Room Type (langsung dari JSON) */}
                <div>
                  <label className="block text-sm font-arimo text-gray-700 mb-1">
                    Room Type
                  </label>
                  <select
                    value={room.id}
                    disabled
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
                  >
                    <option>
                      {room.title} - ${room.price}/night
                    </option>
                  </select>
                </div>

                {/* Price Display */}
                <div className="flex items-center justify-between bg-[var(--prim-light)] rounded-lg px-4 py-3">
                  <span className="font-oswald text-[var(--text-color)] text-lg">
                    Total Price
                  </span>
                  <span className="font-bold text-[var(--black-color)]">
                    ${totalPrice}
                  </span>
                </div>

                {/* Submit Button */}
                <Link to={`/checkout/${room.id}`}>
                  <button
                    type="submit"
                    className=" w-full px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 sm:gap-3 
    bg-[var(--text-light)] text-[var(--white-color)] transition duration-500 overflow-hidden group 
    transform hover:scale-105 hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta px-6 sm:px-10 md:px-[50px] lg:px-[80px] bg-[var(--prim-light)] border-t-4 border-[var(--text-light)]">
        <div className="py-10 sm:py-14 md:py-[40px] lg:py-[60px] rounded-xl bg-white shadow-xl flex items-center justify-center">
          <div className="section-title text-center space-y-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            {/* Badge */}
            <span
              className="rounded-full px-4 sm:px-6 py-2 font-oswald tracking-wider text-xs sm:text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
            >
              Oceanis Grand Palace Concierge
            </span>

            {/* Heading */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--Oswald-font)] 
                   text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                   drop-shadow-[0_3px_8px_var(--prim-light)] [text-shadow:2px_2px_0_var(--text-color)]"
            >
              Always Here for You
            </h1>

            {/* Description */}
            <p className="font-arimo text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[95%] sm:max-w-3xl mx-auto">
              At Oceanis Grand Palace, every guest is embraced with seamless
              support and refined hospitality. Whether day or night, our team
              ensures your journey remains effortless, luxurious, and truly
              memorable.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link to={`/checkout/${room.id}`}>
                <button
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-oswald font-medium flex items-center justify-center gap-2 sm:gap-3 
            bg-[var(--text-light)] text-[var(--white-color)] transition duration-500 overflow-hidden group 
            transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recommend */}
      <div className="w-full py-[100px] px-[8%] lg:px-[12%] bg-[var(--prim-light)]">
        {/* Section Title */}
        <div className="section-title text-center space-y-4">
          <span
            className="rounded-full px-6 py-2 font-oswald tracking-wider text-sm uppercase 
                 bg-[var(--prim-light)] text-[var(--text-color)] border border-[var(--text-light)] shadow-md"
          >
            Recommendations
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--Oswald-font)] 
                 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                 drop-shadow-[0_3px_8px_var(--prim-light)] [text-shadow:2px_2px_0_var(--text-color)]"
          >
            Curated for Your Comfort
          </h1>
        </div>

        {/* Swiper Recommendations */}
        <div className="mt-10">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              1399: { slidesPerView: 3.5 },
              1199: { slidesPerView: 2.5 },
              991: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            style={{ padding: "20px 0" }}
          >
            {RoomsData.map((room) => (
              <SwiperSlide key={room.id}>
                <div
                  className="show-rooms h-full rounded-2xl overflow-hidden flex flex-col 
            bg-gradient-to-br from-[rgba(255,255,255,0.45)] to-[rgba(255,255,255,0.25)] 
            backdrop-blur-xl border border-[var(--primary-color)] shadow-lg shadow-inner 
            transition-all duration-500 ease-in-out 
            hover:shadow-[0_0_25px_var(--primary-color),0_0_50px_var(--primary-color)] 
            hover:border-[var(--text-light)] hover:scale-[1.02]"
                >
                  {/* Image Slider */}
                  <div className="relative rounded-t-2xl border-b border-[var(--prim-light)]">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="w-full h-[220px] sm:h-[240px] md:h-[260px]"
                    >
                      {room.photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={photo}
                            alt={`${room.title} ${index + 1}`}
                            className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition-opacity duration-500 hover:opacity-90"
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
                    <div className="mt-auto flex items-center justify-between w-full px-2">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-color)] tracking-wide drop-shadow-[0_0_5px_var(--prim-light)]">
                        ${room.price}
                      </p>
                      <button className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow-md hover:bg-[var(--text-light)] hover:shadow-lg hover:ring-2 hover:ring-[var(--primary-color)] hover:ring-offset-2 hover:ring-offset-[var(--prim-light)] transition-all duration-300 ease-in-out">
                        <i className="ri-bookmark-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RoomsDetails;
