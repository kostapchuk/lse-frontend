import {IQuiz} from "../../types/types";
import {api} from "./apiSlice";

export const quizzesApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getQuizzes: builder.query<IQuiz[], void>({
            query: () => '/api/v1/quizzes',
        })
    })
})

export const {
    useGetQuizzesQuery,
} = quizzesApiSlice
