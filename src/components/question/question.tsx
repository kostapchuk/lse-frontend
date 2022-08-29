import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

interface QuestionProps {
  question: string;
}

const Question: FC<QuestionProps> = ({ question }) => {
  return <Typography variant="h6">{question}</Typography>;
};

export default Question;
