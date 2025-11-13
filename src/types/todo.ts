export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  color?: string;
  createdAt: number;
}

export type TodoFilter = "all" | "done" | "active";
