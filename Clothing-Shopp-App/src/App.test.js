import { createRoot } from "react-dom/client";
import { screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  root.render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
