import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos-storage";

export const todoStorage = {
  getTodos: (): Todo[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Failed to load todos:", error);
      return [];
    }
  },

  saveTodos: (todos: Todo[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos:", error);
    }
  },
};
