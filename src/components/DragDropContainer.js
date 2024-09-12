import React from 'react';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';

// Define the type of draggable items
const ItemType = {
  OBJECT: 'object',
};

export const DragDropContainer = () => {
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
    <div ref={drop} style={{ position: 'relative', display: 'inline-block' }}>
      <Link to="/container">
        <img
          src="path-to-your-image.jpg"
          alt="Container"
          style={{
            width: '200px',
            height: 'auto',
            border: isOver ? '2px solid green' : 'none',
            cursor: 'pointer',
          }}
        />
      </Link>
    </div>
  );
};