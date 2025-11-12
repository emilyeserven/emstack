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

  test("renders 'Erroring' status when data fetching fails", () => {
    mockUseQuery.mockReturnValue({
      isPending: false,
      error: new Error("API failed"),
      data: undefined,
    });

    renderComponent();

    expect(screen.getByRole("heading", {
      level: 2,
      name: /Hello from About!/i,
    })).toBeInTheDocument();

    const statusMessage = screen.getByTestId("status-message");
    expect(statusMessage).toHaveTextContent("Test data is Erroring");
    expect(statusMessage).not.toHaveTextContent("Pending");
    expect(statusMessage).not.toHaveTextContent("loaded!");

    expect(screen.queryByText("Mocked Data Content")).not.toBeInTheDocument();
  });

  test("renders 'loaded!' status and displays the fetched data on success", () => {
    const mockData = {
      item: "Mocked Data Content for Success",
    };

    mockUseQuery.mockReturnValue({
      isPending: false,
      error: null,
      data: mockData,
    });

    renderComponent();

    const statusMessage = screen.getByTestId("status-message");
    expect(statusMessage).toHaveTextContent("Test data is loaded!");
    expect(statusMessage).not.toHaveTextContent("Pending");
    expect(statusMessage).not.toHaveTextContent("Erroring");

    expect(screen.getByText(mockData.item)).toBeInTheDocument();
  });

  test("calls useQuery with the correct queryKey and function", () => {
    mockUseQuery.mockReturnValue({
      isPending: false,
      error: null,
      data: undefined,
    });

    renderComponent();

    expect(mockUseQuery).toHaveBeenCalledTimes(1);

    const callArgs = mockUseQuery.mock.calls[0][0];

    expect(callArgs.queryKey).toEqual(["test"]);

    expect(typeof callArgs.queryFn).toBe("function");
  });
});
