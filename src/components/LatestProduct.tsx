import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestProduct() {
  return (
    <div>
         {/* Section 3 */}
      <div className="w-full bg-[#FFFFFF] px-4 lg:px-20 py-10">
        <div className="text-center">
          <h1 className="text-xl lg:text-2xl font-semibold pb-4">Top Picks For You</h1>
          <p className="px-2 text-gray-400">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
      </div>
       {/* Products */}
      
       <div className="flex flex-wrap gap-6 justify-center mt-10">
          {[
            { src: '/images/pro-1.png', title: 'Trenton modular sofa_3', price: 'Rs.25,000.00' },
            { src: '/images/pro-2.png', title: 'Granite dining table', price: 'Rs.25,000.00' },
            { src: '/images/pro-3.png', title: 'Outdoor bar table', price: 'Rs.25,000.00' },
            { src: '/images/pro-4.png', title: 'Plain console', price: 'Rs.25,000.00' },
          ].map((product, index) => (
            <div key={index} className="w-[270px] h-auto">
              <Image src={product.src} alt="image" width="250" height="150" className="mx-auto" />
              <h1 className="pt-6 pb-2 mx-4 text-center">{product.title}</h1>
              <p className="text-xl mx-4 text-center">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 mb-4">
          <Link href="/products">
          <button className="underline underline-offset-[15px]">View More</button>
          </Link>
        </div>
      </div>

  )
}
