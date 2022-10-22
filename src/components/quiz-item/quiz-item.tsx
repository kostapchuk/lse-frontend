import React, {FC} from 'react';
import Question from '../question/question';
import Box from '@mui/material/Box';
import {IAnswer, IQuestion} from "../../types/types";
import {updateAnswer} from "../../redux/slices/state/resultsSlice";
import {useDispatch} from "react-redux";
import {Checkbox, Radio} from "@mui/material";
import FormAnswer from "../form-answer/form-answer";
import AnswerGroup from "../answer-group/answer-group";

interface QuizItemProps {
    question: IQuestion;
    answers: IAnswer[];
    quizId: string;
}

const QuizItem: FC<QuizItemProps> = ({question, answers, quizId}) => {

    const dispatch = useDispatch();
    const control = question.multipleChoice ? <Checkbox/> : <Radio/>;

    // todo change typing
    const handleInput = (event: any) => {
        dispatch(updateAnswer({
            quizId: quizId,
            questionId: question.id,
            answerId: event.target.value,
            multipleChoice: question.multipleChoice
        }));
    }

    // todo change typing
    const handleInputObj: any = {
        onChange: handleInput
    }

    const children = answers.map(a =>
        <FormAnswer
            key={a.id}
            id={a.id}
            control={control}
            label={a.text}
        />
    )

    const styles = {
        sx: {mb: 3}
    }

    return (
        <Box {...styles}>
            <Question text={question.text}/>
            <AnswerGroup children={children} multipleChoice={question.multipleChoice}
                         parentProps={handleInputObj}/>
        </Box>
    );
};

export default React.memo(QuizItem);
