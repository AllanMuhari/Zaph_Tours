import React, { useState } from "react";
import data from "../../assets/Data/data";
import Types from "./Types";

const Packages = () => {
  const [displayedPackages, setDisplayedPackages] = useState(3);

  const loadMore = () => {
    setDisplayedPackages(displayedPackages + 3);
  };
  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl underline ">
        Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] m-auto mb-7">
        {data.slice(0, displayedPackages).map((item, index) => {
          return (
            <Types
              key={index}
              type={item.type}
              image={item.image}
              groupprice={item.groupprice}
              description={item.description}
            />
          );
        })}
      </div>
      {displayedPackages < data.length && (
        <button
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex m-auto mb-4 justify-center content-center">
          Load More
        </button>
      )}
    </div>
  );
};

export default Packages;
