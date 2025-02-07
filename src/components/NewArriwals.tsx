import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NewArriwals() {
  return (
    <div>
          {/* Section 4 */}
              <div className="flex justify-center bg-[#FFF9E5] w-full h-auto lg:h-[600px] mt-10 px-4 lg:px-20 py-10 lg:py-0">
                <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
                  {/* Image */}
                  <div className="w-full lg:w-[700px] h-auto mx-auto lg:ml-10">
                    <Image src="/images/home-4.png" alt="Image" width="600" height="600" />
                  </div>
                  {/* Text */}
                  <div className="w-full lg:w-[331px] text-center lg:text-left">
                    <p className="mb-4 mt-4">New Arrivals</p>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">Asgaard sofa</h1> 
                    <Link href={"/products"}><button className="border-[1px] border-black px-6 py-2 hover:bg-slate-300">Order Now</button></Link>
                  </div>
                </div>
              </div>
    </div>
  )
}
