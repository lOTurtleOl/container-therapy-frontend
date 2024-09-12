import React, { useState } from 'react';
import portalImg from '../images/portalImg.jpeg';
import folderImg from '../images/folderImg.png';
import treeImg from '../images/treeImg.jpg';
import "../styles/SelectContainer.css";

export const SelectContainer = () => {

    const [containerType, setContainerType] = useState('')

    function handleChange(event) {
        setContainerType(event.target.value);
    }

    const containerImages = {
        folder: folderImg,
        portal: portalImg,
        tree: treeImg
    }

    return (
        <div className="app-container">
            <div className="main-content">
                {containerType && (
                    <img
                        src={containerImages[containerType]} // Dynamically choose the image based on selection
                        alt={`${containerType} view`}
                        className="container-image"
                    />
                )}
            </div>

            <footer className="footer">
                <h1 className='text-center mt-3'>Select your preferred container</h1>
                <select value={containerType} onChange={handleChange} className="form-select">
                    <option value="">Select Container</option>
                    <option value="folder">Folder</option>
                    <option value="portal">Portal</option>
                    <option value="tree">Tree</option>
                </select>
            </footer>
        </div>
    
    )
}