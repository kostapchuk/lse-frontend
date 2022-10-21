import React, {FC,} from 'react';
import {Link} from 'react-router-dom';
import {useGetQuizzesQuery} from '../../redux/slices/quizzesApiSlice';
import {IQuiz} from "../../types/types";

const QuizList: FC = () => {
    const {
        data: quizzes,
    } = useGetQuizzesQuery()

    return (
        <>
            {quizzes?.map((q: IQuiz) => <Link key={q.quizId} to={`/quizzes/${q.quizId}`}> {q.quizName} </Link>)}
        </>
    );
};

export default QuizList;
