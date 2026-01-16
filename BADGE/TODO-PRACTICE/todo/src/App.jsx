import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [edit, setEdit] = useState(null);
  const [newText, setNewText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setList((prev) => [...prev, { id: Date.now(), text }]);
    setText("");
  };

  const handleDelete = (id) => {
    const deletedItem = list.find((val) => val.id === id);
    if (deletedItem) {
      setDeletedItems((prev) => [...prev, deletedItem]);
    }

    setList(list.filter((val) => val.id !== id));
  };

  const handleEdit = (id) => {
    if (newText.trim() === "") return;

    const updatedList = list.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );

    setList(updatedList);
    setEdit(null);
    setNewText("");
  };

  const handleUndo = (id) => {
    const undoItem = deletedItems.find((val) => val.id === id);
    if (undoItem) {
      setList((prev) => [...prev, undoItem]);
    }

    setDeletedItems(deletedItems.filter((val) => val.id !== id));
  };

  return (
    <>
      <h3>Todo App</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {edit === item.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={() => handleEdit(item.id)}>Save</button>
                <button onClick={() => setEdit(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button
                  onClick={() => {
                    setEdit(item.id);
                    setNewText(item.text);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h3>Deleted Items</h3>

      <ul>
        {deletedItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleUndo(item.id)}>Undo</button>
          </li>
        ))}
      </ul>
    </>
  );
}
