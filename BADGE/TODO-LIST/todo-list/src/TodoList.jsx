import { useState } from "react";

function TodoList({ todos, addTodo, deleteTodo, editTodo }) {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!text.trim()) return;

    if (editId) {
      editTodo(editId, text);
      setEditId(null);
    } else {
      addTodo(text);
    }
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                setText(todo.text);
                setEditId(todo.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
