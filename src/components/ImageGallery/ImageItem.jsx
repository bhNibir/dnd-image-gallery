import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { twMerge } from "tailwind-merge";
import CheckInput from "../ui/CheckInput";

const ImageItem = ({ item, selectedItems, handleCheckboxChange }) => {
  const { id, image } = item;

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    data,
  } = useSortable({
    id: id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      key={id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={twMerge(
        "relative",
        data.sortable.items[0] == id &&
          "order-first md:col-span-2 md:row-span-2 "
      )}
    >
      {selectedItems.includes(id) && (
        <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black opacity-10 z-10"></div>
      )}
      <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 hover:bg-black hover:opacity-70 z-10"></div>
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
