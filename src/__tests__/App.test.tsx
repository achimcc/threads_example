import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

/**
 * @jest-environment jsdom
 */
test("renders Basic TypeScript App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Basic TypeScript App/i);
  expect(linkElement).toBeInTheDocument();
});
