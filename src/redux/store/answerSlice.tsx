import { createSlice } from '@reduxjs/toolkit';

const createInitialState = () => {
  // const map = new Object<number, number[]>();
  const map: any = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  return [
    {
      id_quiz: 1,
      qAndA: map,
    },
  ];
};
const answerSlice = createSlice({
  name: 'answer',
  initialState: createInitialState(),
  reducers: {
    setAnswer: (state, actions) => {
      const quiz = state.find(
        (quiz) => quiz.id_quiz === actions.payload.id_quiz
      );
      if (quiz !== undefined && quiz !== null) {
        const a = actions.payload.questionId;
        quiz.qAndA.actions.payload.questionId = [actions.payload.answerId];
        console.log(actions.payload);
      } else {
        console.log('error');
      }
    },
  },
});

export default answerSlice.reducer;
export const { setAnswer } = answerSlice.actions;
