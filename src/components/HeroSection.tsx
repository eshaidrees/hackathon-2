import React from 'react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <>
      {/* Section 1 */}
          <div className="bg-[#FBEBB5] md:h-[1000px] lg:h-screen w-full">
            <div className="flex flex-col lg:flex-row justify-between">
              {/* Text */}
              <div className="w-full lg:w-[440px] lg:h-[256px] p-10 mt-20 lg:mt-[240px] lg:ml-[300px] text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl">Rocket single seater</h1>
                <p className="mt-6 underline underline-offset-8">Shop Now</p>
              </div>
              {/* Image */}
              <div className="w-full lg:w-[700px] lg:h-[600px] lg:mr-20">
                <Image
                  src="/images/home-1.png"
                  alt="Image"
                  width="600"
                  height="600"
                  className="mx-auto mt-6"
                />
              </div>
            </div>
          </div>
     </> 
  )
}
