import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TodoItem from "./TodoItem";

const mockTodo = {
  id: "1",
  title: "Test Todo",
  completed: false,
  color: "#fff",
  createdAt: Date.now(),
};

describe("TodoItem", () => {
  test("renderar edit- och delete-knapp vid todo", () => {
    render(
      <TodoItem todo={mockTodo} onToggle={() => {}} onEdit={() => {}} onRequestDelete={() => {}} isNewTodo={false} />
    );
    expect(screen.getByLabelText("edit")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });
});
