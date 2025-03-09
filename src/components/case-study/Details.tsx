import React from "react";

const Details: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-stretch justify-center px-80 py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(51,51,79,1)] text-[40px] font-bold max-md:max-w-full">
        Details
      </h2>

      <div className="w-full mt-6 max-md:max-w-full">
        <h3 className="text-[rgba(51,51,79,1)] text-[28px] font-bold leading-none max-md:max-w-full">
          Approach
        </h3>
        <p className="text-[#5C5C72] text-lg font-normal leading-8 mt-4 max-md:max-w-full">
          Convotrack's Gen-AI engine used proprietary machine learning
          algorithms to extract multi-dimensional insights from unstructured
          video content across major social platforms. Our technology
          architecture performed natural language processing on captions,
          analyzed visual content patterns, and mapped engagement metrics
          against content taxonomies to generate statistically significant trend
          vectors. The system's computational framework classified content into
          distinct concept categories (Routine, Aesthetic, Proof-based, and
          Viral), providing quantifiable performance metrics for each content
          typology based on engagement rates and view accumulation patterns.
        </p>
      </div>

      <div className="w-full mt-6 max-md:max-w-full">
        <h3 className="text-[rgba(51,51,79,1)] text-[28px] font-bold leading-none max-md:max-w-full">
          Analysis
        </h3>
        <div className="text-[#5C5C72] text-lg font-normal leading-8 mt-4 max-md:max-w-full">
          <p>
            The AI system performed deep computational analysis across multiple
            dimensions of the skincare content ecosystem:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <span className="font-semibold">
                Trending Concept Quantification:
              </span>{" "}
              The algorithm identified nine statistically significant content
              concepts showing above-average engagement rates, including
              &quot;Unwind with me&quot; (16% ER), &quot;Skin Cycling&quot; (14%
              ER), and &quot;Vanilla Girl&quot; (11% ER). Machine learning
              classification revealed that these concepts cluster into four
              distinct content categories.
            </li>
            <li>
              <span className="font-semibold">
                Engagement-to-Views Correlation Analysis:{" "}
              </span>
              Advanced pattern recognition detected inverse correlation patterns
              between engagement rates and total views for certain concepts,
              suggesting specific content types optimize for either deep
              engagement or broad reach—critical intelligence for targeted
              campaign planning.
            </li>
            <li>
              <span className="font-semibold text-[#5C5C72]">
                Platform-Specific Behavioral Mapping:{" "}
              </span>
              The system's cross-platform analysis revealed distinct content
              consumption patterns: Instagram optimized for aesthetics (60% of
              top-performing content), YouTube for educational content (50%),
              and TikTok for rapid-cycle viral concepts.
            </li>
            <li>
              <span className="font-semibold text-[#5C5C72]">
                Product and Ingredient Sentiment Classification:{" "}
              </span>
              Natural language processing detected emerging ingredient trends,
              including polyglutamic acid (54 mentions), beta glucan (43
              mentions), and peptides (65 mentions), revealing consumer interest
              shifts toward science-backed formulations.
            </li>
            <li>
              <span className="font-semibold text-[#5C5C72]">
                Consumer Decision Factor Correlation:
              </span>{" "}
              AI-driven factor analysis revealed clinical results (42 mentions)
              and user reviews (38 mentions) as primary purchase consideration
              drivers, providing quantifiable metrics for messaging
              optimization.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;
