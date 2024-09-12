import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { SelectContainer } from './SelectContainer';

// Define the type of draggable items
const ItemType = {
  OBJECT: 'object',
};

export default function DragDropContainer() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.OBJECT,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleDrop = (item) => {
    // Logic to handle the drop action
    console.log('Dropped item:', item);
    // Perform the routing or any other action on drop
  };

  return (
    <SelectContainer />
  );
};