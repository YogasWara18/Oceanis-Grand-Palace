import React from "react";
import { Link } from "react-router-dom";

import socialIcon1 from "../../assets/Youtube.png";
import socialIcon2 from "../../assets/Instagram.png";
import socialIcon3 from "../../assets/Facebook.png";
import socialIcon4 from "../../assets/X.png";

function Footer() {
  return (
    <footer className="w-full bg-[var(--prim-light)] py-20 px-[7%]  shadow-[0_-10px_40px_rgba(0,0,0,0.15)] backdrop-blur-md">
      {/* Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/Logo-Oceanis.png"
              alt="Oceanis Grand Palace Logo"
              className="h-40 w-auto -translate-y-14 object-contain mx-auto lg:mx-12"
            />
          </Link>
          <p className="text-sm -translate-y-24 text-[var(--text-light)] font-[var(--Arimo-font)]">
            Experience luxury redefined by the Oceanis Grand Palace.
          </p>

          {/* Social Media */}
          <div className="mt-2">
            <div className="flex -translate-y-20 justify-center lg:justify-start gap-8">
              {[
                { icon: socialIcon1, label: "YouTube" },
                { icon: socialIcon2, label: "Instagram" },
                { icon: socialIcon3, label: "Facebook" },
                { icon: socialIcon4, label: "X" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-10 h-10 cursor-pointer hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-[var(--Oswald-font)] text-[var(--text-color)] mb-4">
            Explore
          </h3>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Rooms", "Blogs", "Contact"].map(
              (label, idx) => (
                <Link
                  key={idx}
                  to="/"
                  className="text-sm font-[var(--Oswald-font)] text-[var(--text-light)] hover:text-[var(--secondary-color)] transition"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-[var(--Oswald-font)] text-[var(--text-color)] mb-4">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {["FAQ", "Privacy Policy", "Terms & Conditions", "Careers"].map(
              (label, idx) => (
                <Link
                  key={idx}
                  to="/"
                  className="text-sm font-[var(--Arimo-font)] text-[var(--text-light)] hover:text-[var(--secondary-color)] transition"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-lg font-[var(--Oswald-font)] text-[var(--text-color)] mb-4">
            Subscribe to our luxury newsletter
          </p>
         
          <div className="flex flex-col gap-2 text-sm font-[var(--Arimo-font)] text-[var(--text-light)]">
            <p>Oceanis Grand Palace</p>
            <p>Jl. Pantai Indah No. 88</p>
            <p>Medan, Sumatera Utara, Indonesia</p>
            <p>Phone: +62 812-3456-7890</p>
            <p>Email: info@oceanisgrandpalace.com</p>
          </div>
           <div className="flex items-center bg-[var(--white-color)] px-4 py-1 rounded-full shadow-inner">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent outline-none text-sm font-[var(--Arimo-font)]"
            />
            <i className="ri-arrow-right-line text-lg bg-[var(--text-color)] text-white w-[38px] h-[38px] flex items-center justify-center rounded-full cursor-pointer hover:bg-[var(--secondary-color)] transition"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
