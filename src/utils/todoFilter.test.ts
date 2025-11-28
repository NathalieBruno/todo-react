import { describe, test, expect } from "vitest";
import { sortTodos } from "./todoFilter";

const todos = [
  { id: "1", title: "A", completed: false, createdAt: 2 },
  { id: "2", title: "B", completed: true, createdAt: 1 },
  { id: "3", title: "C", completed: false, createdAt: 3 },
  { id: "4", title: "D", completed: true, createdAt: 4 },
];

describe("sortTodos", () => {
  test("ska sorteras på createdAt om showCompletedFirst är false", () => {
    const sorted = sortTodos(structuredClone(todos), false);
    console.log(sorted);
    expect(sorted.map((todo) => todo.id)).toEqual(["2", "1", "3", "4"]);
  });

  test("ska sortera completed-uppgifter om showCompletedFirst är true", () => {
    const sorted = sortTodos(structuredClone(todos), true);
    expect(sorted[0].completed).toBe(true);
  });
});
