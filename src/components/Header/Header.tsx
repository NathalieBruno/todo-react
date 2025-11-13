import "./Header.css";
import type { HeaderProps } from "../../types/props";
import { FaCheckCircle } from "react-icons/fa";

function Header({ totalTodos, completedTodos }: HeaderProps) {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const progress = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <header className="header">
      <div className="bubble bubbleL"></div>
      <div className="bubble bubbleM"></div>
      <div className="bubble bubbleS"></div>
      <div className="header-content">
        <h1>
          Life <br /> Planner
        </h1>
        <h2>{date}</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p>
          {completedTodos} of {totalTodos} todos
          <FaCheckCircle className="checkIcon" />
        </p>
      </div>
    </header>
  );
}

export default Header;
