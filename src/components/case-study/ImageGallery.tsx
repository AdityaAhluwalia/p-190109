import React from "react";

interface ImageGalleryProps {
  images: string[];
  aspectRatio?: string;
  className?: string;
  imageClassName?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  aspectRatio = "1",
  className = "flex w-full flex-wrap max-md:max-w-full",
  imageClassName = "aspect-[1] object-contain w-72 min-w-60 grow shrink",
}) => {
  return (
    <div className={className}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery image ${index + 1}`}
          className={imageClassName}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
