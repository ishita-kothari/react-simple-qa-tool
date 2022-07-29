import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordianComponent = ({ title, message }) => {
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }} sx={{ mb: 2 }}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h5">Q) {title} ?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="blue">A) {message}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianComponent;
