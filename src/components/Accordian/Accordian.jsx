import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const AccordianComponent = ({ title, message }) => {
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }} sx={{ mb: 2 }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        data-testid="accordian-header-wrapper"
      >
        <Typography variant="h5" data-testId="accordian-header">
          Q) {title} ?
        </Typography>
      </AccordionSummary>
      <AccordionDetails data-testid="accordian-body-wrapper">
        <Typography className="blue" data-testId="accordian-body">
          A) {message}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianComponent;
