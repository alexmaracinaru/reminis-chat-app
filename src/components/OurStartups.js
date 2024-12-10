import React, { useEffect, useState } from "react";

const StartupCard = ({ category, name, description, image, link }) => (
  <div className="space-y-4">
    <img src={image} alt={name} className="rounded-lg w-full object-cover" />
    <p className="text-xs sm:text-sm text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
      {category}
    </p>
    <h3 className="text-xl sm:text-2xl md:text-3xl indigo-text">{name}</h3>
    <p className="text-gray-600 text-sm sm:text-base max-w-[300px] pb-4" >
      {description}
    </p>
    <a href={link} className="text-gray-500 text-xs font-medium hover:font-bold ease-in-out duration-300">
      Discover More &rarr;
    </a>
  </div>
);

const OurStartups = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    fetch("/startups.json")
      .then((response) => response.json())
      .then((data) => setStartups(data))
      .catch((error) => console.error("Error fetching startups:", error));
  }, []);

  return (
    <section
      className="relative bg-white px-6 sm:px-12 md:px-24 lg:px-36 py-10 min-h-screen"
      style={{ zIndex: 20 }}
    >
      {/* Heading for Our Startups */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl mb-8 text-center md:text-left pt-32  indigo-text">
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
    </section>
  );
};

export default OurStartups;
