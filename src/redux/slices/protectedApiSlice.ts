import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RootState } from "../reducers/rootReducer";
import {logOut, setCredentials, UserState} from "./state/authSlice";
import { Mutex } from 'async-mutex';
import {baseQuery} from "./publicApiSlice";

const mutex = new Mutex();

const baseQueryWithToken = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        headers.set("Content-Type", "application/json");
        const token = (getState() as RootState).auth.accessToken?.value;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    await mutex.waitForUnlock();
    let result = await baseQueryWithToken(args, api, extraOptions);
    if (result?.error?.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const {refreshToken, userType} = (api.getState() as RootState).auth;
                const refreshResult = await baseQuery(
                    {
                        method: 'POST',
                        url: "/auth/refresh-token",
                        body: {token: refreshToken, userType: userType}
                    }, api, extraOptions);
                if (refreshResult?.data) {
                    api.dispatch(setCredentials({...refreshResult.data as UserState}))
                    result = await baseQueryWithToken(args, api, extraOptions);
                } else {
                    api.dispatch(logOut());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQueryWithToken(args, api, extraOptions);
        }
    }
    return result;
}

export const protectedApi = createApi({
    reducerPath: "protectedApi",
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
