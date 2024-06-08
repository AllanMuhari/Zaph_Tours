import React, { useState } from "react";
import Destinations from "../../assets/Data/data";
import Featureddestination from "./Featureddestination";

const Featureddestinations = () => {
  const initialDisplayCount = 2;
  const [displayedDestinations, setDisplayedDestinations] =
    useState(initialDisplayCount);

  const loadMore = () => {
    setDisplayedDestinations((prevCount) =>
      Math.min(prevCount + 2, Destinations.length)
    );
  };

  return (
    <div className="mt-[7rem] px-4">
      {" "}
      <h1 className="text-center font-extrabold text-3xl underline mb-6">
        Featured Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] m-auto mb-7">
        {Destinations.slice(0, displayedDestinations).map(
          (destination, index) => (
            <Featureddestination
              key={index}
              image={destination.image}
              name={destination.name}
              description={destination.description}
            />
          )
        )}
      </div>
      {displayedDestinations < 6 && (
        <button
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex m-auto mb-4 justify-center content-center">
          Load More
        </button>
      )}
    </div>
  );
};

export default Featureddestinations;
