import React from "react";
import background from "../../assets/images/6.jpg";

const Contacts = () => {
  return (
    <div>
      <div
        className="heading bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-white text-4xl font-bold">Book Now</h1>
      </div>
      <section className="booking py-12">
        <h1 className="text-center text-3xl font-bold mb-10">Book Your Trip</h1>

        <form className="max-w-4xl mx-auto bg-slate-400 shadow-md rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="block text-gray-700 mb-2">Name :</span>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Email :</span>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Phone :</span>
              <input
                type="number"
                placeholder="Enter your phone number"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Address :</span>
              <input
                type="text"
                placeholder="Enter your address"
                name="address"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Where to :</span>
              <input
                type="text"
                placeholder="Place you wish to visit"
                name="location"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">How many :</span>
              <input
                type="number"
                placeholder="Number of guests"
                name="guests"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Arrivals :</span>
              <input
                type="date"
                name="arrivals"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <span className="block text-gray-700 mb-2">Leaving :</span>
              <input
                type="date"
                name="leaving"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 cursor-pointer"
              name="send"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
