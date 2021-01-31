import React from "react";
import Image from "./Image";
import brushes from "./assets/brushes.jpg";
import recycle from "./assets/recycle.jpg";
import palette from "./assets/palette.jpg";

const aboutSections = [
  {
    source: brushes,
    name: "brushes",
    text:
      "You'll find more than 15,000 products from approximately 450 beauty brands across all categories and price points. Our core values are diversity, courage and eco-friendliness.",
  },
  {
    source: recycle,
    name: "recycle",
    text:
      "We design, develop and manufacture injection moulded reusable packaging. Our products offer includes solutions for every market such as durable beverage crates, pallets, handling trays and bulk-containers. A pioneer in fit-to-purpose loop ready packaging throughout the entire supply chain.",
  },
  {
    source: palette,
    name: "palette",
    text:
      "To you, brave human, fighter who struggles every day to wear your smile like a flag. To you, the one whose eyes are the colour of strength, the eyes with which you transmit your gaze, the sensitivity that you feel towards life and towards everyone around you. We create cosmetics for you because nobody else knows how to use every battle to continue through the storm. Be creative and wear your make-up proudly.",
  },
];

const About = () => (
  <div className="about-container">
    <h1 style={{ marginBottom: "2rem" }}>About Makeup Showroom</h1>
    <div className="about-section">
      {aboutSections.map((item) => (
        <>
          <Image
            src={item.source}
            name={item.name}
            className="about-section__img"
          />
          <p className="about-section__text">{item.text}</p>
          <hr />
        </>
      ))}
    </div>
  </div>
);

export default About;
