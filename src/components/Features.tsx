import React from 'react';

export default function Features() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[300px] w-full max-w-[1440px] bg-[#FAF4F4] px-6 py-10 md:px-28 md:py-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center w-full">
        {/* Feature 1 */}
        <div className="w-full md:w-[376px] h-auto text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-2 px-2 md:px-6">Free Delivery</h1>
          <p className="text-gray-500 px-2 md:px-6">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="w-full md:w-[376px] h-auto text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-2 px-2 md:px-6">90 Days Return</h1>
          <p className="text-gray-500 px-2 md:px-6">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="w-full md:w-[376px] h-auto text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-2 px-2 md:px-6">Secure Payment</h1>
          <p className="text-gray-500 px-2 md:px-6">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
