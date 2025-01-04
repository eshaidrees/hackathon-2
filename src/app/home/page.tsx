import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Homepage() {
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

      {/* Section 2 */}
      <div className="flex flex-wrap justify-center gap-8 w-full py-10">
        {/* Image 1 */}
        <div className="w-[90%] md:w-[500px] h-auto m-4 text-center">
          <Image src="/images/home-3.png" alt="Image" width="500" height="500" />
          <div className="mt-4">
            <h1 className="text-xl lg:text-2xl mb-2">Side table</h1>
            <button className="underline underline-offset-[15px]">View More</button>
          </div>
        </div>
        {/* Image 2 */}
        <div className="w-[90%] md:w-[500px] h-auto m-4 text-center">
          <Image src="/images/home-2.png" alt="Image" width="400" height="500" />
          <div className="mt-4">
            <h1 className="text-xl lg:text-2xl mb-2">Side table</h1>
            <button className="underline underline-offset-[15px]">View More</button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full bg-[#FFFFFF] px-4 lg:px-20 py-10">
        <div className="text-center">
          <h1 className="text-xl lg:text-2xl font-semibold pb-4">Top Picks For You</h1>
          <p className="px-2 text-gray-400">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
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
        <div className="text-center mt-10">
          <Link href="/products">
          <button className="underline underline-offset-[15px]">View More</button>
          </Link>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-[#FFF9E5] w-full h-auto lg:h-[600px] mt-10 px-4 lg:px-20 py-10 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Image */}
          <div className="w-full lg:w-[700px] h-auto mx-auto lg:ml-10">
            <Image src="/images/home-4.png" alt="Image" width="600" height="600" />
          </div>
          {/* Text */}
          <div className="w-full lg:w-[331px] text-center lg:text-left">
            <p className="mb-4 mt-4">New Arrivals</p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Asgaard sofa</h1>
            <button className="border-[1px] border-black px-6 py-2">Order Now</button>
          </div>
        </div>
      </div>

        {/* Section 5 */}
        <div className='h-auto'>
          <div className='text-center m-8'>
            <h1 className='text-3xl mb-4'>Our Blogs</h1>
            <p className='text-gray-400'>Find a bright ideal to suit your taste with our great selection</p>
          </div>
          <div className='flex flex-wrap justify-center gap-10'>
            <div className='w-[300px] h-[400px] text-center'>
            <Image src="/images/post-1.jpeg" alt="Image" width="300" height="300" className='h-[300px]' />
             <p className='mt-6'>Going all-in with millennial design</p>
             <button className='underline underline-offset-4 mt-2'>Read More</button>
            </div>
            <div className='w-[300px] h-[400px] text-center'>
            <Image src="/images/post-2.jpeg" alt="Image" width="300" height="300" className='h-[300px]' />
             <p className='mt-6'>Going all-in with millennial design</p>
             <button className='underline underline-offset-4 mt-2'>Read More</button>
            </div>
            <div className='w-[300px] h-[400px] text-center'>
            <Image src="/images/post-3.jpeg" alt="Image" width="300" height="300" className='h-[300px]'/>
             <p className='mt-6'>Going all-in with millennial design</p>
             <button className='underline underline-offset-4 mt-2'>Read More</button>
            </div>
          </div>
          <div className='text-center my-8'>
          <button className='text-xl underline underline-offset-4'>View All Post</button>
          </div>
        </div>
      {/* Section 6 */}
      <div className="relative w-full h-[400px] p-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('images/bg-1.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="relative w-full lg:w-[454px] pt-14 h-auto mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold p-2">Our Instagram</h1>
          <p className="p-2">Follow our store on Instagram</p>
          <button className="shadow-xl shadow-slate-300 rounded-3xl py-2 px-12">Follow Us</button>
        </div>
      </div>
    </>
  );
}

