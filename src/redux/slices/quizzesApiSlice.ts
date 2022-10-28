import {IQuiz} from "../../types/types";
import {api} from "./apiSlice";

export const quizzesApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getQuizzes: builder.query<IQuiz[], void>({
            query: () => '/api/v1/quizzes',
            keepUnusedDataFor: 0,
        }),
        createQuiz: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/quizzes",
                method: 'POST',
                body: payload,
            }),
        }),
    })
})

export const {
    useGetQuizzesQuery,
    useCreateQuizMutation,
} = quizzesApiSlice
