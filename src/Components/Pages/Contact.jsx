import React from 'react'

import contactImg from "../../assets/Contact-img.jpg"

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

           <section className="bg-[#ebfbfb] py-[100px] w-full px-[100px]">
            <div className="w-full px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xl relative z-[10] py-20">
                <form className="space-y-6">
                    <div className="grid grid-cols1 md:grid-cols-2 gap-6">
                        <div className="flex flex-xol gap-2">
                            <label className="text-sm semibold uppercase text-[#204f5e]">First Name</label>
                            <input 
                            type="text"
                            placeholder='Enter First Your Name'
                            className='w-full bg-transparent outline-none text-[#204f5e] placeholder:text-[#204f5e]'
                            required
                            />
                            <i className="ri user-line text-[#204f5e] text-xl ml-2 animated-pulse"></i>
                        </div>
                    </div>
                </form>
            </div>
           </section>
    </>
  )
}

export default Contact
