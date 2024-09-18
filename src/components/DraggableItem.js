import React from 'react';
import { useDrag } from 'react-dnd';

// Define the type of draggable items
const ItemType = {
  OBJECT: 'object',
};

export const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.OBJECT,
    item: { id: item.id, name: item.value }, // Pass the item data
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '10px',
        border: '1px solid gray',
        marginBottom: '5px',
      }}
    >
      {item.value} || {item.date}
    </div>
  );
};