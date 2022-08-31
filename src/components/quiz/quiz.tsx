import React, {FC} from 'react';
import QuizElement from '../quiz-element/quiz-element';

import Typography from '@mui/material/Typography';
import UserInfo from '../user-info/user-info';
import {nanoid} from '@reduxjs/toolkit';
import {IQuiz} from "../quiz-list/quiz-list";
import {Button} from "@mui/material";
import {useStore} from 'react-redux';
import {QuizResultState} from '../../redux/slices/resultsSlice';
import {UserDataState} from '../../redux/slices/userSlice';
import {ApiService} from '../../api/ApiService';

interface QuizProps {
    quiz: IQuiz;
}

interface Store {
    results: QuizResultState;
    user: UserDataState;
}

const Quiz: FC<QuizProps> = ({quiz}) => {

    const store = useStore<Store>();

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        new ApiService().validateQuizResult(
            {
                quizResult: store.getState().results.results[0],
                userQuizRequest: store.getState().user.user
            }
        ).then((res: any) => console.log(res))
    };

    console.log("rendering quiz")

    return (
        <>
            <Typography variant="h5">{quiz.name}</Typography>
            {quiz.questionsAndAnswers.map(value =>
                <QuizElement
                    key={nanoid()}
                    answers={value.answers}
                    question={value.question}
                    quizId={quiz.id}
                />
            )}
            <UserInfo
                formName="Личные данные"
                formDescription="Необходимо заполнить форму ниже для отправки результатов"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Отправить
            </Button>
        </>
    );
};

export default Quiz;
