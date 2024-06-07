import React from "react";
import Destinations from "../../assets/Data/data";
import Featureddestination from "./Featureddestination";

const Featureddestinations = () => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">
        Featured Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] m-auto mb-7">
        {Destinations.map((destination, index) => (
          <Featureddestination
            key={index}
            image={destination.image}
            name={destination.name}
            description={destination.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Featureddestinations;
