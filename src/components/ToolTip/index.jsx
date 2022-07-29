import { InfoOutlined } from "@mui/icons-material";
import React from "react";
import "./index.css";

const TooltipContainer = ({ children, message, position = "left" }) => {
  return (
    <div class="tooltip ">
      {children || <InfoOutlined color="primary" size={"small"} />}
      <span class={`tooltiptext ${position} box-shadow`}>{message}</span>
    </div>
  );
};

export default TooltipContainer;
