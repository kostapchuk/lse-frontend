import React, { createContext, FC, useContext } from 'react';
import { FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../../redux/store/answerSlice';

interface AnswersProps {
  value1: number;
  control1: any;
  label1: string;
  questionId: number;
  onChange: () => void;
}
//1
const FormAnswer: FC<AnswersProps> = ({
  value1,
  control1,
  label1,
  questionId,
  onChange,
}) => {
  const dispatch = useDispatch();

  return (
    <FormControlLabel
      value={value1}
      control={control1}
      label={label1}
      onChange={onChange}
    />
  );
};

export default FormAnswer;
