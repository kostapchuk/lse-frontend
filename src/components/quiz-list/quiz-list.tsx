import React, {useEffect, useState} from 'react';
import Quiz from "../quiz/quiz";
import {IAnswer} from "../answers/answers";
import {ApiService} from "../../api/ApiService";

export interface IQuestion {
    id: string;
    text: string;
    multipleChoice: boolean;
    cost: number;
}

export interface IQuestionAndAnswers {
    question: IQuestion;
    answers: IAnswer[];
}

export interface IQuiz {
    id: string;
    name: string;
    questionsAndAnswers: IQuestionAndAnswers[];
}

const QuizList = () => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

    useEffect(() => {
        new ApiService().fetchQuizzes()
            .then((res: any) => {
                setQuizzes(res.data)
            })
    }, []);

    return (
        <div>
            {quizzes.map(q => <Quiz key={q.id} quiz={q}/>)}
        </div>
    );
};

export default QuizList;
