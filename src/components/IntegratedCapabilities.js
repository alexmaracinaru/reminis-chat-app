import React from "react";

const CapabilityCard = ({ step, title, description, howItFits, image, bgPadding }) => (
  <div className="flex flex-col space-y-6">
    {/* Image with Blurred Overlay */}
    <div className="relative">
      <img src={`${process.env.PUBLIC_URL}${image}`} alt={title} className="rounded-lg object-cover w-full" />
      <div
        className={`absolute inset-0 flex ${bgPadding} md:pl-16 pl-6`}
      >
        <div className="bg-white bg-opacity-10 border border-white border-opacity-40 backdrop-blur-md rounded-lg md:p-6 p-4 lg:p-12">
          <div className="text-white text-left">
            <h3 className="md:text-8xl text-3xl">{step} /</h3>
            <p className="md:text-3xl text-xl md:max-w-[240px] max-w-[150px] ">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="text-2xl max-w-[550px]">{description}</p>

    {/* How it Fits */}
    <div className="space-y-2">
      <p className="text-xs text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
        How it fits
      </p>
      <ul className="list-none">
        {howItFits.map((item, index) => (
          <li key={index} className="text-gray-500 max-w-[450px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const IntegratedCapabilities = () => {
  const capabilities = [
    {
      step: "01",
      title: "Building a Strong Digital Presence",
      description:
        "Your startup's digital presence is the foundation for credibility and connection. We craft engaging digital ecosystems that resonate with your audience and scale with your growth.",
      howItFits: [
        "/ Amplifies your Brand Strategy by establishing consistent messaging across all touchpoints.",
        "/ Supports Go-To-Market strategies with a robust online footprint.",
      ],
      image: "/images/digital.png",
      bgPadding: "md:pt-24 pt-12 md:pb-16 pb-6",
    },
    {
      step: "02",
      title: "Web Design & Optimization",
      description:
        "Your website is often your startup's first impression. We design and optimize digital experiences that communicate your product, engage users, and drive conversions.",
      howItFits: [
        "/ Elevates Product-Market Fit by translating user insights into intuitive designs.",
        "/ Integrates into GTM Strategy as a conversion-focused platform.",
      ],
      image: "/images/web.png",
      bgPadding: "md:pt-64 pt-32 md:pb-16 pb-6",
    },
    {
      step: "03",
      title: "Communication Strategy",
      description:
        "Clear, impactful communication is key to standing out. We develop strategies to deliver your message to the right audience, at the right time, on the right channels.",
      howItFits: [
        "/ Reinforces Founder Alignment by crafting a unified voice.",
        "/ Enhances Brand Identity by defining tone and core messaging.",
      ],
      image: "/images/comm.png",
      bgPadding: "md:pt-80 pt-36 md:pb-16 pb-8",
    },
    {
      step: "04",
      title: "Content (SoMe) Strategy",
      description:
        "Great content drives trust, engagement, and growth. We create actionable content strategies to keep your audience informed and inspired.",
      howItFits: [
        "/ Strengthens GTM Strategy with compelling storytelling for acquisition and retention.",
      ],
      image: "/images/content.png",
      bgPadding: "md:pt-56 pt-24 md:pb-16 pb-8",
    },
  ];

  return (
    <section className=" bg-white md:px-36 px-6 md:py-24 py-12">
      <h2 className="md:text-6xl text-4xl md:mb-12 mb-8 indigo-text">Integrated Capabilities</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {capabilities.map((capability, index) => (
          <CapabilityCard key={index} {...capability} />
        ))}
      </div>
    </section>
  );
};

export default IntegratedCapabilities;
