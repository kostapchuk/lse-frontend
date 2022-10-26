import {api} from "./apiSlice";

export const usersApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        registerStudent: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/students",
                method: 'POST',
                body: payload,
                headers: {},
            }),
        }),
        registerTeacher: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/teachers",
                method: 'POST',
                body: payload,
                headers: {},
            }),
        }),
    })
})

export const {
    useRegisterStudentMutation,
    useRegisterTeacherMutation,
} = usersApiSlice
