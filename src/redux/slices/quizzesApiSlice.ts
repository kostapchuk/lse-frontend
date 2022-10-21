import { IQuiz } from "../../types/types";
import { api } from "./apiSlice";

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

export const resultApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        submitResult: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/results",
                method: 'POST',
                body: payload,
            }),
        }),
    })
})

export const {
    useSubmitResultMutation,
} = resultApiSlice

export const usersApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        registerStudent: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/register-student",
                method: 'POST',
                body: payload,
            }),
        }),
        registerTeacher: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/register-teacher",
                method: 'POST',
                body: payload,
            }),
        }),
    })
})

export const {
    useRegisterStudentMutation,
    useRegisterTeacherMutation,
} = usersApiSlice
