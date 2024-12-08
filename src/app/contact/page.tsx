import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";


export default function Contact() {
  return (
    <>
    <div className='relative w-[1440px] h-auto p-6'>
    <div
       className='absolute inset-0 '
       style={{
         backgroundImage: "url('images/bg-2.jpeg')",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         backgroundPosition: "center",
         opacity: 0.50,
         
       }}
       >  
     </div>

      <div className='relative flex flex-col justify-center items-center w-[454px] h-[202px] mx-[500px] my-[50px]'>
        <Image src="/images/logo.png" alt='logo' width="100" height="100"/> 
       <h1 className='text-5xl font-bold p-2'>Contact</h1>
       <p className='flex gap-1 py-2'>Home <FaAngleRight className='m-1'/> 
       <span className='text-gray-700'>Contact</span></p>
      </div>
    </div> 

      <div className='w-[1440px] h-[1000px]'>
         <div className='text-center mx-[398px] pt-16'>
            <h1 className='text-2xl font-bold mb-2' >Get In Touch With Us</h1>
            <p className='text-gray-400'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
         </div>

         {/* contact */}
         <div className='flex justify-center items-between w-[1058px] h-[900px] mx-40 my-8'>
          {/* Address Block */}
          <div className='flex flex-col gap-10 mr-40 my-20'>
    <div className='flex items-start'>
      <FaMapMarkerAlt className='text-2xl text-gray-700 mr-6' />
      <div>
        <h1 className='font-semibold text-xl'>Address</h1>
        <p>236 5th SE Avenue, New <br />York NY10000, United <br /> States</p>
      </div>
    </div>

    {/* Phone Block */}
    <div className='flex items-start'>
      <FaPhone className='text-2xl text-gray-700 mr-6' />
      <div>
        <h1 className='font-semibold text-xl'>Phone</h1>
        <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
      </div>
    </div>

    {/* Working Time Block */}
    <div className='flex items-start'>
      <FaClock className='text-2xl text-gray-700 mr-6' />
      <div>
        <h1 className='font-semibold text-xl'>Working Time</h1>
        <p>
          Monday-Friday: 9:00 - 22:00 <br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
      </div>
    </div>
           {/* form */}
           <div className="flex flex-col gap-10 w-[535px] h-[823px] m-6 p-6 ">
              <form className='w-[400px] flex flex-col gap-6'>

              <label htmlFor="name" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Your name</label>
              <input type="text" id="name" name="name" placeholder="Abc" required className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />
           
              <label htmlFor="email" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Email address</label>
              <input type="email" id="email" name="email" placeholder="Abc@def.com" required className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />

              <label htmlFor="subject" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Subject</label>
              <input type="text" id="text" name="text" placeholder="This is an optional" className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />
           
              <label htmlFor="message" className="block mt-2 mb-1 text-left text-[#0c0b0b]">Message</label>
              <textarea id="message" name="message" placeholder="Hi! i'd like to ask about" required className="w-full p-5 mb-3 border border-gray-300 rounded-lg"></textarea>
           
              <button type="submit" className="border-2 border-black text-center p-2 mr-44 text-black hover:bg-gray-300 rounded-xl">
                Submit
              </button>
            </form>
       </div>
           </div>
      </div>
    </>
  )
}
