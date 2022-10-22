import { combineReducers } from "@reduxjs/toolkit";
import resultsReducer from "../slices/state/resultsSlice";
import authReducer from "../slices/state/authSlice";
import {protectedApi, } from "../slices/protectedApiSlice";
import {publicApi} from "../slices/publicApiSlice";

export const rootReducer = combineReducers({
        [protectedApi.reducerPath]: protectedApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        auth: authReducer,
        results: resultsReducer,
    });


export type RootState = ReturnType<typeof rootReducer>
