import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyDetails = () => {
  const Properties = useLoaderData();
  const { id } = useParams();
  const perProperty = Properties.find((b) => b.id == id);

  
 

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    
  } = perProperty;

  return (
    <div className="container mx-auto mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{segment_name}</h2>
          <p className=" font-extralight"> {estate_title}</p>
          <hr />
          <p className=" font-light">{description}</p>
          <hr />
          <p className="font-semibold"> {price}</p>
          <div className="flex gap-3 text-teal-500">
            {facilities.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <hr />
          <p className="font-semibold">
            
            <span className="text-teal-500">{area}</span>
          </p>
          <p className="font-semibold">
             <span className="text-teal-500">{status}</span>
          </p>
          <p className="font-semibold">
           
            <span className="text-teal-500">{location}</span>
          </p>
          

          
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default PropertyDetails;
