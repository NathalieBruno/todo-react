import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import FilterBar from "./FilterBar";

describe("FilterBar", () => {
  test("visar filtrerings knapparna all,active, done", () => {
    render(
      <FilterBar
        activeFilter="all"
        onChange={() => {}}
        showCompletedFirst={false}
        onToggleSort={() => {}}
        search=""
        onSearch={() => {}}
      />
    );
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /done/i })).toBeInTheDocument();
  });
});
