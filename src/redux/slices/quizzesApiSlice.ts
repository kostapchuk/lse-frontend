import {IQuiz} from "../../types/types";
import {protectedApi} from "./protectedApiSlice";

export const quizzesApiSlice = protectedApi.injectEndpoints({
    endpoints: builder => ({
        getQuizzes: builder.query<IQuiz[], void>({
            query: () => '/api/v1/quizzes',
        })
    })
})

export const {
    useGetQuizzesQuery,
} = quizzesApiSlice
