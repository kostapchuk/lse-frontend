import { Box, Button } from "@mui/material";
import { useState } from "react";
import AnswerInput from "../answer-input/answer-input";

const AnswerForm = () => {
    const [inputList, setInputList] = useState<any>([]);
  
    const onAddBtnClick = (e:any) => {
      setInputList(inputList.concat(<AnswerInput key={inputList.length}/>));
    };
    return (
        <Box style={{marginLeft: '38px', marginBottom: '25px', display:'block'}}>
          {inputList}
          <Button onClick={onAddBtnClick}>Добавить вариант ответа</Button>
        </Box>
      );
}

export default AnswerForm