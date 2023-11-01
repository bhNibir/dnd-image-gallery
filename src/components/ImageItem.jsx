import React from "react";
import { twMerge } from "tailwind-merge";
import CheckInput from "./CheckInput";

const ImageItem = ({ item, selectedItems, handleCheckboxChange }) => {
  const { id, future, image } = item;
  return (
    <div
      key={id}
      className={twMerge(
        "relative",
        future && "order-first md:col-span-2 md:row-span-2 "
      )}
    >
      {selectedItems.includes(id) && (
        <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-10"></div>
      )}
      <img
        className="max-w-full max-h-full rounded-lg border-solid border-2 border-purple-500"
        src={`${image}`}
      />
      <CheckInput
        checked={selectedItems.includes(id)}
        onChange={() => handleCheckboxChange(id)}
        className="absolute top-2 left-2"
      />
    </div>
  );
};

export default ImageItem;
