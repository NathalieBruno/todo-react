import "../Modal/Modal.css";
import "./DeleteTodoModal.css";
import type { DeleteTodoModalProps } from "../../types/props";
import { FaCheck, FaTimes } from "react-icons/fa";

const DeleteTodoModal = ({ onConfirm, onCancel, todoTitle }: DeleteTodoModalProps) => (
  <>
    <p className="modal-question">
      Are you sure you want to delete <br /> "{todoTitle}"?
    </p>
    <div className="modal-btnRow">
      <button
        onClick={onConfirm}
        className="modal-actionBtn modal-deleteBtn"
        aria-label="Confirm delete"
        title="Delete"
        type="button">
        <FaCheck />
      </button>
      <button
        onClick={onCancel}
        className="modal-actionBtn modal-cancelBtn"
        aria-label="Cancel"
        title="Cancel"
        type="button">
        <FaTimes />
      </button>
    </div>
  </>
);

export default DeleteTodoModal;
