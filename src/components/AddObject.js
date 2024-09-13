import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddObject() {
    const [objectList, setObjectList] = useState([]);
    const [objectValue, setObjectValue] = useState('');
    const [objectDate, setObjectDate] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        if (objectValue.trim()) {
            const newObject = {
                id: uuidv4(),
                value: objectValue,
                date: objectDate
            };
            const updatedList = [...objectList, newObject];
            console.log('Updated List', updatedList);
            setObjectList(updatedList);
            setObjectValue('');
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

    function deleteObject(objectId) {
        setObjectList(objectList.filter((item) => item.id !== objectId))
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
                        <label>{item.value} - {item.date}</label>
                        <button onClick={() => deleteObject(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
