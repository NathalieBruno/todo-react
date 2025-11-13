import "./App.css";
import { TodoList, Header, AddTodoForm, Modal, Toast } from "./components";
import type { Todo } from "./types/todo";
import { useState, useEffect } from "react";
import { todoStorage } from "./utils/todoStorage";
import { FaPlus } from "react-icons/fa";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [toast, setToast] = useState({ message: "", visible: false });

  useEffect(() => {
    setTodos(todoStorage.getTodos());
  }, []);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  };

  const handleAddTodo = (newTodo: Todo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    todoStorage.saveTodos(updatedTodos);
    setShowAddModal(false);
    showToast("Todo added!");
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  return (
    <div className="app-container">
      <header>
        <Header totalTodos={todos.length} completedTodos={completedCount} />
      </header>
      <main>
        <TodoList todos={todos} onTodosChange={setTodos} showToast={showToast} />
      </main>

      <button className="floating-btn" onClick={() => setShowAddModal(true)} aria-label="Add todo">
        <FaPlus />
      </button>

      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add new todo">
        <AddTodoForm onAddTodo={handleAddTodo} showToast={showToast} />
      </Modal>
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

export default App;
