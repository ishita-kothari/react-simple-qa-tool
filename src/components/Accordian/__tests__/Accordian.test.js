import { render, screen } from "@testing-library/react";
import Accordian from "../Accordian";

describe("Check Header", () => {
  it("Should show initial accordian state", () => {
    const defaultAccObject = {
      title: "How are you",
      contents: "I am very well",
    };

    render(
      <Accordian
        title={defaultAccObject.title}
        message={defaultAccObject.contents}
      />
    );

    const accordianBody = screen.queryByTestId("accordian-body");

    expect(accordianBody).toBeNull();
  });
});
