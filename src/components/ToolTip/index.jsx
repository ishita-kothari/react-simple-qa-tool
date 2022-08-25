import { InfoOutlined } from "@mui/icons-material";
import React from "react";
import "./index.css";

const TooltipContainer = ({ children, message, position = "left" }) => {
  return (
    <div className="tooltip ">
      {children || <InfoOutlined color="primary" size={"small"} />}
      <span className={`tooltiptext ${position} box-shadow`}>{message}</span>
    </div>
  );
};

export default TooltipContainer;
