import { FC } from "react";
import { FormControl, FormGroup, RadioGroup } from "@mui/material";

interface AnswersProps {
  // todo replace any type
  parentProps: any;
  multipleChoice: boolean;
  // todo replace any type
  children: any;
}

const Answers: FC<AnswersProps> = ({
  parentProps,
  multipleChoice,
  children,
}) => {
  const parentComponent = multipleChoice ? (
    <FormGroup {...parentProps}>{children}</FormGroup>
  ) : (
    <RadioGroup {...parentProps}>{children}</RadioGroup>
  );

  return <FormControl sx={{ ml: 5 }}>{parentComponent}</FormControl>;
};

export default Answers;
