import {configureStore} from '@reduxjs/toolkit';
import {api} from "../slices/apiSlice";
import { rootReducer } from '../reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
    devTools: true
});
