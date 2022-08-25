import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add, addAsync } from "../../reducer/qaSlice";
import TooltipContainer from "../ToolTip";

const CreationForm = ({
  isEditing,
  editFormValue,
  confirmEdit,
  isAsync,
  onCancel,
  setIsChecked,
}) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing) {
      setFormData(editFormValue);
    } else {
      setFormData({});
    }
  }, [isEditing, editFormValue]);

  const handleCreateForm = (event) => {
    console.log("is called");
    if (isEditing) {
      confirmEdit(formData);
    } else if (isAsync) {
      dispatch(addAsync(formData));
    } else {
      dispatch(add(formData));
    }

    setFormData({});
    event.preventDefault();
  };
  return (
    <form onSubmit={handleCreateForm} data-testid="form">
      <TextField
        required
        label="Question"
        sx={{ mb: 2 }}
        fullWidth
        onChange={(e) => {
          setFormData({ ...formData, question: e.target.value });
        }}
        value={formData.question || ""}
        defaultValue={isEditing && editFormValue.question}
        inputProps={{ "data-testid": "question-input" }}
      />
      <TextField
        required
        label="Answer"
        sx={{ mb: 2 }}
        fullWidth
        onChange={(e) => {
          setFormData({ ...formData, answer: e.target.value });
        }}
        value={formData.answer || ""}
        defaultValue={isEditing && editFormValue.answer}
        inputProps={{ "data-testid": "answer-input" }}
      />

      <Button
        variant="contained"
        color="success"
        type="submit"
        disabled={!formData.question?.trim() || !formData.answer?.trim()}
        data-testid="create-button"
      >
        {isEditing ? "Edit Question" : "Create Question"}
      </Button>
      {isEditing && (
        <Button variant="text" color="primary" onClick={onCancel}>
          Cancel
        </Button>
      )}
      {!isEditing && (
        <div className="flexLayout">
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setIsChecked(e.target.checked)}
                data-testid="delay-checkbox"
                role="delay-checkbox"
              />
            }
            label="Delay to add question"
          />
          <TooltipContainer
            message={"Checking the checkbox will add your question after 5s."}
          />
        </div>
      )}
    </form>
  );
};

export default CreationForm;
