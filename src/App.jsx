import { ImagePlus } from "lucide-react";
import { useState } from "react";
import CheckInput from "./components/CheckInput";

const images = [
  {
    id: 1,
    image: "../src/assets/images/image-1.webp",
  },
  { id: 2, image: "../src/assets/images/image-2.webp" },
  { id: 3, image: "../src/assets/images/image-3.webp" },
  { id: 4, image: "../src/assets/images/image-4.webp" },
  {
    id: 5,
    image: "../src/assets/images/image-5.webp",
  },
  {
    id: 6,
    image: "../src/assets/images/image-6.webp",
  },
  {
    id: 7,
    image: "../src/assets/images/image-7.webp",
  },
  {
    id: 8,
    image: "../src/assets/images/image-8.webp",
  },
  {
    id: 9,
    image: "../src/assets/images/image-9.webp",
  },
  {
    id: 10,
    image: "../src/assets/images/image-10.jpeg",
  },
  {
    id: 11,
    future: true,
    image: "../src/assets/images/image-11.jpeg",
  },
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // If the item is already in the array, remove it
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      !selectedItems.length && setSelectAll(false);
    } else {
      // If the item is not in the array, add it
      setSelectedItems([...selectedItems, itemId]);
      setSelectAll(true);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll); // Toggle "Select All" state
    if (!selectAll) {
      setSelectedItems(images.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <header>
        <div>
          <h1 className="text-3xl font-bold  text-purple-600">
            {selectedItems
              ? `${selectedItems.length}  is selected`
              : "Image Galary"}
          </h1>
          <CheckInput
            checked={selectAll}
            onChange={handleSelectAll} // Handle checkbox state change
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((item) =>
          item.future ? (
            <div
              key={item.id}
              className="order-first md:col-span-2 md:row-span-2 relative"
            >
              {selectedItems.includes(item.id) && (
                <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-10"></div>
              )}
              <img
                className="max-w-full max-h-full rounded-lg border-solid border-2 border-purple-500"
                src={`${item.image}`}
              />
              <CheckInput
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="absolute top-2 left-2"
              />
            </div>
          ) : (
            <div key={item.id} className="relative">
              {selectedItems.includes(item.id) && (
                <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-10"></div>
              )}
              <img
                className="max-w-full max-h-full rounded-lg border-solid border-2 border-purple-500"
                src={`${item.image}`}
              />
              <CheckInput
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="absolute top-2 left-2"
              />
            </div>
          )
        )}

        <div
          className="flex flex-col items-center justify-center order-last 
          rounded-lg border-solid border-2 border-purple-500 max-w-full max-h-full p-4 "
        >
          <ImagePlus />
          <p className="font-bold mt-1">Add Images</p>
        </div>
      </div>
    </div>
  );
}

export default App;
