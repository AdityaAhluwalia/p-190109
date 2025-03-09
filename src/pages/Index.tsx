import React from "react";
import {
  Header,
  Hero,
  Summary,
  ImageGallery,
  Details,
  KeyTakeaways,
  ContactForm,
  Footer,
} from "@/components/case-study";

const Index: React.FC = () => {
  // Gallery image URLs
  const squareGalleryImages = [
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/d7fe402386fcacbdd7b391e6c128ab02a4ef778bf7a77eaf7f276e1c55356b85?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/11497c5aa8d3eb2773f6cdb0669aa9bdb30018ab4aceba376639f7ee63141168?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/9c4cbd7681addc8ec79b9995c9e9dda651162679568a2e7ee07347116afbe92c?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/75ecb5401df25f317d49ddfe234a6ed1784b5894a4f27932cb83ef45a3f0e5c3?placeholderIfAbsent=true",
  ];
  const wideGalleryImages = [
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/97aa8e4f6dd046d29c7b4b71cb114bed21135a80e151caac2622584e84e4869a?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/3750e689fb4e4776a9e6999028bcd2b6/8c843f1287525f36ec8142b0c057d17a971d608fa728b0429d93f380e7dac355?placeholderIfAbsent=true",
  ];

  return (
    <div className="items-center bg-white flex flex-col overflow-hidden">
      <Header />
      <Hero />
      <Summary />
      <ImageGallery images={squareGalleryImages} />
      <Details />
      <ImageGallery
        images={wideGalleryImages}
        className="flex w-full gap-5 flex-wrap px-5 max-md:max-w-full"
        imageClassName="aspect-[1.44] object-contain w-full min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full"
      />
      <KeyTakeaways />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
