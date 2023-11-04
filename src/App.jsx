import { useState } from "react";
import Header from "./components/Header";
import ImageItem from "./components/ImageItem";
import ImageUpload from "./components/ImageUpload";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    console.log(3);
    const { active, over } = event;
    if (active?.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active?.id);
        const overIndex = prev.findIndex((item) => item.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  }

  return (
    <div className="container mx-auto px-6 mb-9">
      <Header
        isAllSelect={isAllSelect}
        selectedItems={selectedItems}
        handleAllSelect={handleAllSelect}
        handleDelete={handleDelete}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSwappingStrategy}>
            {items.map((item) => (
              <ImageItem
                key={item.id}
                item={item}
                selectedItems={selectedItems}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </SortableContext>
        </DndContext>

        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
