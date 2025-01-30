import React from 'react'

export default function FollowUs() {
  return (
    <div>
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
    </div>
  )
}
