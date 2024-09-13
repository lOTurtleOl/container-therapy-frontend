import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { SelectContainer } from './SelectContainer';
import portalImg from '../images/portalImg.jpeg';
import folderImg from '../images/folderImg.png';
import treeImg from '../images/treeImg.jpg';
import "../styles/SelectContainer.css";

// Define the type of draggable items
const ItemType = {
  OBJECT: 'object',
};

const containerImages = {
  folder: folderImg,
  portal: portalImg,
  tree: treeImg,
};

export const DragDropContainer = () => {
  const [selectedContainer, setSelectedContainer] = useState('');

  const handleDrop = (item) => {
    // Logic to handle the drop action
    console.log('Dropped item:', item);
    // Perform the routing or any other action on drop
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.OBJECT,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // Function to handle selection from SelectContainer
  const handleSelectContainer = (selectedType) => {
    setSelectedContainer(containerImages[selectedType]); // Update state with the selected container type
  };

  return (
    <div className="app-container full-background-white">
      

      {/* Droppable area for the selected container */}
      <div className="main-content">
      <div 
        ref={drop} 
        className={`droppable-area ${isOver ? 'highlight' : ''}`}
      >
        {selectedContainer ? (
          <img
            className="container-image"
            src={selectedContainer}
            alt="Selected container"
          />
        ) : (
          <p>Scroll down to select container type</p>
        )}
      </div>
      </div>
      {/* SelectContainer component with onSelect callback */}
      <SelectContainer onSelect={handleSelectContainer} initialContainerType="folder" />
    </div>
  );
};

export default DragDropContainer;