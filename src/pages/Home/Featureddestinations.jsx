import React, { useState } from "react";
import Destinations from "../../assets/Data/data";
import Featureddestination from "./Featureddestination";

const Featureddestinations = () => {
  const [displayedDestinations, setDisplayedDestinations] = useState(3);

  const loadMore = () => {
    setDisplayedDestinations(displayedDestinations + 3);
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl underline">
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
      {displayedDestinations < Destinations.length && (
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
