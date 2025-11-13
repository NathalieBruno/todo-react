import type { ToastProps } from "../../types/props";
import "./Toast.css";

const Toast = ({ message, visible }: ToastProps) => (
  <div className={`toast${visible ? " toast--visible" : ""}`}>{message}</div>
);

export default Toast;
