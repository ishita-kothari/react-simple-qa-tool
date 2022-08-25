import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Check Header", () => {
  it("Should contain header text", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading", {
      name: "Questionnaire",
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("Should contain logo image", () => {
    render(<Header />);
    const imageElement = screen.getByAltText("logo");
    expect(imageElement).toBeInTheDocument();
  });
});
