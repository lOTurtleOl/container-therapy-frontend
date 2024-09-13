import React from 'react';
import { SelectContainer } from './components/SelectContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDropContainer from './components/DragDropContainer';
import AddObject from './components/AddObject';

export default function CreationPage() {
  return (
    <div className="bg-white-2">
      <AddObject />

      <DndProvider backend={HTML5Backend}>
        <DragDropContainer />
      </DndProvider>
    </div>
  )
}
