import React, {FC, useState} from 'react';
import {ApiService} from "../../api/ApiService";
import {useStore} from "react-redux";
import {QuizResultState} from "../../redux/slices/resultsSlice";
import Quiz from "../quiz/quiz";
import {IQuiz} from "../../types/types";

import '../../components/quiz-and-form/quiz-and-form.styles.css';

interface QuizAndFormProps {
    quiz: IQuiz;
}

interface RootStore {
    results: QuizResultState;
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
            }
        )
            .then((res: any) => {
                alert(`Your result is ${res.data}`)
            })
            .catch(e => {
                if (e.response.status === 400) {
                    alert('Validation failed. Please fill out the user form.')
                }
            });
    };

    return (
        <>
            <Quiz quiz={quiz}/>
        </>
    );
};

export default QuizAndForm;
