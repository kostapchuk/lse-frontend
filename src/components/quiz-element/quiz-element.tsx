import React, { FC, useState } from 'react';
import Question from '../question/question';
import Answers, { IAnswer } from '../answers/answers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface QuizElementProps {
  question: string;
  answers: IAnswer[];
  multipleChoice: boolean;
  questionId: number;
}

const QuizElement: FC<QuizElementProps> = ({
  question,
  answers,
  multipleChoice,
  questionId,
}) => {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Question question={question} />
        <Answers
          answers={answers}
          multipleChoice={multipleChoice}
          questionId={questionId}
        />
      </Box>
    </>
  );
};

export default QuizElement;
