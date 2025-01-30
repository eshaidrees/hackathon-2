import React from 'react'
import Image from 'next/image'
export default function Blog() {
  return (
    <div>
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
    </div>
  )
}
