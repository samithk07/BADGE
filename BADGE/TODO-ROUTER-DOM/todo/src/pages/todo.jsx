import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoPage = ({ todos, setTodos, setDeletedTodos }) => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const addTodo = () => {
    if (text.trim() === "") return;

    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, text } : t
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
    }
    setText("");
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setDeletedTodos((prev) => [...prev, todo]);
  };

  const editTodo = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => navigate("/deleted")}>
        Go to Deleted Todos
      </button>

      <br /><br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
              
            {todo.text}
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;


