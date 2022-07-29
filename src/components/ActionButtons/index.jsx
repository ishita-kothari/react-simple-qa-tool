import { IconButton } from "@mui/material";
import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import TooltipContainer from "../ToolTip";

const ActionButtons = ({ onDelete, onEdit, isEditing }) => {
  return (
    <div>
      <TooltipContainer message={"Delete this Question"}>
        <IconButton color="error" size="small" disabled={isEditing}>
          <Delete onClick={onDelete} />
        </IconButton>
      </TooltipContainer>

      <TooltipContainer message={"Edit this Question"}>
        <IconButton color="primary" size="small" onClick={onEdit}>
          <Edit />
        </IconButton>
      </TooltipContainer>
    </div>
  );
};

export default ActionButtons;
