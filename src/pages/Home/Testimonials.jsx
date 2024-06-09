import React from "react";
import person1 from "../../assets/images/pic-1.jpg";
import person2 from "../../assets/images/pic-2.jpg";
import person3 from "../../assets/images/pic-3.jpg";
import person4 from "../../assets/images/pic-4.jpg";
import person5 from "../../assets/images/pic-5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: person1,
      quote:
        "This service is fantastic! It has improved my productivity significantly.",
      name: "Alice Johnson",
    },
    {
      image: person2,
      quote:
        "Amazing experience, the team was very supportive and the product exceeded my expectations.",
      name: "John Doe",
    },
    {
      image: person3,
      quote: "I can't recommend this enough. Truly exceptional!",
      name: "Jane Smith",
    },
    {
      image: person4,
      quote:
        "A game-changer for our business. Outstanding support and features.",
      name: "Emily Davis",
    },
    {
      image: person5,
      quote:
        "High quality and reliable. This has become an essential tool for us.",
      name: "Michael Brown",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Testimonials
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-lg text-gray-600 mb-4 leading-6 ">
                "{testimonial.quote}"
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
