import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPhone,
  faEnvelope,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="box">
          <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Home
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> About
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Package
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Book
          </a>
        </div>

        <div className="box">
          <h3 className="text-lg md:text-xl font-bold mb-4">Extra Links</h3>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Ask
            Questions
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> About Us
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Privacy
            Policy
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Terms of
            Use
          </a>
        </div>

        <div className="box">
          <h3 className="text-lg md:text-xl font-bold mb-4">Contact Info</h3>
          <a href="tel:+254713982805" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> +254 713982805
          </a>
          <a href="tel:+254100751695" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> +254 100751695
          </a>
          <a
            href="mailto:allamuhari087@gmail.com"
            className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            allamuhari087@gmail.com
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMap} className="mr-2" /> Nairobi,
            Kenya-10200
          </a>
        </div>

        <div className="box">
          <h3 className="text-lg md:text-xl font-bold mb-4">Follow Us</h3>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faFacebookF} className="mr-2" /> Facebook
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Twitter
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
          </a>
          <a href="#" className="flex items-center mb-2">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
        Created by{" "}
        <span className="text-white font-semibold">Allan Muhari</span> | All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
