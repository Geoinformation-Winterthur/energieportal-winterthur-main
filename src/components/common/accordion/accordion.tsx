import { Accordion as MuiAccordion } from '@mui/material';
import "./accordion.scss";

interface AccordionProps {
  children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {

  return (
    <div className="accordion">
      {children &&
        <MuiAccordion>
          {children}
        </MuiAccordion>}
    </div>
  )
}