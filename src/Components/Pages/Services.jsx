import React from 'react';
import serviceImg from "../../assets/Service-image.png";

function Services() {
  return (
    <>
      <div className="section-banner relative flex items-center justify-center">
              <img
                src={serviceImg}
                alt="Section-about"
                className="w-full h-auto object-cover"
              />
              </div>
    </>
  )
}

export default Services
