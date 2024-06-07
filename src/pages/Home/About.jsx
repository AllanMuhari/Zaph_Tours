import React from "react";
import Aboutimg from "../../assets/images/4.jpg";
import { FaHandHoldingDollar, FaHeadset, FaMap } from "react-icons/fa6";

const About = () => {
  return (
    <div className="m-3 ">
      <h1 className="text-center font-extrabold text-4xl">About Us</h1>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center content-center gap-1 ">
        <img src={Aboutimg} alt="About" className="w-[30rem]" />
        <div className="flex  flex-col w-[60%]">
          <h2 className=" text-center text-2xl font-semibold sm:mb-4">
            Why Choose Us
          </h2>

          <p className="text-lg m-auto text-center md:w-[50%]">
            Honest Prices We Have The Best Prices For Tours, And A Huge
            Selection Of Destinations Will Not Leave Indifferent Even Avid
            Tourist. Quality And Services Here, Our Quality And Service Go
            Hand-In-Hand
          </p>
          <div className="flex gap-[2rem] justify-center m-1 ">
            <div className="flex flex-col items-center justify-center bg-slate-400 p-3 rounded-lg">
              <FaHandHoldingDollar className="h-11 w-[6rem] mb-2" />
              <h1 className="text-white font-bold text-center">
                Affordable prices
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-slate-400 p-3 rounded-lg">
              <FaHeadset className="h-11 w-[6rem] mb-2" />
              <h1 className="text-white font-bold text-center">
                Affordable prices
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-slate-400 p-3 rounded-lg">
              <FaMap className="h-11 w-[6rem] mb-2" />
              <h1 className="text-white font-bold text-center">
                Affordable prices
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
