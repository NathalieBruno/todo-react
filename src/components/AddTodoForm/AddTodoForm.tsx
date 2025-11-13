import "./AddTodoForm.css";
import type { Todo } from "../../types/todo";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import type { AddTodoProps } from "../../types/props";
import { validateTitle } from "../../utils/validateTitle";

function AddTodoForm({ onAddTodo }: AddTodoProps) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTitle(todoTitle)) return;

    const CreateTodo: Todo = {
      id: Date.now().toString(),
      title: todoTitle.trim(),
      completed: false,
      color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 93%)`,
      createdAt: Date.now(),
    };
    onAddTodo(CreateTodo);
    setTodoTitle("");
  };

  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoTitle}
        maxLength={30}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="ex: bake a cake"
        className="input"
      />
      <div className="bottomRow">
        <button type="submit" className="button" aria-label="Add todo">
          <FaPlus />
        </button>
        <div className="charCounter">{todoTitle.length}/30</div>
      </div>
    </form>
  );
}

export default AddTodoForm;
