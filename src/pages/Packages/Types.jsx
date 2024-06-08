import React from "react";

const Types = ({ type, image, groupprice, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{type}</h1>
        <img src={image} alt={type} className="w-full h-[15rem] clear-end " />
        <h1 className="text-2xl font-bold mt-5">Price: ${groupprice}</h1>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Types;
