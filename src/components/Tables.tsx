import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Tables() {
  return (
    <>
         {/* Section 2 */}
              <div className="flex flex-wrap justify-evenly gap-10 w-full py-10">
                {/* Image 1 */}
                <div className="w-[90%] md:w-[500px] h-auto m-4 text-center">
                  <Image src="/images/home-3.png" alt="Image" width="500" height="500" />
                  <div className="mt-4">
                    <h1 className="text-xl lg:text-2xl mb-2">Side table</h1>
                    <Link href={"/products"}><button className="underline underline-offset-[10px]">View More</button></Link>

                  </div>
                </div>
                {/* Image 2 */}
                <div className="w-[90%] md:w-[500px] h-auto m-4 text-center">
                  <Image src="/images/home-2.png" alt="Image" width="450" height="500" />
                  <div className="mt-4">
                    <h1 className="text-xl lg:text-2xl mb-2">Side table</h1>
                    <Link href={"/products"}><button className="underline underline-offset-[10px]">View More</button></Link>

                  </div>
                </div>
              </div>
    </>
  )
}
