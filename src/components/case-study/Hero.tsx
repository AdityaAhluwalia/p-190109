import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="justify-center items-stretch bg-white flex min-h-[480px] w-full flex-col text-center max-md:max-w-full">
      <div className="flex flex-col relative min-h-[480px] w-full overflow-hidden flex-1 px-[130px] py-10 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/1848d46bd0a9e4a5fd1f47b2c2373cc8d201f106a1f6fc6f8608ad6c5a411f7a?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Skincare background"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/4c2448a06c91486d92a30264b15d9ff06e5297a862774943c368fdb072804cbc?placeholderIfAbsent=true"
          className="aspect-[3] object-contain w-full absolute z-0 inset-0 max-md:max-w-full"
          alt="Overlay pattern"
        />
        <div className="absolute bg-[rgba(0,0,0,0.5)] z-0 flex min-h-[480px] w-full inset-0 max-md:max-w-full" />
        <div className="relative self-stretch z-0 flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="text-white text-lg font-semibold leading-8 self-center">
            Case Study • US Skincare Trends
          </div>
          <div className="flex w-full flex-col items-stretch justify-center mt-20 max-md:max-w-full max-md:mt-10">
            <h1 className="text-white text-[56px] font-extrabold max-md:max-w-full max-md:text-[40px]">
              US Skincare: Understanding what skincare trends are traveling
              globally
            </h1>
            <h2 className="text-white text-[28px] font-medium mt-6 max-md:max-w-full">
              Large D2C brands wanted to experiment with trending skincare
              concepts in the US for their content strategy
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
