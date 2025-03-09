import React, { useState } from "react";

interface MarketingGoal {
  id: string;
  label: string;
  selected: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "Tanmay Saxena",
    companyName: "Convosight Analytics Pvt. Ltd.",
    email: "tanmay.saxena@convosight.com",
    phone: "",
    customGoal: "",
  });

  const [marketingGoals, setMarketingGoals] = useState<MarketingGoal[]>([
    { id: "awareness", label: "Driving Category Awareness", selected: true },
    {
      id: "community",
      label: "Create a Community of Brand Users",
      selected: true,
    },
    {
      id: "consideration",
      label: "Increasing Brand Consideration",
      selected: false,
    },
    {
      id: "understand",
      label: "Understand what Customers say about Brand",
      selected: false,
    },
    { id: "purchase", label: "Influencing Purchase Intent", selected: false },
    { id: "advocacy", label: "Drive Brand Advocacy", selected: true },
    { id: "all", label: "All of the above", selected: false },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleGoal = (id: string) => {
    setMarketingGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, selected: !goal.selected } : goal,
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      formData,
      selectedGoals: marketingGoals.filter((g) => g.selected),
    });
    // Here you would typically send the data to your backend
  };

  return (
    <section className="bg-white self-stretch flex w-full flex-col items-center px-10 py-20 rounded-lg max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col items-center text-[#33334F] text-center">
        <h2 className="text-[40px] font-extrabold max-md:max-w-full">
          Ready to get started?
        </h2>
        <p className="text-lg font-normal leading-6 w-[640px] mt-4 max-md:max-w-full">
          Reach out to our experts who can help you understand how Convosight
          can augment your existing marketing plans.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-[800px] max-w-full flex-col items-center mt-14 max-md:mt-10"
      >
        <div className="max-md:max-w-full w-full">
          <div className="flex gap-8 flex-wrap max-md:max-w-full">
            <div className="flex min-w-60 flex-col items-stretch w-96">
              <label className="flex gap-1 text-xs font-medium leading-none">
                <span className="text-[#707084]">Full Name</span>
                <span className="text-[#EB5757]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="self-stretch flex-1 shrink basis-[0%] rounded border border-[color:var(--grey-tints-borders-grey,#E0E0E5)] bg-white min-h-12 w-full gap-[40px_53px] text-sm text-[#33334F] font-normal leading-none mt-2 px-4 border-solid"
              />
            </div>
            <div className="flex min-w-60 flex-col items-stretch w-96">
              <label className="flex gap-1 text-xs font-medium leading-none">
                <span className="text-[#707084]">Company Name</span>
                <span className="text-[#EB5757]">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="self-stretch flex-1 shrink basis-[0%] rounded border border-[color:var(--grey-tints-borders-grey,#E0E0E5)] bg-white min-h-12 w-full gap-[40px_53px] text-sm text-[#33334F] font-normal leading-none mt-2 px-4 border-solid"
              />
            </div>
          </div>

          <div className="flex gap-8 flex-wrap mt-6 max-md:max-w-full">
            <div className="flex min-w-60 flex-col items-stretch w-96">
              <label className="flex gap-1 text-xs font-medium leading-none">
                <span className="text-[#707084]">Official Email Address</span>
                <span className="text-[#EB5757]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="self-stretch flex-1 shrink basis-[0%] rounded border border-[color:var(--grey-tints-borders-grey,#E0E0E5)] bg-white min-h-12 w-full gap-[40px_53px] text-sm text-[#33334F] font-normal whitespace-nowrap leading-none mt-2 px-4 border-solid"
              />
            </div>
            <div className="flex min-w-60 flex-col items-stretch w-96">
              <label className="gap-1 text-xs text-[#707084] font-medium leading-none">
                Phone No.
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number..."
                className="self-stretch flex-1 shrink basis-[0%] rounded border border-[color:var(--grey-tints-borders-grey,#E0E0E5)] bg-white min-h-12 w-full gap-[40px_53px] text-sm text-[#ADADB9] font-normal leading-none mt-2 px-4 border-solid"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[800px] flex-col items-stretch font-medium mt-10 max-md:max-w-full">
          <label className="flex gap-1 text-xs leading-none">
            <span className="text-[#707084]">
              What do you think Community Marketing can help you achieve?
            </span>
            <span className="text-[#EB5757]">*</span>
          </label>

          <div className="flex w-full flex-col items-stretch text-sm leading-none mt-4 max-md:max-w-full">
            <div className="flex gap-2 flex-wrap max-md:max-w-full">
              {marketingGoals.slice(0, 3).map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => toggleGoal(goal.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-[20px] ${
                    goal.selected
                      ? "bg-[rgba(54,84,255,0.15)] text-[#3654FF]"
                      : "bg-white text-[#33334F]"
                  }`}
                >
                  <img
                    src={
                      goal.selected
                        ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/84662aedcd165c2bade778ed552e09a41cdd90924e77d38afc5d8eb5a1961073?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/55387a1eb7d16667ab3ac7b46e77b6767ffb6fe5f6481b669e8d2cc95dd8e6ff?placeholderIfAbsent=true"
                    }
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt=""
                  />
                  <span className="self-stretch my-auto">{goal.label}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap mt-2 max-md:max-w-full">
              {marketingGoals.slice(3, 6).map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => toggleGoal(goal.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-[20px] ${
                    goal.selected
                      ? "bg-[rgba(54,84,255,0.15)] text-[#3654FF]"
                      : "bg-white text-[#33334F]"
                  }`}
                >
                  <img
                    src={
                      goal.selected
                        ? "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/d913c39db460876dc4fca518da172df7ef5caa19260c92c21cf4ca2210a6c0b5?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/a551b37975f1ded4bdf18057d72b90f99f82bb9efa946dd6ef73b1b43f2e7196?placeholderIfAbsent=true"
                    }
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt=""
                  />
                  <span className="self-stretch my-auto">{goal.label}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => toggleGoal("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-[20px] ${
                  marketingGoals.find((g) => g.id === "all")?.selected
                    ? "bg-[rgba(54,84,255,0.15)] text-[#3654FF]"
                    : "bg-white text-[#33334F]"
                }`}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/e42feba24606aea782e8dc1c0646d199e8455d9efc4e6458f345297e1cc4e7b6?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <span className="self-stretch my-auto">All of the above</span>
              </button>

              <div className="bg-[rgba(54,84,255,0.15)] flex items-center gap-2 text-[#ADADB9] px-4 py-2 rounded-[20px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/15b05be649acd5ee8e7970a4bebc2d43de328325f1254932323288e51eee81c1?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <input
                  type="text"
                  name="customGoal"
                  value={formData.customGoal}
                  onChange={handleInputChange}
                  placeholder="enter details..."
                  className="self-stretch my-auto bg-transparent border-none outline-none text-[#ADADB9]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[800px] items-center text-base text-[#3654FF] font-medium leading-none flex-wrap mt-10 max-md:max-w-full">
          <div className="bg-[rgba(54,84,255,0.1)] self-stretch flex min-w-60 w-[308px] shrink h-px flex-1 basis-8 my-auto" />
          <button
            type="button"
            className="self-stretch flex items-center gap-2 my-auto px-4 py-2 rounded-[20px]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/05debbe50e396dbd9aa98b0e30c3ea4fc859e905600bc7b98b58d70bd6558594?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt=""
            />
            <span className="self-stretch my-auto">Add More Details</span>
          </button>
          <div className="bg-[rgba(54,84,255,0.1)] self-stretch flex min-w-60 w-[308px] shrink h-px flex-1 basis-8 my-auto" />
        </div>

        <button
          type="submit"
          className="self-stretch bg-[#3654FF] w-full gap-2.5 text-base text-white font-medium whitespace-nowrap text-center leading-none mt-10 px-40 py-3.5 rounded-[100px] max-md:px-5"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
