import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DraggableItem } from './DraggableItem';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddObject() {
    const [objectList, setObjectList] = useState(() => {
        const savedList = localStorage.getItem('objectList');
        return savedList ? JSON.parse(savedList) : [];
    });
    const [objectValue, setObjectValue] = useState('');
    const [objectDate, setObjectDate] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.object) {
            const returnedObject = location.state.object;

            // Check if object is already in the list to avoid duplicates
            setObjectList((prevList) => {
                const exists = prevList.some(item => item.id === returnedObject.id);
                if (!exists) {
                    const updatedList = [...prevList, returnedObject];
                    localStorage.setItem('objectList', JSON.stringify(updatedList)); // Save updated list to localStorage
                    return updatedList;
                }
                return prevList;
            });

            // Clean up the navigation state so the object isn't added again on reload
            navigate('.', { replace: true });
        }
    }, [location.state, navigate]);


    function handleFormSubmit(event) {
        event.preventDefault();
        if (objectValue.trim()) {
            const newObject = {
                id: uuidv4(),
                value: objectValue,
                date: objectDate
            };
            const updatedList = [...objectList, newObject];
            setObjectList(updatedList);
            localStorage.setItem('objectList', JSON.stringify(updatedList)); // Save to localStorage
            setObjectValue('');  // Clear the input fields
            setObjectDate('');
        }
    }

    function handleChange(event) {
        event.preventDefault();
        setObjectValue(event.target.value);
    }

    function handleDateChange(event) {
        event.preventDefault();
        setObjectDate(event.target.value);
    }

    // Move object to the container and remove it from the list
    function moveObject(object) {
        // Remove from creation list and save in localStorage
        const updatedList = objectList.filter(item => item.id !== object.id);
        setObjectList(updatedList);
        localStorage.setItem('objectList', JSON.stringify(updatedList)); // Save updated list to localStorage

        // Navigate to Container with the object
        navigate('/Container', { state: { object } });
    }

    function deleteObject(objectId) {
        const updatedList = objectList.filter((item) => item.id !== objectId);
        setObjectList(updatedList);
        localStorage.setItem('objectList', JSON.stringify(updatedList)); // Save updated list to localStorage
    }

    return (
        <div className="container-fluid w-50">
            <form onSubmit={handleFormSubmit} className="pt-5 pb-5">
                <div className="mb-3">
                    <label htmlFor="object" className="form-label">Object</label>
                    <input type="text" value={objectValue} onChange={handleChange} className="form-control" id="object" aria-describedby="inputHelp"></input>
                    <div id="inputHelp" className="form-text">Enter an object of stress</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                        type="date"
                        value={objectDate}
                        onChange={handleDateChange}
                        className="form-control"
                        id="date">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <ul>
                {objectList.map((item) => (
                    <li key={item.id}>
                        <DraggableItem item={item} />
                        <button onClick={() => moveObject(item)}>Move to Container</button>
                        <button onClick={() => deleteObject(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
