import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../../api/ApiService";
import QuizAndForm from "../quiz-and-form/quiz-and-form";
import {IQuiz} from "../../types/types";

const QuizList: FC = () => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

    useEffect(() => {
        // TODO change creating class instance and change res type
        new ApiService().fetchQuizzes()
            .then((res: any) => {
                setQuizzes(res.data)
            })
    }, []);

    return (
        <>
            {quizzes.map(q => <QuizAndForm key={q.quizId} quiz={q}/>)}
        </>
    );
};

export default QuizList;
