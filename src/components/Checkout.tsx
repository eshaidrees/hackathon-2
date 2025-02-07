"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import Features from "@/components/Features";
import { client } from "@/sanity/lib/client";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zipcode: "",
    phone: "",
    email: "",
    // additional: ""
     })

    const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    country: false,
    address: false,
    city: false,
    province: false,
    zipcode: false,
    phone: false,
    email: false,
    // additional: false,
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      })
    }

    const validateForm = () => {
      const errors = {
        firstName : !formData.firstName,
        lastName : !formData.lastName,
        country : !formData.country,
        address : !formData.address,
        city : !formData.city,
        province : !formData.province,
        zipcode : !formData.zipcode,
        phone : !formData.phone,
        email : !formData.email,
        // additional : !formData.additional
        
      };
      setFormError(errors);
      return Object.values(errors).every((errors) => !errors);
    }
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("/Cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        calculateTotal(parsedCart); // Ensure total is calculated immediately
      }
    }
  }, []);

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  const calculateTotal = (cartItems: CartItem[]) => {
    if (!cartItems.length) {
      setTotal(0); // Reset total if cart is empty
      return;
    }
    setTotal(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

// Handle placeorder
const handlePlaceOrder = async () => {
  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }
  if (!validateForm()) {
    alert("Please fill the form correctly");
    return;
  }

  const orderData = {
    _type: "order",
    firstName: formData.firstName,
    lastName: formData.lastName,
    country: formData.country,
    address: formData.address,
    city: formData.city,
    zipcode: formData.zipcode,
    phone: formData.phone,
    email: formData.email,
    cartItems: cart.map((item) => ({
      _type: "reference",
      _ref: item._id,
    })),
    total: total,
    orderDate: new Date().toISOString(),
  };

  try {
    await client.create(orderData); // Ensure 'client' is properly imported

    // Remove applied discount only after a successful order
    localStorage.removeItem("appliedDiscount");

    alert("Order placed successfully!");

    // Clear cart and reset total
    setCart([]);
    setTotal(0);
    localStorage.removeItem("/Cart");
  } catch (error) {
    console.error("Error creating order:", error);
    alert("Failed to place order. Please try again.");
  }
};


  return (
    <>
      <div className='relative w-full h-auto p-6'>
        <div
          className='absolute inset-0 '
          style={{
            backgroundImage: "url('images/bg-2.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.50,
          }}
        >
        </div>

        <div className='relative flex flex-col justify-center items-center max-w-full mx-auto h-[202px] my-[50px]'>
          <Image src="/images/logo.png" alt="logo" width={90} height={90} />
          <h1 className='text-5xl font-bold p-2'>Checkout</h1>
          <p className='flex gap-1 py-2'>Home <FaAngleRight className='m-1' />
            <span className='text-gray-700'>Checkout</span>
          </p>
        </div>
      </div>

      {/* Billing Detail */}
      <div className="flex justify-evenly my-10 w-full">
        {/* Billing form */}
        <form className='flex flex-col gap-4 m-4 w-1/3 text-left'>
          <h1 className='text-3xl font-bold '>Billing Detail</h1>
          <div className='flex gap-4 justify-between'>
            <span>
              <label className="block mt-2 mb-1 text-left text-[#0c0b0b]">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInput} required className="p-3 border border-gray-300 rounded-lg" />
              {formError.firstName && (
                <p className="text-red-600">Required</p>
              )}
            </span>
            <span>
              <label className="block mt-2 mb-1 text-left text-[#0c0b0b]">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInput} required className="p-3 border border-gray-300 rounded-lg" />
              {formError.lastName && (
                <p className="text-red-600">Required</p>
              )}
            </span>
          </div>
       
          <label className="block mt-2 mb-1 text-[#0c0b0b]">Country / Region</label>
          <input type="text" id="country" value={formData.country} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.country && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">Street address</label>
          <input type="text" id="address" value={formData.address} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.address && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">City</label>
          <input type="text" id="city" value={formData.city} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.city && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">Province</label>
          <input type="text" id="province" value={formData.province} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.province && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">ZIP code</label>
          <input type="text" id="zipcode" value={formData.zipcode} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.zipcode && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">Phone</label>
          <input type="text" id="phone" value={formData.phone} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.phone && <p className="text-red-600">Required</p>}

          <label className="block mt-2 mb-1 text-[#0c0b0b]">Email</label>
          <input type="text" id="email" value={formData.email} onChange={handleInput} className="w-full p-3 border border-gray-300 rounded-lg" />
          {formError.email && <p className="text-red-600">Required</p>}

          <div className="flex items-center gap-2">
            <input type="checkbox" id="checkbox" name="checkbox"  className="w-4 h-4 border border-gray-300 rounded" />
            <label className="text-gray-700">
              Remember me
            </label>
          </div>
        </form>

        {/* Products */}
        <div className='flex flex-col gap-6 m-4 w-1/3 text-left'>
          <div className='flex justify-between text-left border-b-2'>
            <div className='flex flex-col gap-6'>
              <div className='flex justify-around gap-28'>
                <h1 className='text-2xl font-bold '>Product</h1>
                <h1 className='text-2xl font-bold '>Subtotal</h1>
              </div>

              {cart.map((item) => (
                <div key={item._id} className='flex justify-between'>
                  <p className='text-sm text-gray-400 font- p-2'>{item.name}</p>
                  <span>
                  <p className='text-sm '>Rs: ${item.price * item.quantity}</p>
                  <p className='text-sm '>Qty: {item.quantity}</p>
                  </span>
                </div>
              ))}

              <span className='flex justify-between'>
                <p className='text-sm '>Total</p>
                <p className='text-xl font-semibold text-yellow-600 '>Rs: ${total}</p>
              </span>
            </div>  
          </div>

          {/* Payment Method */}
          <h3 className="block mt-2 mb-1 text-left text-[#0c0b0b]">Payment Method</h3>
          <div className="flex items-center gap-2">
            <input type="radio" id="bankTransfer" name="payment" value="bankTransfer" onChange={() => handlePaymentMethodChange('Bank Transfer')} />
            <label className="text-gray-700">
              Direct Bank Transfer
            </label>
          </div>
          <p className='text-gray-400'>
               Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
          <div className="flex items-center gap-2">
            <input type="radio" id="cashOnDelivery" name="payment" value="cashOnDelivery" onChange={() => handlePaymentMethodChange('Cash on Delivery')} />
            <label className="text-gray-700">
              Cash On Delivery
            </label>
          </div>

          <p className='font-light text-gray-400'>
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
          </p>

          <div className='flex gap-4'>
            <button onClick={handlePlaceOrder} className="border-2 border-gray-400 text-center px-12 py-4 text-black hover:bg-gray-300 rounded-xl">
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Features />
    </>
  );
}

export default Checkout;
