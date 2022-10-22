import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}`,
})

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: baseQuery,
    endpoints: builder => ({})
})
