import { Box, Button } from "@mui/material";
import { useState } from "react";
import QuestionInput from "../question-input/question-input";

const QuestionForm = () => {
    const [inputList, setInputList] = useState<any>([]);
  
    const onAddBtnClick = (e:any) => {
      setInputList(inputList.concat(<QuestionInput key={inputList.length}/>));
    };
    return (
        <Box style={{marginLeft: '38px', marginBottom: '25px'}}>
          {inputList}
          <Button onClick={onAddBtnClick}>Добавить вопрос</Button>
        </Box>
      );
}

export default QuestionForm;