import { combineReducers } from "@reduxjs/toolkit";
import resultsSlice from "../slices/resultsSlice";
import userSlice from "../slices/userSlice";

export const rootReducer = combineReducers({
    results: resultsSlice,
    user: userSlice,
});