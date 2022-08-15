import React, {FC} from 'react';
import Question from "../question/question";
import Answers, {IAnswer} from "../answers/answers";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface QuizElementProps {
    question: string,
    answers: IAnswer[],
    multipleChoice: boolean,
}

const QuizElement: FC<QuizElementProps> = ({question, answers, multipleChoice}) => {
    return (
        <>
            <Box sx={{mb: 3}}>
                <Question question={question}/>
                <Answers answers={answers} multipleChoice={multipleChoice}/>
            </Box>
        </>
    );
};

export default QuizElement;
