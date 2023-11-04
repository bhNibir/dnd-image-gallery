import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
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
import ImageUpload from "../ui/ImageUpload";
import ImageItem from "./ImageItem";

const ImageGallery = ({
  items,
  setItems,
  handleCheckboxChange,
  selectedItems,
}) => {
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 3s, with tolerance of 10px of movement
    activationConstraint: {
      delay: 1000 * 3,
      tolerance: 10,
    },
  });

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    pointerSensor,
    keyboardSensor
  );

  function handleDragEnd(event) {
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
  );
};

export default ImageGallery;
