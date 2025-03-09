import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="border-b-[color:var(--grey-dividers,#EBEBED)] bg-white flex w-full flex-col items-center justify-center px-[70px] py-4 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1139px] items-center gap-5 flex-wrap justify-between ml-[21px] max-md:max-w-full">
        <div className="self-stretch italic text-[22px] font-black my-auto">
          <span className="text-[#33334F]">Convo</span>
          <span className="text-[#00C389]">Track</span>
        </div>
        <nav className="self-stretch relative flex gap-10 text-base text-[#33334F] font-medium my-auto">
          <div className="z-0">Consumer insights</div>
          <div className="absolute z-0 flex w-[100px] shrink-0 h-2 right-0 bottom-0" />
          <div className="text-[#3654FF] z-0">Influencers</div>
          <div className="z-0">Case studies</div>
        </nav>
        <button className="self-stretch bg-[#3654FF] flex items-center justify-center min-h-10 gap-2 text-sm text-white font-semibold leading-none px-6 rounded-[100px] max-md:px-5">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
