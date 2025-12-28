
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import TodoPage from "./pages/todo";
import DeletedPage from "./pages/deletedTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodoPage
            todos={todos}
            setTodos={setTodos}
            setDeletedTodos={setDeletedTodos}
          />
        }
      />
      <Route
        path="/deleted"
        element={
          <DeletedPage
            deletedTodos={deletedTodos}
            setDeletedTodos={setDeletedTodos}
            setTodos={setTodos}
          />
        }
      />
    </Routes>
  );
}

export default App;
