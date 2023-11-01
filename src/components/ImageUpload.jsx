import { ImagePlus } from "lucide-react";
import React from "react";

const ImageUpload = () => {
  return (
    <div
      className="flex flex-col items-center justify-center order-last 
        rounded-lg border-solid border-2 border-purple-500 max-w-full max-h-full p-4 "
    >
      <ImagePlus />
      <p className="font-bold mt-1">Add Images</p>
    </div>
  );
};

export default ImageUpload;
