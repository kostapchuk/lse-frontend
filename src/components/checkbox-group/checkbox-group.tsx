import React, {FC} from 'react';
import {Checkbox, FormControl, FormGroup,} from '@mui/material';
import FormAnswer from '../form-answer/form-answer';
import {nanoid} from '@reduxjs/toolkit';
import {updateAnswer, useQuizzesResultDispatch} from "../../redux/slices/resultsSlice";
import {IAnswer} from '../answers/answers';

interface AnswersProps {
    answers: IAnswer[];
    questionId: string;
    quizId: string;
}

const CheckboxGroup: FC<AnswersProps> = ({ answers, questionId, quizId }) => {
    const dispatch = useQuizzesResultDispatch();

    const handeInput = (event: any) => {
        dispatch(updateAnswer({ quizId: quizId, questionId: questionId, answerId: event.target.value, multipleChoice: true }));
    }

    return (
        <FormControl sx={{ ml: 5 }}>
            <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                onChange={handeInput}
            >
                {answers.map(a => (
                    <FormAnswer
                        key={nanoid()}
                        id={a.id}
                        control={<Checkbox />}
                        label={a.text}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
};

export default CheckboxGroup;
