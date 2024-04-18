import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import PropTypes from "prop-types";

const SingleProperty = ({ property }) => {
  const { id, estate_title, segment_name, image, status, area, facilities } = property;
  return (
    <article className="flex flex-col dark:bg-gray-50">
      
        <img data-aos="fade-left"
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={image}
        />
      
      <div className="flex flex-col flex-1 p-6">
        <Link to={id}></Link>
        
        <h3 data-aos="fade-right" className="flex-1 py-2 text-lg font-semibold leading-snug">
          {estate_title}
        </h3>
        <p className="text-green-300 font-semibold text-xl"> {segment_name}</p>
        <div className=" flex justify-between gap-2">
          {facilities.map((tag, idx) => (
            <span className=" text-teal-400" key={idx}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span className="font-bold text-teal-500 text-xl">{status}</span>
          <div className="flex gap-1 items-center">
            <span>
            <FaDollarSign />

            </span>
            <span className="font-bold text-teal-500 text-xl">{area}</span>
          </div>
          <Link to={`/property/${id}`}><button  data-aos="flip-up" className="btn text-white bg-teal-400 ">View property</button></Link>
        </div>
      </div>
    </article>
  );
};

SingleProperty.propTypes = {
  property: PropTypes.object.isRequired,
};


export default SingleProperty;
