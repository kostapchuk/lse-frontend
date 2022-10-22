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
        })
    })
})

export const {
    useSubmitResultMutation,
    useFindAllResultsQuery,
} = resultApiSlice
