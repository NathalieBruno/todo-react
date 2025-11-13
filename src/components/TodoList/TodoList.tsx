import "./TodoList.css";
import { useState } from "react";
import type { Todo, TodoFilter } from "../../types/todo";
import { todoStorage } from "../../utils/todoStorage";
import { FilterBar, TodoListView, EditTodoModal, Modal, DeleteTodoModal } from "../index";
import { filterTodos, sortTodos } from "../../utils/todoFilter";
import type { TodoListViewProps, TodoListProps, FilterBarProps } from "../../types/props";

function TodoList({ todos, onTodosChange, showToast }: TodoListProps) {
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<TodoFilter>("all");
  const [showCompletedFirst, setShowCompletedFirst] = useState(false);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState<Todo | null>(null);

  const handleDelete = (id: string) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
    showToast("Todo deleted!");
  };

  const handleRequestDelete = (todo: Todo) => {
    setDeleteTodo(todo);
    setShowDeleteModal(true);
  };

  const handleEdit = (id: string) => {
    setEditingTodoId(id);
  };

  const handleSaveEdit = (id: string, newTitle: string) => {
    updateTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)));
    setEditingTodoId(null);
    showToast("Changed Todo!");
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
  };

  const updateTodos = (newTodos: Todo[]) => {
    todoStorage.saveTodos(newTodos);
    onTodosChange?.(newTodos);
  };

  const handleToggleSort = () => {
    setShowCompletedFirst((prev) => !prev);
  };

  const handleToggle = (id: string) =>
    updateTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteTodo(null);
  };

  const handleConfirmDelete = () => {
    if (deleteTodo) {
      handleDelete(deleteTodo.id);
      handleCloseDeleteModal();
    }
  };

  const filteredTodos = sortTodos(
    filterTodos(
      todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())),
      activeFilter
    ),
    showCompletedFirst
  );

  const getEditingTodo = () => todos.find((todo) => todo.id === editingTodoId)!;

  const todoListViewProps: TodoListViewProps = {
    todos: filteredTodos,
    onToggle: handleToggle,
    onEdit: handleEdit,
    activeFilter,
    newTodoId: todos.length > 0 ? todos[todos.length - 1].id : null,
    onRequestDelete: handleRequestDelete,
  };

  const filterBarProps: FilterBarProps = {
    activeFilter,
    onChange: setActiveFilter,
    showCompletedFirst,
    onToggleSort: handleToggleSort,
    search,
    onSearch: setSearch,
  };

  return (
    <>
      <FilterBar {...filterBarProps} />
      <TodoListView {...todoListViewProps} />

      {editingTodoId && (
        <Modal isOpen onClose={handleCancelEdit} title="Edit Todo">
          <EditTodoModal todo={getEditingTodo()} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
        </Modal>
      )}

      {showDeleteModal && deleteTodo && (
        <Modal isOpen onClose={handleCloseDeleteModal} title="Delete Todo">
          <DeleteTodoModal
            onConfirm={handleConfirmDelete}
            onCancel={handleCloseDeleteModal}
            todoTitle={deleteTodo.title}
          />
        </Modal>
      )}
    </>
  );
}

export default TodoList;
