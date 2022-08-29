import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import answerSlice from './answerSlice';

const rootRducer = combineReducers({
  answer: answerSlice,
});

export const store = configureStore({
  reducer: rootRducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
