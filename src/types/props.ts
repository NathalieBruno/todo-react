import type { Todo, TodoFilter } from "./todo";
import type { ReactNode } from "react";

export interface TodoListViewProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  activeFilter: TodoFilter;
  newTodoId?: string | null;
  onRequestDelete: (todo: Todo) => void;
}

export interface AddTodoProps {
  onAddTodo: (todo: Todo) => void;
  showToast: (msg: string) => void;
  onCancel: () => void;
}

export interface EditTodoProps {
  todo: Todo;
  onSave: (id: string, newTitle: string) => void;
  onCancel: () => void;
}

export interface FilterBarProps {
  activeFilter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
  showCompletedFirst: boolean;
  onToggleSort: () => void;
  search: string;
  onSearch: (value: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  isNewTodo?: boolean;
  onRequestDelete: (todo: Todo) => void;
}

export interface HeaderProps {
  totalTodos: number;
  completedTodos: number;
}

export interface TodoListProps {
  onTodosChange?: (todos: Todo[]) => void;
  todos: Todo[];
  showToast: (msg: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export interface DeleteTodoModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  todoTitle: string;
}

export interface ToastProps {
  message: string;
  visible: boolean;
}
