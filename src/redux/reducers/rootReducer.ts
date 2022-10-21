import { combineReducers } from "@reduxjs/toolkit";
import resultsReducer from "../slices/resultsSlice";
import authReducer from "../slices/authSlice";
import { api } from "../slices/apiSlice";

export const rootReducer = combineReducers({
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        results: resultsReducer,
    });


export type RootState = ReturnType<typeof rootReducer>