import React from "react";

const Summary: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-stretch justify-center px-80 py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(51,51,79,1)] text-[40px] font-bold max-md:max-w-full">
        Summary
      </h2>
      <p className="text-[#5C5C72] text-lg font-normal leading-8 mt-6 max-md:max-w-full">
        A leading personal care brand sought to identify high-engagement content
        strategies and emerging trends in the US skincare market to inform their
        2025 influencer marketing roadmap. Using ConvoTrack's advanced
        AI-powered influencer intelligence system, we analyzed
        <span className="font-semibold">
          {" "}
          7.7K+ videos from 150+ influencers across Instagram, TikTok, and
          YouTube, processing a collective audience of 6.75 billion non-unique
          followers.
        </span>{" "}
        Using Convotrack's trend spotter, they identified key trending concepts
        categorized by engagement metrics, content type distributions, and
        influencer mix.
      </p>
      <div className="w-full mt-6 max-md:max-w-full">
        <h3 className="text-[rgba(51,51,79,1)] text-[28px] font-bold leading-none max-md:max-w-full">
          Digital Landscape Analyzed
        </h3>
        <ul className="text-[#5C5C72] text-lg font-normal leading-8 mt-4 max-md:max-w-full list-disc pl-5">
          <li>
            <span className="font-semibold text-[#5C5C72]">9.9k </span>
            <span className="font-semibold text-[#5C5C72]">
              videos analyzed across TT, YT and IG
            </span>
          </li>
          <li>
            <span className="font-semibold text-[#5C5C72]">150+</span> creator
            accounts analyzed across 3 platforms
          </li>
          <li>
            <span className="font-semibold text-[#5C5C72]">1 billion</span>{" "}
            impressions
          </li>
          <li>
            <span className="font-semibold text-[#5C5C72]">
              8 trending concept vectors
            </span>{" "}
            identified
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Summary;
