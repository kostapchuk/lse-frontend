import React, {FC} from 'react';
import Question from '../question/question';
import Answers, {IAnswer} from '../answers/answers';
import Box from '@mui/material/Box';
import {IQuestion} from "../quiz-list/quiz-list";

interface QuizElementProps {
    question: IQuestion;
    answers: IAnswer[];
    quizId: string;
}

const QuizElement: FC<QuizElementProps> = ({
                                               question,
                                               answers,
                                               quizId
                                           }) => {
    return (
        <Box sx={{mb: 3}}>
            <Question question={question}/>
            <Answers
                answers={answers}
                multipleChoice={question.multipleChoice}
                questionId={question.id}
                quizId={quizId}
            />
        </Box>
    );
};

export default React.memo(QuizElement);
