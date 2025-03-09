import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch relative w-full text-base text-[#707084] font-normal px-[130px] max-md:max-w-full max-md:px-5">
      <div className="bg-white z-0 min-h-[105px] w-full pb-10 max-md:max-w-full">
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="max-md:max-w-full">
            Copyright © 2021-2024 Convosight. All rights reserved.
          </div>
          <div className="flex min-w-60 gap-2">
            <div>Privacy Policy</div>
            <div>•</div>
            <div>Terms of Service</div>
            <div>•</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 flex min-h-2 w-[1440px] h-2 right-0 bottom-0 max-md:max-w-full" />
    </footer>
  );
};

export default Footer;
