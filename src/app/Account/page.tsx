// import React from 'react'
// import Image from 'next/image'
// import { FaAngleRight } from "react-icons/fa6";
// import Features from '@/components/Features';

// export default function MyAccount() {
//   return (
//     <div>
//            <div className='relative w-full h-auto p-6'>
//                <div
//                   className='absolute inset-0 '
//                   style={{
//                     backgroundImage: "url('images/bg-2.jpeg')",
//                     backgroundRepeat: "no-repeat",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     opacity: 0.50,
                    
//                   }}
//                   >  
//                 </div>
        
//                <div className='relative flex flex-col justify-center items-center max-w-full mx-auto h-[202px] my-[50px]'>
//           <Image src="/images/logo.png" alt="logo" width={90} height={90} />
//                   <h1 className='text-5xl font-bold p-2'>My Account</h1>
//                   <p className='flex gap-1 py-2'>Home <FaAngleRight className='m-1'/> 
//                   <span className='text-gray-700'>My Account</span></p>
//                </div>
//             </div> 
//              {/* Login and Register form */}
//            <div className="flex justify-evenly my-10 w-full  ">
//             {/* Login form */}
//               <form className='flex flex-col gap-6 m-4 text-left'>
//               <h1 className='text-2xl font-bold '>Log In</h1>

//               <label className="block mt-2 mb-1 text-left text-[#0c0b0b]">Username or email address</label>
//               <input type="text" id="name" name="name" required className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />
           
//               <label className="block mt-2 mb-1 text-left text-[#0c0b0b]">Password</label>
//               <input type="text" id="Password" name="Password"  required className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />
              
//               <div className="flex items-center gap-2">
//                 <input type="checkbox"id="checkbox"name="checkbox"className="w-4 h-4 border border-gray-300 rounded"/>
//                 <label className="text-gray-700">
//                  Remember me
//                 </label>
//               </div>
        
//               <div className='flex gap-4'>
//               <button type="submit" className="border-2 border-gray-400 text-center px-12 text-black hover:bg-gray-300 rounded-xl">
//                 Log in
//               </button>
//               <p className='p-4 text-sm text-gray-500'>Lost Your Password?</p>
//               </div>
             
//             </form>

//             {/* Register form */}
//             <form className='flex flex-col gap-6 m-4 w-1/4 text-left'>
//               <h1 className='text-2xl font-bold '>Register</h1>

//               <label className="block mt-2 mb-1 text-left text-[#0c0b0b]">Email address</label>
//               <input type="email" id="email" name="email" required className="w-full p-4 mb-3 border border-gray-300 rounded-lg" />
              
//               <p className='font-light text-gray-700'>A link to set a new password will be sent to your email address.</p>
//               <p className='font-light text-gray-700'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</p>
        
//               <div className='flex gap-4'>
//               <button type="submit" className="border-2 border-gray-400 text-center px-12 py-4 text-black hover:bg-gray-300 rounded-xl">
//               Register 
//               </button>
//               </div>
             
//             </form>
//          </div>
//          <Features/>

//     </div>
//   )
// }

"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyAccount() {
  const { userId } = useAuth();
  const router = useRouter();

  // Redirect unauthenticated users to sign-in page
  useEffect(() => {
    if (!userId) {
      router.push("/sign-in"); // Redirect manually
    }
  }, [userId, router]);

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-5xl font-bold mb-6">My Account</h1>

      {/* If logged in, show user info */}
      {userId ? (
        <div className="text-center">
          <p className="text-lg">Welcome back!</p>
          <UserButton />
        </div>
      ) : null}
    </div>
  );
}
