import React, { useEffect, useState } from "react";

const StartupCard = ({ category, name, description, image, link }) => (
  <div className="space-y-4">
   <div className="relative overflow-hidden rounded-lg">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={image}
        alt={name}
        className="border-radius-21 w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </a>
    </div>
    <p className="text-xs sm:text-sm text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
      {category}
    </p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3 className="text-xl sm:text-2xl md:text-3xl indigo-text">{name}</h3>
    </a>
    <p className="text-gray-600 text-sm sm:text-base max-w-[300px] pb-4">
      {description}
    </p>
    {/* <a href={link} className="text-gray-500 text-xs font-medium hover:font-bold ease-in-out duration-300">
      Read Case Study &rarr;
    </a> */}
  </div>
);

const OurStartups = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/startups.json`)
      .then((response) => response.json())
      .then((data) => {
        // Update image paths dynamically
        const updatedData = data.map((startup) => ({
          ...startup,
          image: `${process.env.PUBLIC_URL}${startup.image}`,
        }));
        setStartups(updatedData);
      })
      .catch((error) => console.error("Error fetching startups:", error));
  }, []);

  return (
    <section
    id="our-startups"
      className="relative bg-white px-6 sm:px-12 md:px-24 lg:px-36 py-10 min-h-screen"
      style={{ zIndex: 20 }}
    >
      {/* Heading for Our Startups */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl text-center md:text-left md:pt-32 md:pb-20 indigo-text">
        Our Startups
      </h2>
      {/* Startup Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {startups.map((startup, index) => (
          <StartupCard
            key={index}
            category={startup.category}
            name={startup.name}
            description={startup.description}
            image={startup.image}
            link={startup.link}
          />
        ))}
      </div>
         {/* Divider */}
  <div className="md:block hidden mt-24 border-t border-gray-300 relative z-10"></div>
    </section>
  );
};

export default OurStartups;
