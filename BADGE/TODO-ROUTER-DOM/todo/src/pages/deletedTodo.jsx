import { useNavigate } from "react-router-dom";

const DeletedPage = ({ deletedTodos, setDeletedTodos, setTodos }) => {
  const navigate = useNavigate();

  const undoTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
    setDeletedTodos(deletedTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      <h2>Deleted Todos</h2>

      <button onClick={() => navigate("/")}>
        Back to Todo List
      </button>

      <ul>
        {deletedTodos.length === 0 && <p>No deleted todos</p>}

        {deletedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => undoTodo(todo)}>Undo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeletedPage;
