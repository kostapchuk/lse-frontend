import {publicApi} from "./publicApiSlice";

export const usersApiSlice = publicApi.injectEndpoints({
    endpoints: builder => ({
        registerStudent: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/students",
                method: 'POST',
                body: payload,
            }),
        }),
        registerTeacher: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/users/teachers",
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
