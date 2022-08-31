import React, {FC} from 'react';
import {FormControl, Radio, RadioGroup,} from '@mui/material';
import FormAnswer from '../form-answer/form-answer';
import {nanoid} from '@reduxjs/toolkit';
import {updateAnswer, useQuizzesResultDispatch} from "../../redux/slices/resultsSlice";
import {IAnswer} from '../answers/answers';

interface AnswersProps {
    answers: IAnswer[];
    questionId: string;
    quizId: string;
}

const RadioButtonGroup: FC<AnswersProps> = ({answers, questionId, quizId}) => {
    const dispatch = useQuizzesResultDispatch();

    const handeInput = (event: any) => {
        dispatch(updateAnswer({
            quizId: quizId,
            questionId: questionId,
            answerId: event.target.value,
            multipleChoice: false
        }));
    }

    return (
        <FormControl sx={{ml: 5}}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                onChange={handeInput}
            >
                {answers.map(a => (
                    <FormAnswer
                        key={nanoid()}
                        id={a.id}
                        control={<Radio/>}
                        label={a.text}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
};

export default RadioButtonGroup;
