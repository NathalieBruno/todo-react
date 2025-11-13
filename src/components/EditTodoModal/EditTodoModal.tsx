import "../Modal/Modal.css";
import "./EditTodoModal.css";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import type { EditTodoProps } from "../../types/props";
import { validateTitle } from "../../utils/validateTitle";

function EditTodoModal({ todo, onSave, onCancel }: EditTodoProps) {
  const [title, setTitle] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTitle(title)) return;
    onSave(todo.id, title.trim());
  };

  return (
    <form className="editTodo-modal" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        maxLength={30}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
        autoFocus
      />
      <div className="modal-btnRow" style={{ paddingLeft: "50px" }}>
        <button type="submit" className="modal-actionBtn modal-saveEditBtn" aria-label="Save todo">
          <FaCheck />
        </button>
        <button type="button" onClick={onCancel} className="modal-actionBtn modal-cancelBtn" aria-label="Cancel">
          <FaTimes />
        </button>
        <div className="charCounter">{title.length}/30</div>
      </div>
    </form>
  );
}

export default EditTodoModal;
