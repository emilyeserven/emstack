import type { Mock } from "vitest";

import { useQuery } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, beforeEach, test, expect, vi } from "vitest";

import { About } from "@/routes/about";
// eslint-disable-next-line import/no-unassigned-import
import "@testing-library/jest-dom";

vi.mock("@tanstack/react-query", () => ({
  ...vi.importActual("@tanstack/react-query"),
  useQuery: vi.fn(),
}));

describe("About Component", () => {
  const mockUseQuery = useQuery as Mock;

  const renderComponent = () => render(<About />);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders 'Pending' status while fetching data", () => {
    mockUseQuery.mockReturnValue({
      isPending: true,
      error: null,
      data: undefined,
    });

    renderComponent();

    expect(screen.getByRole("heading", {
      level: 2,
      name: /Hello from About!/i,
    })).toBeInTheDocument();

    const statusMessage = screen.getByTestId("status-message");
    expect(statusMessage).toHaveTextContent("Test data is Pending");
    expect(statusMessage).not.toHaveTextContent("loaded!");
    expect(statusMessage).not.toHaveTextContent("Erroring");
  });
});
