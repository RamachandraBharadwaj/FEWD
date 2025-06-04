import React, { useRef, useState } from 'react';

function DragAndDropExample() {
  const [boxes, setBoxes] = useState({
    box1: ['🍎 Apple', '🍌 Banana'],
    box2: ['🥕 Carrot'],
  });

  const draggedItem = useRef(null);
  const draggedFrom = useRef(null);

  const handleDragStart = (e, item, boxKey) => {
    draggedItem.current = item;
    draggedFrom.current = boxKey;
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (e, boxKey) => {
    e.preventDefault();

    const from = draggedFrom.current;
    const item = draggedItem.current;

    if (!from || !item || !boxes[from]) return;
    if (from === boxKey) return;

    setBoxes(prev => {
      const newBoxes = { ...prev };

      if (!newBoxes[from]) return prev;

      newBoxes[from] = newBoxes[from].filter(i => i !== item);
      newBoxes[boxKey] = [...newBoxes[boxKey], item];

      return newBoxes;
    });

    // ✅ Clear refs after successful drop
    draggedItem.current = null;
    draggedFrom.current = null;
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
      {Object.entries(boxes).map(([boxKey, items]) => (
        <div
          key={boxKey}
          onDrop={(e) => handleDrop(e, boxKey)}
          onDragOver={handleDragOver}
          style={{
            width: '200px',
            minHeight: '200px',
            border: '2px dashed gray',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: '#f8f8f8',
          }}
        >
          <h4>{boxKey.toUpperCase()}</h4>
          {items.map(item => (
            <div
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, item, boxKey)}
              style={{
                margin: '8px',
                padding: '8px',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'grab',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DragAndDropExample;
