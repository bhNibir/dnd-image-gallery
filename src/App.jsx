import { useState } from "react";
import Header from "./components/Header";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import BaseLayout from "./layout/BaseLayout";

const initialValue = [
  {
    id: 1,
    image: new URL("./assets/images/image-1.webp", import.meta.url).href,
  },
  {
    id: 2,
    image: new URL("./assets/images/image-2.webp", import.meta.url).href,
  },
  {
    id: 3,
    image: new URL("./assets/images/image-3.webp", import.meta.url).href,
  },
  {
    id: 4,
    image: new URL("./assets/images/image-4.webp", import.meta.url).href,
  },
  {
    id: 5,
    image: new URL("./assets/images/image-5.webp", import.meta.url).href,
  },
  {
    id: 6,
    image: new URL("./assets/images/image-6.webp", import.meta.url).href,
  },
  {
    id: 7,
    image: new URL("./assets/images/image-7.webp", import.meta.url).href,
  },
  {
    id: 8,
    image: new URL("./assets/images/image-8.webp", import.meta.url).href,
  },
  {
    id: 9,
    image: new URL("./assets/images/image-9.webp", import.meta.url).href,
  },
  {
    id: 10,
    image: new URL("./assets/images/image-10.jpeg", import.meta.url).href,
  },
  {
    id: 11,
    future: true,
    image: new URL("./assets/images/image-11.jpeg", import.meta.url).href,
  },
];

function App() {
  const [items, setItems] = useState(initialValue);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAllSelect, setIsAllSelect] = useState(false);

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // If the item is already in the array, remove it
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      !selectedItems.length && setIsAllSelect(false);
    } else {
      // If the item is not in the array, add it
      setSelectedItems([...selectedItems, itemId]);
      setIsAllSelect(true);
    }
  };

  const handleAllSelect = () => {
    setSelectedItems([]);
    setIsAllSelect(false);
  };

  const handleDelete = () => {
    const filteredItem = items.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setItems(filteredItem);
    setSelectedItems([]);
    setIsAllSelect(false);
  };

  return (
    <BaseLayout>
      <Header
        isAllSelect={isAllSelect}
        selectedItems={selectedItems}
        handleAllSelect={handleAllSelect}
        handleDelete={handleDelete}
      />
      <ImageGallery
        items={items}
        setItems={setItems}
        selectedItems={selectedItems}
        handleCheckboxChange={handleCheckboxChange}
      />
    </BaseLayout>
  );
}

export default App;
