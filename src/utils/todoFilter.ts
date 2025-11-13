import type { Todo, TodoFilter } from "../types/todo";

export function filterTodos(todos: Todo[], filter: TodoFilter) {
  if (filter === "done") return todos.filter((todo) => todo.completed);
  if (filter === "active") return todos.filter((todo) => !todo.completed);
  return todos;
}

export function sortTodos(todos: Todo[], showCompletedFirst: boolean) {
  if (!showCompletedFirst) {
    return [...todos].sort((a, b) => a.createdAt - b.createdAt);
  }
  return [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return a.createdAt - b.createdAt;
    }
    return a.completed ? -1 : 1;
  });
}
