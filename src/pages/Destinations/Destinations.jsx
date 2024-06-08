import React from "react";
import { Link } from "react-router-dom";

const Destinations = ({
  name,
  image,
  description,
  priceperperson,
  groupprice,
}) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={image}
          alt="destination"
          className="w-full h-56 object-cover object-center"
        />
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="flex justify-between mt-3">
            <span className="text-gray-600">
              Price per person: ${priceperperson}
            </span>
            <span className="text-gray-600">Group price: ${groupprice}</span>
          </div>
          <a
            href=""
            className="block w-full bg-blue-500 hover:bg-blue-400 text-white uppercase text-sm font-semibold p-3 rounded mt-3 text-center">
            <Link to="/contacts"> Book Now</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
