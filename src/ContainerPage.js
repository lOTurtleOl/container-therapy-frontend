import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./styles/SelectContainer.css";



// functional component to set location and receive object from location.state
export default function Container() {
  const location = useLocation();
  const { object } = location.state || {};  // Access the passed object
  const [objectList, setObjectList] = useState(() => {
    // Load objectList from localStorage if available
    const savedList = localStorage.getItem('containerList');
    return savedList ? JSON.parse(savedList) : [];
});
  const navigate = useNavigate();

  // if object is not in list already, create new object and update list
  useEffect(() => {
    if (object && !objectList.some(item => item.id === object.id)) {
        // Only add the object if it's not already in the list
        const newObject = {
            id: object.id || uuidv4(),
            value: object.value,
            date: object.date,
        };
        setObjectList((prevList) => {
            const updatedList = [...prevList, newObject];
            localStorage.setItem('containerList', JSON.stringify(updatedList)); // Save to localStorage
            return updatedList;
        });
    }
}, [object, objectList]);

function moveObject(item) {
  const updatedList = objectList.filter((obj) => obj.id !== item.id);
  setObjectList(updatedList);
  localStorage.setItem('containerList', JSON.stringify(updatedList));  // Save updated list to localStorage
  navigate('/Create', { state: { object: item } });
}

  return (
    <div className="app-container full-background-white">
      <div className="px-4 pt-5 text-center ">
        <h1 className="text-center mt-3">Welcome to your container</h1>
        <ul className="">
          {objectList.map((item) => (
            <li key={item.id}>
              {item.value} - {item.date}
              <button onClick={() => moveObject(item)}>Remove from Container</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}