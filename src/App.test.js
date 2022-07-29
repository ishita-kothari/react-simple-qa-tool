import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import Layout from "./Layout";
import store from "./reducer/store";

test("renders app component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(
    "Here you can find one question for reference. Feel free to create your own questions !!"
  );
  expect(linkElement).toBeInTheDocument();
});

test("initial state for delay checkbox", () => {
  render(
    <Provider store={store}>
      <Layout />
    </Provider>
  );
  const delayCheckbox = screen.getByTestId("delay-checkbox");
  expect(delayCheckbox).toBeInTheDocument();
  expect(delayCheckbox).not.toHaveClass("Mui-checked");
});
