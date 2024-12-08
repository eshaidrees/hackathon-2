import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col px-4 md:px-28 py-10">
      {/* Footer Top */}
      <div className="w-full max-w-[1440px] text-black border-b-2 border-gray-300 pb-10 p-6">
        <div className="flex flex-col md:flex-row justify-between gap-14">
          {/* Address Section */}
          <div className="w-full md:w-[350px] text-left">
            <p className="text-gray-500 mt-10">400 University Drive Suite 200 Coral <br /> Gables,</p>
            <p className="text-gray-500">FL 33134 USA</p>
          </div>
          {/* Links Section */}
          <div className="w-full md:w-40">
            <h1 className="text-gray-500 pb-4">Links</h1>
            <ul className="flex flex-col gap-6">
              <li className="hover:text-gray-800 text-black text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-gray-800 text-black text-sm">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-gray-800 text-black text-sm">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-gray-800 text-black text-sm">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Help Section */}
          <div className="w-full md:w-[250px]">
            <h1 className="text-gray-500  pb-4">Help</h1>
            <ul className="flex flex-col gap-6">
              <li className="hover:text-gray-800 text-black text-sm">Payment Options</li>
              <li className="hover:text-gray-800 text-black text-sm">Returns</li>
              <li className="hover:text-gray-800 text-black text-sm">Privacy Policies</li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="w-full md:w-[300px]">
            <h1 className="text-gray-500 font-semibold pb-4">Newsletter</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="flex-grow border-b-2 placeholder:text-sm border-gray-400 text-black p-2"
              />
              <button className="border-b-2 border-gray-400 text-black px-4 py-2">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="flex pt-6">
        <h3 className="text-gray-500 text-sm">2022 Meubel House. All rights reserved</h3>
      </div>
    </div>
  );
}