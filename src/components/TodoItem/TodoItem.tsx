import { FaTrash, FaPen } from "react-icons/fa";
import "./TodoItem.css";
import { useEffect, useState } from "react";
import type { TodoItemProps } from "../../types/props";

const TodoItem = ({ todo, onToggle, onEdit, isNewTodo = false, onRequestDelete }: TodoItemProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(isNewTodo);

  useEffect(() => {
    if (isNewTodo) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isNewTodo]);

  return (
    <div className={`todoItem${shouldAnimate ? " slideIn" : ""}`} style={{ backgroundColor: todo.color }}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      <div className="buttonGroup">
        <button aria-label="edit" onClick={() => onEdit(todo.id)} className="editButton">
          <FaPen />
        </button>
        <button aria-label="delete" onClick={() => onRequestDelete && onRequestDelete(todo)} className="deleteButton">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
