import {IResults} from "../../types/types";
import {protectedApi} from "./protectedApiSlice";

export const resultApiSlice = protectedApi.injectEndpoints({
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
        }),
        findResultsForCurrentUser: builder.query<IResults[], void>({
            query: () => '/api/v1/results/current',
        })
    })
})

export const {
    useSubmitResultMutation,
    useFindAllResultsQuery,
    useFindResultsForCurrentUserQuery,
} = resultApiSlice
