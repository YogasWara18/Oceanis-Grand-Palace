import React from "react";

import blog1 from "../../assets/Blog1.png";
import blog2 from "../../assets/Blog2.png";
import blog3 from "../../assets/Blog3.png";
import blog4 from "../../assets/Blog4.png";
import blog5 from "../../assets/Blog5.png";
import blog6 from "../../assets/Blog6.png";
import blog7 from "../../assets/Blog7.png";
import blog8 from "../../assets/Blog8.png";
import blog9 from "../../assets/Blog9.png";
import blog10 from "../../assets/Blog10.png";
import blog11 from "../../assets/Blog11.png";
import blog12 from "../../assets/Blog12.png";

import userBlog1 from "../../assets/blog-user1.png";
import userBlog2 from "../../assets/blog-user2.png";
import userBlog3 from "../../assets/blog-user3.png";
import userBlog4 from "../../assets/blog-user4.png";
import userBlog5 from "../../assets/blog-user5.png";
import userBlog6 from "../../assets/blog-user6.png";
import userBlog7 from "../../assets/blog-user7.png";
import userBlog8 from "../../assets/blog-user8.png";
import userBlog9 from "../../assets/blog-user9.png";
import userBlog10 from "../../assets/blog-user10.png";
import userBlog11 from "../../assets/blog-user11.png";
import userBlog12 from "../../assets/blog-user12.png";

import blogImg from "../../assets/Blog-image.jpg";

function Blog() {
  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
        <img
          src={blogImg}
          alt="Section-about"
          className="w-full h-auto object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl -translate-y-12 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-20 xl:-translate-y-30 font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] drop-shadow-[0_3px_8px_var(--primary-color)] text-center px-4"
            style={{
              textShadow: `2px 2px 0 var(--text-color), 4px 4px 0 rgba(0,0,0,0.25), 6px 6px 8px var(--primary-color)`,
            }}
          >
            Oceanis Blog
          </h1>
        </div>
      </div>

      <section className="bg-[var(--prim-light)] py-[60px] w-full pb-0">
        <div
          className="w-full lg:w-[95%] mx-auto py-16 px-8 md:px-14 
                  bg-[var(--white-color)] rounded-[24px]  
                  backdrop-blur-xl border border-[var(--primary-color)] 
                  relative z-[10] transition-all duration-500 ease-in-out"
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span
              className="rounded-full mt-6 px-8 py-3 font-bricolage tracking-wider text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] shadow-md 
                   border border-[var(--text-light)]"
            >
              Blog
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold font-[var(--Oswald-font)] mt-4 text-transparent bg-clip-text
                      bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
            >
              Popular Publications
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                image: blog1,
                date: "24.09.2025",
                title: "Embrace the Ocean Breeze: Your Next Luxury Escape",
                author: "Paul T.",
                authorImage: userBlog1,
                description:
                  "Discover why the serene beauty of the beach is the perfect setting for your next unforgettable journey.",
              },
              {
                image: blog2,
                date: "12.10.2025",
                title: "Sunset Serenity: A Journey into Tranquility",
                author: "Sophia L.",
                authorImage: userBlog2,
                description:
                  "Experience the calming embrace of twilight as the sun dips below the horizon, painting the sky with serenity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] 
               shadow-inner transition-all duration-500 ease-in-out 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               group backdrop-blur-lg"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-t-[20px]">
                  <img
                    src={item.image}
                    alt="Blog"
                    className="w-full h-[320px] object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-transparent rounded-b-[20px]">
                  {/* Author & Date */}
                  <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
                    <img
                      src={item.authorImage}
                      alt="Author"
                      className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
                    />
                    <span className="font-semibold text-[var(--text-color)]">
                      {item.author}
                    </span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span className="italic text-gray-400">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
                  >
                    {item.description}
                  </p>

                  {/* Read More */}
                  <a
                    href="#"
                    className="text-sm font-semibold text-[var(--primary-color)] 
                   inline-flex items-center group"
                  >
                    Read More
                    <span
                      className="ml-1 group-hover:translate-x-1 
                     transition-transform ri-arrow-right-s-line"
                    ></span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desc */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Blog Description */}
            <p className="text-[var(--black-color)] text-sm md:text-base max-w-3xl leading-relaxed font-arimo">
              Explore our curated stories and insights designed to inspire your
              next luxurious journey. Each publication reflects the harmony and
              elegance of Oceanis.
            </p>

            {/* Button */}
            <button
              className="bg-[var(--text-light)] to-[var(--secondary-color)] 
               text-[var(--white-color)] font-oswald font-semibold 
               px-8 py-2 rounded-full transition-all duration-500 ease-in-out 
               hover:scale-[1.05] "
            >
              View All
            </button>
          </div>
        </div>
      </section>

      <div className="w-full lg:px-[12%] px-[8%] py-[100px] flex flex-col items-center justify-center gap-10 relative overflow-hidden bg-transparent">
        {/* Section Heading */}
        <span
          className="rounded-full px-8 py-2 font-bricolage tracking-wider text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] shadow-md 
                   border border-[var(--text-light)]"
        >
          Our Blog
        </span>
        <h2
          className="text-3xl mb-3 -mt-7 sm:text-4xl font-bold font-[var(--Oswald-font)] text-transparent bg-clip-text
                      bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
        >
          Latest Blog Publications
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left">
        {/* Card 1 */}
        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog3}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog3}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Daniel R.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">05.11.2025</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Culinary Bliss: Tastes of the Ocean
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Indulge in exquisite flavors inspired by the sea. Oceanis Grand
              Palace offers a dining experience that awakens the senses.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog4}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog4}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Isabelle M.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">18.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Wellness Retreat: Rejuvenate by the Waves
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Restore your mind and body with Oceanis spa rituals, blending
              natural elements and luxurious comfort.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog5}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog5}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Marco V.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">18.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Adventure Awaits: Explore the Oceanis Coast
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              From hidden coves to vibrant marine life, Oceanis offers
              adventures that spark curiosity and wonder.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog6}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog6}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Lucas T.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">18.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Oceanis Wellness: Strength Meets Serenity
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Discover a new dimension of fitness at Oceanis Coast. Train with
              world-class equipment in a luxurious space.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog7}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog7}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Clara W.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">25.01.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Oceanis: Symphony of Color & Light
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              How the Oceanis palette creates a serene, luxurious, and refined
              ambiance across every space.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog8}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog8}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Jonathan P.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">18.01.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Staying with a Cinematic Elegance
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              A stay that feels like a movie scene, filled with dramatic
              atmosphere and exclusive comfort.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog9}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog9}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Amelia Ss.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">12.01.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Oceanis Grand Palace: Harmony in Every Corner
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Exploring the grand architecture and interior details that radiate
              modern luxury with a timeless touch.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog10}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog10}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Michael G.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">02.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Premium Dining at Oceanis Grand Palace
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Discovering restaurants and lounges offering international cuisine
              paired with elegant aesthetics.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog11}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog11}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Nadia C.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">10.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Oceanis Grand Palace: Stories Behind the Design
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Revealing the design philosophy that blends Indonesian tradition
              with contemporary global style.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>

        <div
          className="bg-[var(--white-color)] rounded-[24px] overflow-hidden 
               border border-[var(--primary-color)] shadow-inner 
               transition-all duration-500 ease-in-out group 
               hover:scale-[1.02] hover:shadow-[0_10px_35px_var(--primary-color)] 
               backdrop-blur-xl"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-[20px]">
            <img
              src={blog12}
              alt="Blog"
              className="w-full h-56 object-cover transform 
                   transition-transform duration-500 
                   group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 bg-transparent rounded-b-[20px]">
            {/* Author & Date */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mb-5">
              <img
                src={userBlog12}
                alt="Author"
                className="w-7 h-7 rounded-full object-cover 
                     border border-[var(--primary-color)] shadow-sm"
              />
              <span className="font-semibold text-[var(--text-color)]">
                Daniel H.
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="italic text-gray-400">15.02.2026</span>
            </div>

            {/* Title */}
            <h3
              className="font-oswald font-semibold text-xl text-[var(--black-color)] 
                   mb-3 leading-snug [text-shadow:1px_1px_0_var(--text-light)]"
            >
              Oceanis Grand Palace: A Global Luxury Destination
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-sm mb-5 leading-relaxed 
                   bg-transparent px-4 py-3 rounded-xl 
                   shadow-[0_0_15px_var(--primary-color)]"
            >
              Positioning Oceanis as an international icon that unites comfort,
              art, and prestige.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              className="text-sm font-semibold text-[var(--primary-color)] inline-flex items-center group"
            >
              Read More
              <span className="ml-2 ri-arrow-right-s-line"></span>
            </a>
          </div>
        </div>
      </div>

      <section className="bg-[#f9f9f9] py-[150px] w-full">
        <div className="w-full lg:w-[95%] mx-auto px-8 md:mx-14 bg-white rounded-[20px] shadow-xl relative z-[10] text-center py-20">
          <span
            className="rounded-full mt-6 px-8 py-3 font-bricolage tracking-wider text-sm uppercase 
                   bg-[var(--prim-light)] text-[var(--text-color)] shadow-md 
                   border border-[var(--text-light)]"
          >
            Newsletter
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold font-[var(--Oswald-font)] mt-4 text-transparent bg-clip-text
                      bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] 
                     drop-shadow-[0_3px_8px_var(--prim-light)] 
                     [text-shadow:2px_2px_0_var(--text-color)]"
          >
            Subscribe Our Newsletter
          </h2>

          <form
            className="max-w-xl mx-auto mt-5 flex items-center justify-between 
             bg-[var(--prim-light)] rounded-full overflow-hidden 
             p-2 border border-[var(--primary-color)] 
             hover:shadow-[0_0_25px_var(--primary-color)] 
             transition-all duration-500 ease-in-out"
          >
            {/* Input */}
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-2 bg-transparent outline-none 
               text-[var(--black-color)] font-arimo text-sm 
               placeholder:text-gray-400"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-[var(--text-light)] to-[var(--secondary-color)] 
               text-[var(--white-color)] font-oswald font-semibold 
               px-8 py-2 rounded-full transition-all duration-500 ease-in-out 
               hover:scale-[1.05]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Blog;
