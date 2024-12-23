import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Step = ({ id, step, title, content, deliverables }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={id} className="flex flex-col"> {/* Add id for linking */}
      {/* Step Header */}
      <div
        className="flex justify-between items-center cursor-pointer border-t border-black py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-8">
          <div className="text-2xl sm:text-3xl md:text-3xl indigo-text">{step} --</div>
          <h3 className="text-2xl md:text-4xl lg:text-3xl indigo-text">{title}</h3>
        </div>
        <button className="text-xl md:text-3xl">{isOpen ? "-" : "+"}</button>
      </div>

      {/* Step Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-16 flex flex-col items-end"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-[450px] text-left">
              <p className="text-gray-600 mt-4 blue-text">{content}</p>
              <p className="mt-6 text-2xl indigo-text">/ Key Deliverables</p>
              <p className="text-gray-600 blue-text">{deliverables}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OurApproach = () => {
  const steps = [
    {
      id: "founders-alignment",
      step: "01",
      title: "Founder Alignment Assessment",
      content:
        "You know that startups often fail due to misaligned visions and goals among founders. Addressing this first ensures you achieve a solid leadership foundation, cohesive decision-making, and shared priorities.",
      deliverables:
        "Alignment assessment report, actionable recommendations for team cohesion.",
    },
   
    {
      id: "pmf",
      step: "02",
      title: "Product-Market Fit (PMF)",
      content:
        "Achieving Product-Market Fit is critical to ensuring your product is viable and scalable. To accelerate this process, we leverage tools like Design Sprints to rapidly validate ideas, prototypes, and assumptions. This minimizes wasted time and resources while generating user-tested feedback and actionable insights. Once prototypes are validated, the product is refined to better align with market needs, reducing your risk of launching something without demand.",
      deliverables: "Prototypes, user-tested feedback, PMF validation report, scaling roadmap.",
    },
    {
      id: "branding",
      step: "03",
      title: "Brand Strategy & Identity",
      content:
        "Once we achieve PMF for your product, you need a compelling brand to capture attention, communicate your business' and product's purpose, and build trust. Moreover, branding also sets the foundation for effective marketing and fundraising.",
      deliverables:
        "Brand strategy doc, visual identity package, pitch deck, brand book",
    },
    {
      id: "gtm",
      step: "04",
      title: "Go-To-Market (GTM) Strategy",
      content:
        "With the product refined and the brand established, the final step is planning and executing a strategy for rapid market traction. During this stage we focus on customer acquisition, scaling, and measuring your success.",
      deliverables: "GTM strategy, launch plan with milestones.",
    },
  ];

  return (
    <section
    id="our-approach"
    className="bg-white px-6 md:px-36 md:pt-32 ">
      <h2 className="text-4xl sm:text-5xl md:text-6xl md:mb-20 text-left indigo-text">
        Our Approach
      </h2>

      <div className="space-y-8">
        {steps.map((step) => (
          <Step
            key={step.id}
            id={step.id}
            step={step.step}
            title={step.title}
            content={step.content}
            deliverables={step.deliverables}
          />
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
