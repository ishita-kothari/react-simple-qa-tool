import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AccordianComponent from "./components/Accordian";
import CreationForm from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import ActionButtons from "./components/ActionButtons";
import {
  deleteAllQuestions,
  deleteItem,
  editQuestion,
  sortQuestions,
} from "./reducer/qaSlice";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import AlertDialog from "./components/Dialog";
import TooltipContainer from "./components/ToolTip";

const Layout = () => {
  const list = useSelector((state) => state.quesans.list);
  const dispatch = useDispatch();
  const [sortAsc, setSortAsc] = useState(false);
  const [open, setOpen] = useState(false);
  const [editFormValue, setEditFormValue] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    dispatch(deleteAllQuestions());
    handleClose();
  };

  const onDelete = (item) => {
    dispatch(deleteItem(item));
  };

  const handleQuestionSorting = () => {
    if (sortAsc) {
      dispatch(sortQuestions("asc"));
    } else {
      dispatch(sortQuestions("desc"));
    }
  };

  const onEdit = (item) => {
    setIsEditing(true);
    setEditFormValue(item);
    setIsChecked(false);
  };

  const confirmEdit = (item) => {
    dispatch(editQuestion(item));
    setIsEditing(false);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        {isEditing ? (
          <div className="flexLayout">
            <Typography variant="h5" sx={{ mb: 1 }}>
              Edit Questions
            </Typography>
            <TooltipContainer message="Here you can edit the prefilled question and answer" />
          </div>
        ) : (
          <div className="flexLayout">
            <Typography variant="h5" sx={{ mb: 1 }}>
              Create Questions
            </Typography>
            <TooltipContainer message="Here you can create your questions" />
          </div>
        )}
        <CreationForm
          isEditing={isEditing}
          editFormValue={editFormValue}
          confirmEdit={confirmEdit}
          isAsync={isChecked}
          onCancel={() => setIsEditing(false)}
        />
        {!isEditing && (
          <div className="flexLayout">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => setIsChecked(e.target.checked)}
                  data-testid="delay-checkbox"
                />
              }
              label="Delay to add question"
            />
            <TooltipContainer
              message={"Checking the checkbox will add your question after 5s."}
            />
          </div>
        )}
      </Grid>
      <Grid item xs={12} md={8}>
        <div className="flexLayout">
          <Typography variant="h5" sx={{ mb: 1 }}>
            Created Questions
          </Typography>
          <TooltipContainer message="Here you can see created questions" />
        </div>
        <AccordianComponent
          title={"Can I click on this example question to see the answer"}
          message={"Yes, now you see the answer"}
        />

        {list.map((item) => (
          <Grid container spacing={2}>
            <Grid item md={10} xs={9}>
              <AccordianComponent title={item.question} message={item.answer} />
            </Grid>
            <Grid item md={2} xs={3}>
              <ActionButtons
                onDelete={() => onDelete(item)}
                onEdit={() => onEdit(item)}
                isEditing={isEditing}
              />
            </Grid>
          </Grid>
        ))}
        {list.length > 1 && (
          <div>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 1 }}
              onClick={() => {
                setSortAsc(!sortAsc);
                handleQuestionSorting();
              }}
              endIcon={sortAsc ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            >
              Sort
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={handleClickOpen}
              disabled={isEditing}
            >
              Delete all
            </Button>
          </div>
        )}
      </Grid>
      <AlertDialog
        handleClose={handleClose}
        open={open}
        handleConfirm={handleConfirm}
      />
    </Grid>
  );
};

export default Layout;
