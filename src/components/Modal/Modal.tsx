import "./Modal.css";
import type { ModalProps } from "../../types/props";

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  const onModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={onModalClick}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
