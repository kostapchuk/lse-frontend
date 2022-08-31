import React, {FC} from 'react';
import Typography from '@mui/material/Typography';
import {IQuestion} from "../quiz-list/quiz-list";

interface QuestionProps {
    question: IQuestion;
}

const Question: FC<QuestionProps> = ({question}) => {
    return <Typography variant="h6">{question.text}</Typography>;
};

export default Question;
