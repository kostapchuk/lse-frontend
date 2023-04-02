import { Box, Checkbox, TextField } from "@mui/material";
import React, { FC } from "react";
import "../answer-input-radio/answer-input-styles.css";

const AnswerInputCheckbox: FC = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box style={{ display: "flex", marginBottom: "20px" }}>
      <Checkbox {...label} />
      <TextField className="answer-input" placeholder="Введите ответ" />
    </Box>
  );
};

export default AnswerInputCheckbox;
