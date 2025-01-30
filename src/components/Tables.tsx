import React from 'react';
import Image from 'next/image';

export default function Tables() {
  return (
    <>
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
    </>
  )
}
