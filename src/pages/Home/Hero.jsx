import React from "react";
import Heroimg from "../../assets/images/2.jpg";
import Heroimg2 from "../../assets/images/6.jpg";
import Heroimg3 from "../../assets/images/8.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="relative pt-24">
      {" "}
      {/* Added padding-top to push carousel content below navbar */}
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}>
        {/* Slide 1 */}
        <div className="relative w-full h-[40rem]">
          <img
            src={Heroimg}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <ul className="flex gap-2 text-2xl text-slate-400 mb-4">
              <li>Explore</li>
              <li>Discover</li>
              <li>Travel</li>
            </ul>
            <p className="text-white font-extrabold text-[2rem] md:text-[4rem] lg:text-[6rem] mb-6">
              Explore the world with us
            </p>
            <Link
              to="/packages"
              className="text-white bg-slate-900 w-[8rem] p-2 rounded-full transition hover:scale-110 hover:bg-indigo-500 duration-300">
              Discover More
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[40rem]">
          <img
            src={Heroimg3}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <ul className="flex gap-2 text-2xl text-slate-600 mb-4">
              <li>Explore</li>
              <li>Discover</li>
              <li>Travel</li>
            </ul>
            <p className="text-white font-extrabold text-[2rem] md:text-[4rem] lg:text-[6rem] mb-6">
              Best safaris and adventures
            </p>
            <Link
              to="/packages"
              className="text-white bg-slate-900 w-[8rem] p-2 rounded-full transition hover:scale-110 hover:bg-indigo-500 duration-300">
              Discover More
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[40rem]">
          <img
            src={Heroimg2}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <ul className="flex gap-2 text-2xl text-slate-400 mb-4">
              <li>Explore</li>
              <li>Discover</li>
              <li>Travel</li>
            </ul>
            <p className="text-white font-extrabold text-[2rem] md:text-[4rem] lg:text-[6rem] mb-6">
              Explore the world with us
            </p>
            <Link
              to="/packages"
              className="text-white bg-slate-900 w-[8rem] p-2 rounded-full transition hover:scale-110 hover:bg-indigo-500 duration-300">
              Discover More
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
