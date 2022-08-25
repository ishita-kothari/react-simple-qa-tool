import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import CreationForm from "../Form";
import store from "../../../reducer/store";
import questionAnswerReducer, { editQuestion } from "../../../reducer/qaSlice";
describe("Create Question Form", () => {
  it("renders default state", () => {
    render(
      <Provider store={store}>
        <CreationForm />
      </Provider>
    );

    const questionInput = screen.getByTestId("question-input");
    const answerInput = screen.getByTestId("answer-input");
    const createButton = screen.getByTestId("create-button");
    const delayCheckbox = screen.getByTestId("delay-checkbox");
    const delayInput = within(delayCheckbox).getByRole("checkbox");

    expect(questionInput.value).toBe("");
    expect(answerInput.value).toBe("");
    expect(createButton).toHaveAttribute("disabled");
    expect(delayCheckbox).toBeInTheDocument();
    expect(delayInput).toHaveProperty("checked", false);
  });

  it("keeps the create question button disabled when only one field provided", () => {
    render(
      <Provider store={store}>
        <CreationForm />
      </Provider>
    );

    const questionInput = screen.getByTestId("question-input");
    const createButton = screen.getByTestId("create-button");

    fireEvent.change(questionInput, {
      target: { value: "How are you today?" },
    });
    expect(createButton).toHaveAttribute("disabled");
  });

  it("enable create question button when both fields have value", () => {
    render(
      <Provider store={store}>
        <CreationForm />
      </Provider>
    );

    const questionInput = screen.getByTestId("question-input");
    const answerInput = screen.getByTestId("answer-input");
    const createButton = screen.getByTestId("create-button");

    fireEvent.change(questionInput, {
      target: { value: "How are you today?" },
    });
    fireEvent.change(answerInput, {
      target: { value: "I am fine" },
    });
    expect(createButton).not.toHaveAttribute("disabled");
  });

  it("check if the form is edit form", () => {
    render(
      <Provider store={store}>
        <CreationForm
          isEditing={true}
          editFormValue={{
            question: "What is your favourite color?",
            answer: "black",
            id: 0,
          }}
        />
      </Provider>
    );

    const editButton = screen.getByTestId("create-button");
    const questionInput = screen.getByTestId("question-input");
    const answerInput = screen.getByTestId("answer-input");

    expect(questionInput.value).toBe("What is your favourite color?");
    expect(answerInput.value).toBe("black");
    expect(editButton).toHaveTextContent("Edit Question");
  });

  it("should update a question in question list", () => {
    render(
      <Provider store={store}>
        <CreationForm
          isEditing={true}
          editFormValue={{
            question: "What is your favourite color?",
            answer: "black",
            id: 0,
          }}
          confirmEdit={() => true}
        />
      </Provider>
    );
    const previousState = {
      list: [
        {
          question: "How are you today?",
          answer: "Fine",
          id: "f5b82d6b1858",
        },
        {
          question: "What is your favourite color?",
          answer: "black",
          id: "0",
        },
      ],
    };
    const questionInput = screen.getByTestId("question-input");
    const answerInput = screen.getByTestId("answer-input");
    const editButton = screen.getByTestId("create-button");

    fireEvent.change(questionInput, {
      target: { value: "How have you been?" },
    });
    fireEvent.change(answerInput, {
      target: { value: "I am fine" },
    });
    fireEvent.click(editButton);

    expect(
      questionAnswerReducer(
        previousState,
        editQuestion({
          question: "How have you been?",
          answer: "I am fine",
          id: "0",
        })
      )
    ).toEqual({
      list: [
        {
          question: "How are you today?",
          answer: "Fine",
          id: "f5b82d6b1858",
        },
        {
          question: "How have you been?",
          answer: "I am fine",
          id: "0",
        },
      ],
    });
  });
});
