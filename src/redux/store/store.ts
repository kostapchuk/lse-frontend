import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import resultsSlice from '../slices/resultsSlice';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  results: resultsSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
