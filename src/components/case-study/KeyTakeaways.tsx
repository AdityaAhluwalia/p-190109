import React from "react";

interface KeyTakeawayItemProps {
  title: string;
  description: string;
}

const KeyTakeawayItem: React.FC<KeyTakeawayItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full mt-6 max-md:max-w-full">
      <h3 className="text-[rgba(51,51,79,1)] text-[28px] font-bold leading-none max-md:max-w-full">
        {title}
      </h3>
      <p className="text-[#5C5C72] text-lg font-normal leading-8 mt-4 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

const KeyTakeaways: React.FC = () => {
  const takeaways = [
    {
      title: "Content Strategy Matrix",
      description:
        'The data revealed four distinct content strategy quadrants with statistically significant performance patterns. "Routine Concepts" generated the highest engagement (16% average ER) while "Aesthetic Concepts" accumulated highest view totals (55M across analyzed content), providing a quantifiable framework for campaign planning.',
    },
    {
      title: "Predictive Trend Timeline",
      description:
        "The system's temporal analysis identified precise opportunity windows for trend activation, including immediate opportunities (Audio Tracks: 48 hours), near-term windows (Unwind with me, Skincare Shelfie: 3 months), and seasonal timing (Inflight Skincare: December travel season).",
    },
    {
      title: "Content Format Optimization",
      description:
        "Format effectiveness analysis revealed differentiated performance patterns by concept, with ASMR elements boosting engagement by 35% for relaxation content and microscope visuals increasing retention by 42% for educational content.",
    },
    {
      title: "Emerging Product Category Signals",
      description:
        "The system detected early-stage signals for emerging product formats, including powder-to-foam textures, patch technology applications, and micro-dart delivery systems—providing actionable innovation pipeline intelligence.",
    },
    {
      title: "Generation Alpha Indicators",
      description:
        "Forward-looking content analysis identified statistically significant growth in younger demographic engagement (ages 10-14) with simplified skincare routines and educational content formats, signaling future market evolution.",
    },
  ];

  return (
    <section className="bg-white flex w-full flex-col items-stretch justify-center px-80 py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(51,51,79,1)] text-[40px] font-bold max-md:max-w-full">
        Key Takeaways
      </h2>

      {takeaways.map((takeaway, index) => (
        <KeyTakeawayItem
          key={index}
          title={takeaway.title}
          description={takeaway.description}
        />
      ))}

      <p className="text-[#5C5C72] text-lg font-normal leading-8 mt-6 max-md:max-w-full">
        <span className="font-semibold">
          The AI-generated insights provided the brand with a data-driven
          content strategy framework,
        </span>{" "}
        optimizing resource allocation across high-performance concepts and
        enabling precise timing of campaign activation based on trend lifecycle
        analysis.
      </p>
    </section>
  );
};

export default KeyTakeaways;
