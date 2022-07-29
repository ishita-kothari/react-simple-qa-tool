import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add, addAsync } from "../../reducer/qaSlice";

const CreationForm = ({
  isEditing,
  editFormValue,
  confirmEdit,
  isAsync,
  onCancel,
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

  const handleCreateForm = () => {
    if (isAsync) {
      dispatch(addAsync(formData));
    } else {
      dispatch(add(formData));
    }

    setFormData({});
  };
  return (
    <div>
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
      {isEditing ? (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => confirmEdit(formData)}
            data-testid="edit-button"
            disabled={!formData.question || !formData.answer}
          >
            Edit Question
          </Button>
          <Button variant="text" color="primary" onClick={onCancel}>
            Cancel
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={handleCreateForm}
          disabled={!formData.question || !formData.answer}
          data-testid="create-button"
        >
          Create Question
        </Button>
      )}
    </div>
  );
};

export default CreationForm;
