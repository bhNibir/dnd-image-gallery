import { useState } from "react";
import Header from "./components/Header";
import ImageItem from "./components/ImageItem";
import ImageUpload from "./components/ImageUpload";

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
      <Header
        selectAll={selectAll}
        selectedItems={selectedItems}
        handleSelectAll={handleSelectAll}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((item) => (
          <ImageItem
            key={item.id}
            item={item}
            selectedItems={selectedItems}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}

        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
