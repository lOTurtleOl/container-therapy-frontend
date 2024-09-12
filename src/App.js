import React, { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { SelectContainer } from './components/SelectContainer';
import { DragDropContainer } from "./components/DragDropContainer";

export default function App() {
  const [selectedContainer, setSelectedContainer] = useState('');

  return (
    <div className="app">
      <Nav />
    </div>
  );
}