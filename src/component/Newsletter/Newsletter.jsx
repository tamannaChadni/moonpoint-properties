import React from 'react';
import cover3 from "../../assets/cover3.jpg";
const Newsletter = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className="hero min-h-screen  bg-gray-50 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={cover3} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 text-transparent bg-clip-text animate-gradient ">Subscribe Newsletter</h1>
      <p className="py-6 text-teal-500">Enter Your Email Address .</p>
      <button className="btn bg-emerald-700 text-white">Subscribe</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Newsletter;