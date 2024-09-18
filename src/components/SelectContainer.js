import React, { useState } from 'react';
import portalImg from '../images/portalImg2.jpg';
import folderImg from '../images/folderImg.png';
import treeImg from '../images/treeImg.jpg';
import "../styles/SelectContainer.css";

// Accept props, including onSelect and initialContainerType
export const SelectContainer = ({ onSelect, initialContainerType = '' }) => {
  const [containerType, setContainerType] = useState(initialContainerType);

  // Handle the change event and notify the parent component through onSelect
  function handleChange(event) {
    const selectedType = event.target.value;
    setContainerType(selectedType);

    // Call onSelect if it's a function passed from the parent component
    if (typeof onSelect === 'function') {
      onSelect(selectedType); // Notify the parent with the selected type
    }
  }

  const containerImages = {
    folder: folderImg,
    portal: portalImg,
    tree: treeImg,
  };

  return (
    <div>
      {/* Main content area with the container image
      <div className="main-content">
        {containerType && (
          <img
            src={containerImages[containerType]}
            alt={`${containerType} view`}
            className="container-image"
          />
        )}
      </div> */}

      {/* Footer with the dropdown for selecting the container type */}
      <footer className="footer">
        <h1 className="text-center mt-3">Select your preferred container</h1>
        <select value={containerType} onChange={handleChange} className="form-select">
          <option value="">Select Container</option>
          <option value="folder">Folder</option>
          <option value="portal">Portal</option>
          <option value="tree">Tree</option>
        </select>
      </footer>
    </div>
  );
};