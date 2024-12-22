import React from "react";

const IntegratedCapabilities = () => {
  return (
    <section className="bg-white px-6 md:px-36 md:pt-32 ">
      <h2 className="text-4xl sm:text-5xl md:text-6xl md:mb-20 text-left indigo-text">
        Integrated Capabilities
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Capability 1 */}
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/digital.png`}
              alt="Building a Strong Digital Presence"
              className="rounded-lg object-cover w-full"
            />
            <div className="absolute inset-0 flex items-center justify-start pt-4 px-4 md:pt-36 md:pl-12 lg:pt-6 lg:pl-4 xl:pt-12 xl:pl-8  2xl:pt-16  2xl:pl-12 2xl:pb-0">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-40 backdrop-blur-md rounded-lg">
                <div className="text-white text-left md:p-6 p-4 lg:p-4 xl:p-8 2xl:p-12">
                  <h3 className="2xl:text-7xl md:text-6xl lg:text-4xl text-3xl font-light">01</h3>
                  <p className="2xl:text-3xl md:text-3xl lg:text-xl text-lg md:max-w-[240px] lg:max-w-[180px] max-w-[150px] 2xl:max-w-[240px]">
                    Building a Strong Digital Presence
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-800 max-w-[550px]">
            Your startup's digital presence is the foundation for credibility and connection. We craft engaging digital ecosystems that resonate with your audience and scale with your growth.
          </p>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
              How it fits
            </p>
            <ul className="list-none">
              <li className="text-gray-500 max-w-[450px]">
                / Amplifies your Brand Strategy by establishing consistent messaging across all touchpoints.
              </li>
              <li className="text-gray-500 max-w-[450px]">
                / Supports Go-To-Market strategies with a robust online footprint.
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 2 */}
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/web.png`}
              alt="Web Design & Optimization"
              className="rounded-lg object-cover w-full"
            />
           
           <div className="absolute inset-0 flex items-center justify-start pt-4 px-4 md:pt-36 md:pl-12 lg:pt-24 lg:pl-6 xl:pt-12 xl:pl-8  2xl:pt-56  2xl:pl-12 2xl:pb-0">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-40 backdrop-blur-md rounded-lg">
                <div className="text-white text-left md:p-6 p-4 lg:p-4 xl:p-8 2xl:p-12">
                  <h3 className="2xl:text-7xl md:text-6xl lg:text-4xl text-3xl font-light">02</h3>
                  <p className="2xl:text-3xl md:text-3xl lg:text-xl text-lg md:max-w-[240px] lg:max-w-[180px] max-w-[150px] 2xl:max-w-[240px]">
                    Web Design & Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-800 max-w-[550px]">
            Your website is often your startup's first impression. We design and optimize digital experiences that communicate your product, engage users, and drive conversions.
          </p>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
              How it fits
            </p>
            <ul className="list-none">
              <li className="text-gray-500 max-w-[450px]">
                / Elevates Product-Market Fit by translating user insights into intuitive designs.
              </li>
              <li className="text-gray-500 max-w-[450px]">
                / Integrates into GTM Strategy as a conversion-focused platform.
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 3 */}
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/comm.png`}
              alt="Communication Strategy"
              className="rounded-lg object-cover w-full"
            />
           <div className="absolute inset-0 flex items-center justify-start pt-4 px-4 md:pt-36 md:pl-12 lg:pt-28 lg:pl-6 xl:pt-12 xl:pl-8  2xl:pt-56  2xl:pl-12 2xl:pb-0">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-40 backdrop-blur-md rounded-lg">
                <div className="text-white text-left md:p-6 p-4 lg:p-4 xl:p-8 2xl:p-12">
                  <h3 className="2xl:text-7xl md:text-6xl lg:text-4xl text-3xl font-light">03</h3>
                  <p className="2xl:text-3xl md:text-3xl lg:text-xl text-lg md:max-w-[240px] lg:max-w-[180px] max-w-[150px] 2xl:max-w-[240px]">
                   Communication Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-800 max-w-[550px]">
            Clear, impactful communication is key to standing out. We develop strategies to deliver your message to the right audience, at the right time, on the right channels.
          </p>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
              How it fits
            </p>
            <ul className="list-none">
              <li className="text-gray-500 max-w-[450px]">
              / Reinforces Founder Alignment by crafting a unified voice.
              </li>
              <li className="text-gray-500 max-w-[450px]">
              / Enhances Brand Identity by defining tone and core messaging.
              </li>
            </ul>
          </div>
        </div>
        

        {/* Capability 4 */}
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <img
              src={`${process.env.PUBLIC_URL}/images/content.png`}
              alt="Content Strategy"
              className="rounded-lg object-cover w-full"
            />
           <div className="absolute inset-0 flex items-center justify-start pt-4 px-4 md:pt-36 md:pl-12 lg:pt-24 lg:pl-6 xl:pt-12 xl:pl-8  2xl:pt-48  2xl:pl-12 2xl:pb-0">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-40 backdrop-blur-md rounded-lg">
                <div className="text-white text-left md:p-6 p-4 lg:p-4 xl:p-8 2xl:p-12">
                  <h3 className="2xl:text-7xl md:text-6xl lg:text-4xl text-3xl font-light">04</h3>
                  <p className="2xl:text-3xl md:text-3xl lg:text-xl text-lg md:max-w-[240px] lg:max-w-[180px] max-w-[150px] 2xl:max-w-[200px]">
                   Content Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl text-gray-800 max-w-[550px]">
            Great content drives trust, engagement, and growth. We create actionable content strategies to keep your audience informed and inspired.
          </p>
          <div className="space-y-2">
            <p className="text-xs text-gray-500 bg-gray-100 w-fit rounded-lg px-2 py-1">
              How it fits
            </p>
          </div>
          <ul className="list-none">
            <li className="text-gray-500 max-w-[450px]">
            / Strengthens GTM Strategy with compelling storytelling for acquisition and retention.
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntegratedCapabilities;
