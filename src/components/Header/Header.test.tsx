import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  test('visar rubriken "Life Planner"', () => {
    render(<Header totalTodos={0} completedTodos={0} />);
    expect(screen.getByText(/life.*planner/i)).toBeInTheDocument();
  });
});
