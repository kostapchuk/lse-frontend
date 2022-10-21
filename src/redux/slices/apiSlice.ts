import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RootState } from "../reducers/rootReducer";

const baseQueryWithToken = fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        headers.set("Content-Type", "application/json");
        const token = (getState() as RootState).auth.accessToken?.value;
        console.log(`token is prepare headers ${token}`)
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

export const api = createApi({
    baseQuery: baseQueryWithToken,
    endpoints: builder => ({})
})

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
})

// const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//     let result = await baseQueryWithToken(args, api, extraOptions);
//     if (result?.error?.status === 401) {
//         console.log('sending refresh token');
//         const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);
//         console.log(refreshResult);
//         if (refreshResult?.data) {
//             api.dispatch(setCredentials({...refreshResult.data as UserState}))
//             result = await baseQueryWithToken(args, api, extraOptions);
//         } else {
//             api.dispatch(logOut());
//         }
//     }
//     return result;
// }

// export const api = createApi({
//     baseQuery: baseQuery,
//     endpoints: builder => ({
//         getQuizzes: builder.query({
//             query: () => '/api/v1/quizzes',
//             keepUnusedDataFor: 5,
//         })
//     })
// })


// export const generalPublicApi = createApi({
//   baseQuery: baseQuery, // Set the baseUrl for every endpoint below
//   endpoints: (builder) => ({
//     getTopics: builder.query({
//       query: () => `/api/v1/quizzes/topics`,
//     }),
//     // updatePokemon: builder.mutation({
//     //   query: ({ name, patch }) => ({
//     //     url: `pokemon/${name}`,
//     //     method: 'PATCH', // When performing a mutation, you typically use a method of PATCH/PUT/POST/DELETE for REST endpoints
//     //     body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`
//     //   }),
//     // }),
//   }),
// })

// export const generalProtectedApi = createApi({
//   baseQuery: baseQueryWithToken,
//   endpoints: (builder) => ({
//     getTopics: builder.query({
//       query: () => `/api/v1/quizzes`,
//     }),
//     // updatePokemon: builder.mutation({
//     //   query: ({ name, patch }) => ({
//     //     url: `pokemon/${name}`,
//     //     method: 'PATCH', // When performing a mutation, you typically use a method of PATCH/PUT/POST/DELETE for REST endpoints
//     //     body: patch, // fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(patch)`
//     //   }),
//     // }),
//   }),
// })
