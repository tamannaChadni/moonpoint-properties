import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto my-4 text-center'>
            <h1 className='font-bold text-3xl text-red-400'>Company Profile</h1>
            <p className='mt-2 text-xl font-semibold'>A Tradition of Excellence, Integrity, Knowledge and Service for over 60 years.</p>
            <p className='mt-2'>At Estey Real Estate, you are number one. Whether you are a property owner, tenant, or buyer, we value your business and will provide you with the individual attention and service you deserve. We believe in a strict Code of Ethics. We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</p>

            <button className=' btn mt-4 text-white bg-teal-500'>Our Team</button>
            <p className='mt-3 text-xl font-medium'>Estey provides a wide variety of real estate services to investors. We understand that you do not want to be in the business of real estate and property management, but we do. Some of the solutions we offer our clients are:</p>
            <ul className='mt-2'>
                <li>Broker Opinion of Valuation</li>
                <li>Marketing for sale</li>
                <li>Managing the Property while vacant</li>
                <li>Lawn Maintenance</li>
                <li>General Maintenance Services</li>
                <li>General Contractor</li>
                <li>Recommend Repairs</li>
                <li>Managing Property while Occupied</li>
                <li>Lease Enforcement</li>
                <li>Maintaining Security Deposit</li>
                <li>Collection of Rents</li>
                <li>Eviction Service</li>
                <li>Marketing the Property for Lease</li>
            </ul>
            
        </div>
    );
};

export default AboutUs;