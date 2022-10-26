import {AnyAction, combineReducers, Reducer} from "@reduxjs/toolkit";
import resultsReducer from "../slices/state/resultsSlice";
import authReducer from "../slices/state/authSlice";
import {api,} from "../slices/apiSlice";
import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    // [publicApi.reducerPath]: publicApi.reducer,
    auth: authReducer,
    results: resultsReducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "auth/logOut") {
        storage.removeItem('persist:root');
        state = {} as RootState;
        return appReducer(state, action);
    }
    return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>
