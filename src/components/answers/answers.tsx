import React, { FC, useState, useContext } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import FormAnswer from '../form-answer/form-answer';
import { VoidExpression } from 'typescript';
import { setAnswer } from '../../redux/store/answerSlice';
import { nanoid } from '@reduxjs/toolkit';
import { produce } from 'immer';

export interface IAnswer {
  id: number;
  text: string;
}

interface AnswersProps {
  answers: IAnswer[];
  multipleChoice: boolean;
  questionId: number;
}

const Answers: FC<AnswersProps> = ({ answers, multipleChoice, questionId }) => {
  const currentId = useSelector((state: any) => state.answer.id);
  const dispatch = useDispatch();
  const [idAnswers, setIdAnswers] = useState<number[]>([]);

  const onAddId = (id: number) => {
    const answers: number[] = [...idAnswers];
    answers.push(id);
    setIdAnswers(answers);
    dispatch(setAnswer({ id_quiz: 1, questionId: 1, answerId: idAnswers }));
  };

  const component = multipleChoice ? <Checkbox /> : <Radio />;
  return (
    <FormControl sx={{ ml: 5 }}>
      {/*<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>*/}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {answers.map((a) => (
          <FormAnswer
            key={nanoid()}
            value1={a.id}
            control1={component}
            label1={a.text}
            questionId={questionId}
            onChange={() => onAddId(a.id)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Answers;
