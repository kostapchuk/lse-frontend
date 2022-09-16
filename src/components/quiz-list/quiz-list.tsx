import React, {FC, useEffect, useState} from 'react';
import {ApiService} from "../../api/ApiService";
import {IQuiz} from "../../types/types";
import Quiz from "../quiz/quiz";

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
            {quizzes.map(q => <Quiz key={q.quizId} quiz={q}/>)}
        </>
    );
};

export default QuizList;
