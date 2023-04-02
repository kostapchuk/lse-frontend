import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC, useState } from "react";
import AnswerInputCheckbox from "../answer-input-checkbox/answer-input";
import AnswerInputRadio from "../answer-input-radio/answer-input";

const AnswerForm:FC = () => {
  const [inputList, setInputList] = useState<any>([]);
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onAddBtnClickCheckbox = (e: any) => {
    setInputList(
      inputList.concat(
        value === "one-true-answer" ? (
          <AnswerInputRadio key={inputList.length} />
        ) : (
          <AnswerInputCheckbox key={inputList.length} />
        )
      )
    );
  };
  return (
    <Box style={{ marginLeft: "38px", marginBottom: "25px", display: "block" }}>
      {inputList}
      <Box>
        <FormControl>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              disabled={inputList.length !== 0}
              value="one-true-answer"
              control={<Radio />}
              label="Один правильный вариант ответа"
            />
            <FormControlLabel
              disabled={inputList.length !== 0}
              value="multiple-true-answer"
              control={<Radio />}
              label="Несколько правильных вариантов ответа"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <Button onClick={onAddBtnClickCheckbox}>Добавить вариант ответа</Button>
      </Box>
    </Box>
  );
};

export default AnswerForm;
