import TodoItem from "../TodoItem/TodoItem";
import type { TodoListViewProps } from "../../types/props";

function TodoListView({ todos, onToggle, onEdit, activeFilter, newTodoId, onRequestDelete }: TodoListViewProps) {
  let emptyText = "No todos yet.";
  if (activeFilter === "done") emptyText = "You haven't completed any todos yet.";
  if (activeFilter === "active") emptyText = "No active todos.";

  const todoItems = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={onToggle}
      onEdit={onEdit}
      isNewTodo={todo.id === newTodoId}
      onRequestDelete={onRequestDelete}
    />
  ));

  return <div className="todoList">{todos.length === 0 ? <p className="emptyMessage">{emptyText}</p> : todoItems}</div>;
}

export default TodoListView;
