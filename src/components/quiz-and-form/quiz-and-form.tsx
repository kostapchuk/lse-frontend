import React, {FC} from 'react';
import {ApiService} from "../../api/ApiService";
import {useStore} from "react-redux";
import {QuizResultState} from "../../redux/slices/resultsSlice";
import {UserDataState} from "../../redux/slices/userSlice";
import Quiz from "../quiz/quiz";
import UserForm from "../user-form/user-form";
import {Button} from "@mui/material";
import {IQuiz} from "../../types/types";

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
        const answeredQuizIndex = store.getState().results.results.findIndex(q => q.id === quizId);
        if (answeredQuizIndex < 0) {
            alert("Please answer at least one question to submit the quiz results");
            return;
        }
        new ApiService().validateQuizResult(
            {
                quizResult: store.getState().results.results[answeredQuizIndex],
                userQuizRequest: store.getState().user.user
            }
        ).then((res: any) => console.log(res))
    };

    return (
        <>
            <Quiz quiz={quiz}/>
            <UserForm
                name="Личные данные"
                description="Необходимо заполнить форму ниже для отправки результатов"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e: any) => handleSubmit(e, quiz.id)}
            >
                Отправить
            </Button>
        </>
    );
};

export default QuizAndForm;
