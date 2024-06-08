import React, { useState } from "react";
import Destinations from "./Destinations";
import data from "../../assets/Data/data";

const Destination = () => {
  const [displayedDestinations, setDisplayedDestinations] = useState(3);

  const loadMore = () => {
    setDisplayedDestinations((prevCount) => prevCount + 3);
  };

  return (
    <div className="pt-[6rem] ">
      <h1 className="text-black text-center underline font-extrabold text-3xl">
        Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 lg:m-5">
        {data.slice(0, displayedDestinations).map((destination, index) => (
          <Destinations
            key={index}
            name={destination.name}
            image={destination.image}
            description={destination.description}
            priceperperson={destination.priceperperson}
            groupprice={destination.groupprice}
            destination={destination}
          />
        ))}
      </div>
      {displayedDestinations < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Destination;
