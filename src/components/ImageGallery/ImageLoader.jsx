import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ImageLoader = ({ src, data, id }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={twMerge(
            "max-w-full max-h-full h-56 border-solid border-2 border-purple-500 animate-pulse bg-slate-300 shadow rounded-lg",
            data.sortable.items[0] == id &&
              "md:h-[464px] order-first md:col-span-2 md:row-span-2 "
          )}
        ></div>
      )}
      <img
        src={src}
        alt="Your Image"
        className={`max-w-full max-h-full rounded-lg border-solid border-2 border-purple-500 ${
          isLoading ? "hidden" : ""
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageLoader;
