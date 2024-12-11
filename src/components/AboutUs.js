import React from "react";

const AboutUs = () => {
  const teamProfiles = [
    {
      name: "Alexandra Maracinaru",
      title: "Global Brand & Design Executive.",
      image: `${process.env.PUBLIC_URL}/images/alexandra.png`,
      links: [
        { href: "https://www.linkedin.com/in/alexandramaracinaru/", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/linkedin.svg`, alt: "LinkedIn" },
        { href: "https://x.com/alexmaracinaru", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/x.svg`, alt: "Twitter" },
        { href: "mailto:am@brandiaq.com", icon: `${process.env.PUBLIC_URL}/images/email.svg`, alt: "Email" },
      ],
      buttons: [
        { href: "https://brandiaq.com", target: "_blank", label: "brandiaq" },
        { href: "https://alexandramaracinaru.com", target: "_blank", label: "al.ma" },
      ],
    },
    {
      name: "Jonatan Håkansson",
      title: "Growth Consultant. Startup Scout.",
      image: `${process.env.PUBLIC_URL}/images/jonatan.png`,
      links: [
        { href: "https://www.linkedin.com/in/jonatanhakansson/", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/linkedin.svg`, alt: "LinkedIn" },
        { href: "https://x.com/jonatanhakansson", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/x.svg`, alt: "Twitter" },
        { href: "mailto:jonatan@namandla.com", icon: `${process.env.PUBLIC_URL}/images/email.svg`, alt: "Email" },
      ],
      buttons: [{ href: "https://hawkeye-invest.com/", target: "_blank", label: "hawkeye-invest" }],
    },
    {
      name: "Patricia Lourenco",
      title: "Product Manager.",
      image: `${process.env.PUBLIC_URL}/images/patricia.png`,
      links: [
        { href: "https://www.linkedin.com/in/patricia-s-lourenco/", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/linkedin.svg`, alt: "LinkedIn" },
        { href: "https://x.com/patricialourenco", target: "_blank", icon: `${process.env.PUBLIC_URL}/images/x.svg`, alt: "Twitter" },
        { href: "mailto:patricia@namandla.com", icon: `${process.env.PUBLIC_URL}/images/email.svg`, alt: "Email" },
      ],
      buttons: [{ href: "https://pixellate.studio/", target: "_blank", label: "pixellate.studio" }],
    },
  ];

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-36 md:py-24">
      {/* About Us Section */}
      <div className="max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl indigo-text">
          We’re entrepreneurial brand builders, growth partners, and design
          leaders who’ve built businesses, including our own — many times over.
        </h2>
        <button className="px-6 py-2 mt-6 text-white btn-color rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
          More about us
        </button>
      </div>

      {/* Team Profiles Section */}
      <div className="flex md:justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 max-w-3xl gap-4">
          {teamProfiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4"
            >
              <img
                src={profile.image}
                alt={profile.title}
                className="rounded-lg w-64 object-cover filter grayscale"
              />
              <h3 className="text-xl">{profile.name}</h3>
              <p className="text-gray-600 max-w-[150px]">{profile.title}</p>
              <div className="flex space-x-8">
                {profile.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="hover:text-gray-500"
                  >
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
              <div className="flex space-x-2">
                {profile.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
