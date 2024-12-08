import React from 'react'
import Image from 'next/image';
import Products from './products/page';
import { FaAngleRight } from "react-icons/fa6";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { AiOutlineControl } from "react-icons/ai";

export default function page() {
  return (
    <>
    <div className='relative w-full h-auto p-6'>
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

     <div className="relative flex flex-col justify-center items-center w-full max-w-[454px] mx-auto my-8 md:my-16 text-center">
     <Image src="/images/logo.png" alt='logo' width="100" height="100"/> 
     <h1 className="text-3xl md:text-5xl font-bold py-4">Shop</h1>
          <p className="flex items-center gap-1 text-sm md:text-base">
            Home <FaAngleRight className="mx-1" />
            <span className="text-gray-700">Shop</span>
          </p> </div>
    </div> 

    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[100px] w-full max-w-[1440px] bg-[#FAF4F4] px-6 md:px-20 py-6 md:py-10 gap-4">
    <div className="flex flex-wrap gap-4 items-center">
    <AiOutlineControl className='m-1'/>
            <p>Filter</p>
           <PiCirclesFourFill className='m-1'/>
           <BsViewList className='m-1'/>
           <p>Showing 1-16 of 32 result</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
            <p>Show <span className='bg-white p-2 text-gray-400'>16</span> </p>
            <p>Short by <span className='bg-white p-3 text-gray-400'>Default</span></p>
        </div>
       </div>

       {/* Products */}
       <div className='h-full w-full max-w-[1440px]'>
         <Products />
       </div>
    </>
     )
}
