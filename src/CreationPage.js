import React from 'react';
import { SelectContainer } from './components/SelectContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDropContainer from './components/DragDropContainer';

export default function CreationPage() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <DragDropContainer />
      </DndProvider>
    </div>
  )
}
