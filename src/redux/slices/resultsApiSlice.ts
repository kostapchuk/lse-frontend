import {IResults} from "../../types/types";
import {api} from "./apiSlice";

export const resultApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        submitResult: builder.mutation({
            query: (payload) => ({
                url: "/api/v1/results",
                method: 'POST',
                body: payload,
            }),
        }),
        findAllResults: builder.query<IResults[], void>({
            query: () => '/api/v1/results',
            keepUnusedDataFor: 5,
        }),
        findResultsForCurrentUser: builder.query<IResults[], void>({
            query: () => '/api/v1/results/current',
            keepUnusedDataFor: 0,
        })
    })
})

export const {
    useSubmitResultMutation,
    useFindAllResultsQuery,
    useFindResultsForCurrentUserQuery,
} = resultApiSlice
