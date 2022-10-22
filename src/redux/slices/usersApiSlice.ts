import {publicApi} from "./publicApiSlice";

export const usersApiSlice = publicApi.injectEndpoints({
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
