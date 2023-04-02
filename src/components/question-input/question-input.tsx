import { Grid, Box, Typography, TextField } from "@mui/material";
import { FC } from "react";
import AnswerForm from "../answer-form/answer-form";

const QuestionInput:FC = () => {
    return (
        <Grid>
            <Box>
                <Typography>Вопрос</Typography>
                <TextField style={{marginLeft: '43px', marginBottom: '20px', marginTop: '10px', width: '600px'}} placeholder="Введите вопрос" />
            </Box>
            <Box style={{marginBottom: '25px'}}>
            <Typography style={{marginBottom: '10px'}}>Варианты ответа</Typography>
  <AnswerForm/>
            </Box>
        </Grid>
)
};

export default QuestionInput;