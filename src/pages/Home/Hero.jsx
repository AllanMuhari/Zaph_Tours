import React from "react";
import Heroimg from "../../assets/images/2.jpg";
import Heroimg2 from "../../assets/images/6.jpg";
import Heroimg3 from "../../assets/images/8.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}>
      <div className="relative w-full h-[40rem] pt-7">
        <img src={Heroimg} alt="hero" className="w-full h-full object-cover " />
        <div className="absolute inset-0 pt-[2rem]">
          <ul className="flex flex-row justify-center gap-2 text-2xl text-slate-400">
            <li className="mb-2">Explore</li>,<li className="mb-2">Discover</li>
            ,<li className="mb-2">Travel</li>,
          </ul>
          <p className="text-white w-[20rem] lg:w-[60rem] flex justify-center m-auto content-center font-extrabold   text-[2rem] md:text-[4rem] lg:text-[6rem]   text-center uppercase ">
            Explore the world with us
          </p>

          <a
            href=""
            className="flex justify-center  text-white bg-slate-900 w-[8rem] p-2 rounded-full m-auto mt-8 content-center transition hover:scale-110 hover:bg-indigo-500 duration-300">
            <Link to="/packages"> Discover More</Link>
          </a>
        </div>
      </div>
      <div className="relative w-full h-[40rem]">
        <img
          src={Heroimg3}
          alt="hero"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 pt-[2rem]">
          <ul className="flex flex-row justify-center gap-2 text-2xl text-slate-600">
            <li className="mb-2">Explore</li>,<li className="mb-2">Discover</li>
            ,<li className="mb-2">Travel</li>,
          </ul>
          <p className="text-white w-[20rem] lg:w-[60rem] flex justify-center m-auto  content-center font-extrabold mb-20 text-[2rem] md:text-[4rem] lg:text-[6rem]  text-center uppercase">
            Best safaris and adevntures
          </p>

          <a
            href=""
            className="flex justify-center  text-white bg-slate-900 w-[8rem] p-2 rounded-full m-auto mt-8 content-center transition hover:scale-110 hover:bg-indigo-500 duration-300">
            <Link to="/packages"> Discover More</Link>
          </a>
        </div>
      </div>
      <div className="relative w-full h-[40rem]">
        <img
          src={Heroimg2}
          alt="hero"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 pt-[2rem]">
          <ul className="flex flex-row justify-center gap-2 text-2xl text-slate-400">
            <li className="mb-2">Explore</li>,<li className="mb-2">Discover</li>
            ,<li className="mb-2">Travel</li>,
          </ul>
          <p className="text-white w-[20rem] lg:w-[60rem] flex justify-center m-auto content-center font-extrabold  text-[2rem] md:text-[4rem] lg:text-[6rem]  text-center uppercase">
            Explore the world with us
          </p>

          <a
            href=""
            className="flex justify-center  text-white bg-slate-900 w-[8rem] p-2 rounded-full m-auto mt-6 content-center transition hover:scale-110 hover:bg-indigo-500 duration-300">
            <Link to="/packages"> Discover More</Link>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
