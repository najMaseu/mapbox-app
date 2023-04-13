import App from "./App";
import { render, screen } from "tests/utils";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    // check if App components renders headline
  });
});
