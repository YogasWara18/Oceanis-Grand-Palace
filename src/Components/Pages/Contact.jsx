import React from "react";

import contactImg from "../../assets/Contact-img.jpg";

function Contact() {
  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
        <img
          src={contactImg}
          alt="Section-about"
          className="w-full h-auto object-cover"
        />
      </div>

    <section className="bg-[var(--prim-light)] py-[60px] sm:py-[80px] md:py-[100px] w-full px-6 sm:px-10 md:px-[100px]">
  <div className="w-full px-4 sm:px-[5%] bg-white rounded-[20px] border border-[var(--primary-color)] shadow-xl relative z-[10] py-10 sm:py-16 md:py-20">
    <form className="space-y-8">
      <h2 className="text-2xl sm:text-3xl -translate-y-6 sm:-translate-y-10 font-bold font-[var(--Oswald-font)] mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] drop-shadow-[0_3px_8px_var(--prim-light)] [text-shadow:2px_2px_0_var(--text-color)] text-center border-b-2">
        Contact Us
      </h2>

      {/* Grid untuk input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs sm:text-sm font-semibold uppercase text-[var(--text-color)]">
            First Name
          </label>
          <div className="flex items-center bg-[var(--prim-light)] border border-[var(--primary-color)] rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-[var(--secondary-color)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="w-full bg-transparent outline-none text-[#204f5e] placeholder:text-[#204f5e] text-sm sm:text-base"
              required
            />
            <i className="ri-user-line text-[#204f5e] text-lg sm:text-xl ml-2 animate-pulse"></i>
          </div>
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs sm:text-sm font-semibold uppercase text-[var(--text-color)]">
            Last Name
          </label>
          <div className="flex items-center bg-[var(--prim-light)] border border-[var(--primary-color)] rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-[var(--secondary-color)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="w-full bg-transparent outline-none text-[#204f5e] placeholder:text-[#204f5e] text-sm sm:text-base"
              required
            />
            <i className="ri-user-line text-[#204f5e] text-lg sm:text-xl ml-2"></i>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-xs sm:text-sm font-semibold uppercase text-[var(--text-color)]">
            Email
          </label>
          <div className="flex items-center bg-[var(--prim-light)] border border-[var(--primary-color)] rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-[var(--secondary-color)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent outline-none text-[#204f5e] placeholder:text-[#204f5e] text-sm sm:text-base"
              required
            />
            <i className="ri-mail-line text-[#204f5e] text-lg sm:text-xl ml-2"></i>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-xs sm:text-sm font-semibold uppercase text-[var(--text-color)]">
            Phone
          </label>
          <div className="flex items-center bg-[var(--prim-light)] border border-[var(--primary-color)] rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-[var(--secondary-color)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full bg-transparent outline-none text-[#204f5e] placeholder:text-[#204f5e] text-sm sm:text-base"
              required
            />
            <i className="ri-phone-line text-[#204f5e] text-lg sm:text-xl ml-2"></i>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs sm:text-sm font-semibold uppercase text-[var(--text-color)]">
          Message
        </label>
        <textarea
          placeholder="Write your message..."
          className="w-full bg-[var(--prim-light)] border border-[var(--primary-color)] rounded-lg px-3 sm:px-4 py-2 sm:py-3 outline-none text-[#204f5e] placeholder:text-[#204f5e] text-sm sm:text-base focus:ring-[var(--secondary-color)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          rows="5"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
     <button
  type="submit"
  className="w-full sm:w-auto bg-[var(--text-light)] text-[var(--white-color)] font-oswald font-semibold px-6 sm:px-8 py-2 rounded-full transition-all duration-500 ease-in-out hover:scale-[1.05] text-sm sm:text-base"
>
  Send Message
</button>

    </form>

    {/* Contact Info + Google Maps */}
    <div className="space-y-10 mt-10">
      <div className="bg-white/30 backdrop-blur-md border border-[var(--primary-color)] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-bold font-[var(--Oswald-font)] mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] drop-shadow-[0_3px_8px_var(--prim-light)] [text-shadow:2px_2px_0_var(--text-color)] text-center mb-4">
          Our Info
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-[#204f5e] justify-items-center">
  {/* Item 1 */}
  <li className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] w-full">
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] shadow-md">
      <i className="ri-user-line text-white text-base sm:text-lg"></i>
    </span>
    <span className="text-xs sm:text-sm md:text-base font-semibold">Oceanis Grand Palace</span>
  </li>

  {/* Item 2 */}
  <li className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] w-full">
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] shadow-md">
      <i className="ri-mail-line text-white text-base sm:text-lg"></i>
    </span>
    <span className="text-xs sm:text-sm md:text-base font-semibold">contact@oceanis.com</span>
  </li>

  {/* Item 3 */}
  <li className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] w-full">
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] shadow-md">
      <i className="ri-phone-line text-white text-base sm:text-lg"></i>
    </span>
    <span className="text-xs sm:text-sm md:text-base font-semibold">+62 812 3456 7890</span>
  </li>

  {/* Item 4 */}
  <li className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] w-full">
    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] shadow-md">
      <i className="ri-map-pin-line text-white text-base sm:text-lg"></i>
    </span>
    <span className="text-xs sm:text-sm md:text-base font-semibold">Medan, Indonesia</span>
  </li>
</ul>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--primary-color)] hover:scale-[1.02] transition-all duration-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127507.123456!2d98.650!3d3.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f123456789%3A0xabcdef123456789!2sMedan%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000"
          width="100%"
          height="240"
          className="sm:h-[280px] md:h-[320px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Contact;
