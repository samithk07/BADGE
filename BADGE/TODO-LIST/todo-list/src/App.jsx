import { useState } from "react";
import TodoList from './TodoList'
import Trash from "./Trash";

function App() {
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [page, setPage] = useState("todos");

  // Add Todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  // Delete Todo
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setDeletedTodos([...deletedTodos, todo]);
  };

  // Edit Todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  // Undo Delete
  const undoTodo = (todo) => {
    setDeletedTodos(deletedTodos.filter((t) => t.id !== todo.id));
    setTodos([...todos, todo]);
  };

  return (
    <>
      <button onClick={() => setPage("todos")}>Todo List</button>
      <button onClick={() => setPage("")}>Deleted Todos</button>

      {page === "todos" ? (
        <TodoList
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ) : (
        <Trash deletedTodos={deletedTodos} undoTodo={undoTodo} />
      )}
    </>
  );
}

export default App;
