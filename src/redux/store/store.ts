import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import resultsSlice from '../slices/resultsSlice';

const rootReducer = combineReducers({
    results: resultsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
