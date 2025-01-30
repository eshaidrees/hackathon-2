import React from 'react'
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { AiOutlineControl } from "react-icons/ai";
import Products from '../products/page';
import Features from '@/components/Features';

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

       {/* Products */}
       <div className='w-full h-auto'>
         <Products />
       </div>
    </>
     )
}
