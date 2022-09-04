import React, {FC} from 'react';
import {ApiService} from "../../api/ApiService";
import {useStore} from "react-redux";
import {QuizResultState} from "../../redux/slices/resultsSlice";
import {UserDataState} from "../../redux/slices/userSlice";
import Quiz from "../quiz/quiz";
import UserForm from "../user-form/user-form";
import {Button, Grid} from "@mui/material";
import {IQuiz} from "../../types/types";

import '../../components/quiz-and-form/quiz-and-form.styles.css';

interface QuizAndFormProps {
    quiz: IQuiz;
}

interface RootStore {
    results: QuizResultState;
    user: UserDataState;
}

const QuizAndForm: FC<QuizAndFormProps> = ({quiz}) => {

    const store = useStore<RootStore>();

    const handleSubmit = (evt: any, quizId: string) => {
        evt.preventDefault();
        // TODO remove console.log & change creating class instance each time
        const answeredQuizIndex = store.getState().results.results.findIndex(q => q.quizId === quizId);
        if (answeredQuizIndex < 0) {
            alert("Please answer at least one question to submit the quiz results");
            return;
        }
        new ApiService().validateQuizResult(
            {
                quizResult: store.getState().results.results[answeredQuizIndex],
                user: store.getState().user.user
            }
        ).then((res: any) => alert(`Your result is ${res.data}`))
    };

    return (
        <>
            <Quiz quiz={quiz}/>
            <Grid container item
                  direction="column"
                  justifyContent="center"
                  alignItems="left" lg={6} md={8} sm={10}>
                <UserForm
                    name="Личные данные"
                    description="Необходимо заполнить форму ниже для отправки результатов"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={(e: any) => handleSubmit(e, quiz.quizId)}
                >
                    Отправить
                </Button>
            </Grid>
        </>
    );
};

export default QuizAndForm;
