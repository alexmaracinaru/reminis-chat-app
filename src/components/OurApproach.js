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
      id: "design-sprint",
      step: "02",
      title: "Design Sprint",
      content:
        "Once you, as founders, are aligned, the next priority is to validate ideas, prototypes, and assumptions rapidly. A well-executed Design Sprint minimizes wasted time and resources by focusing on feasibility and early feedback.",
      deliverables:
        "Prototypes, user-tested feedback, insights into product-market fit.",
    },
    {
      id: "pmf",
      step: "03",
      title: "Product-Market Fit (PMF)",
      content:
        "After validating your prototype, you must refine the product to align with market needs. This step ensures the product is viable and scalable reducing, therefore, your risk (and our as investors) of launching something without demand.",
      deliverables: "PMF validation report, scaling roadmap.",
    },
    {
      id: "branding",
      step: "04",
      title: "Brand Strategy & Identity",
      content:
        "Once we achieve PMF for your product, you need a compelling brand to capture attention, communicate your business' and product's purpose, and build trust. Moreover, branding also sets the foundation for effective marketing and fundraising.",
      deliverables:
        "Brand strategy document, visual identity package, pitch deck.",
    },
    {
      id: "gtm",
      step: "05",
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
