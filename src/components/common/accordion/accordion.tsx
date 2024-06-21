import { AccordionSummary, Accordion as MuiAccordion } from '@mui/material';
import { Icon } from '../icon/icon';
import "./accordion.scss";

interface AccordionProps {
  summary: string;
  children: React.ReactNode;
}

export const Accordion = ({ summary, children }: AccordionProps) => {

  return (
    <div className="accordion">
      {children &&
        <MuiAccordion>
          <AccordionSummary
            expandIcon={<Icon icon='chevron-down' color="red" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {summary}
          </AccordionSummary>
          {children}
        </MuiAccordion>}
    </div>
  )
}