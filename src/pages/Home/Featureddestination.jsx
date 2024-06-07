import React from "react";

const Featureddestination = ({ image, name, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-[15rem] clear-end " />
      <h2 className="text-2xl font-semibold mb-2 text-center">{name}</h2>
      <p className="text-gray-700 p-2">{description}</p>
    </div>
  );
};

export default Featureddestination;
