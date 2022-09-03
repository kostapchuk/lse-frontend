import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {store} from '../store/store';

// todo simplify the code, move types

export interface QuestionAndAnswersResult {
    questionId: string,
    answerIds: string[]
}

export interface QuizResult {
    id: string
    questionAndAnswersResult: QuestionAndAnswersResult[]
}

export interface QuizResultState {
    results: QuizResult[]
}

const initialState: QuizResultState = {
    results: []
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        updateAnswer: (state, actions) => {
            console.log("redux updateAnswer is called")
            const quizIndex = state.results.findIndex(q => q.id === actions.payload.quizId)
            if (quizIndex >= 0) {
                const questionAndAnswersIndex = state.results[quizIndex].questionAndAnswersResult.findIndex(question => question.questionId === actions.payload.questionId)
                if (questionAndAnswersIndex >= 0) {
                    if (actions.payload.multipleChoice) {
                        const answerIdIndex =
                            state.results[quizIndex].questionAndAnswersResult[questionAndAnswersIndex].answerIds.findIndex(id => id === actions.payload.answerId)
                        if (answerIdIndex < 0) {
                            state.results[quizIndex].questionAndAnswersResult[questionAndAnswersIndex].answerIds.push(actions.payload.answerId)
                        } else {
                            state.results[quizIndex].questionAndAnswersResult[questionAndAnswersIndex].answerIds.splice(answerIdIndex, 1);
                        }
                    } else {
                        state.results[quizIndex].questionAndAnswersResult[questionAndAnswersIndex].answerIds = [actions.payload.answerId]
                    }
                } else {
                    state.results[quizIndex].questionAndAnswersResult.push({
                        questionId: actions.payload.questionId,
                        answerIds: [actions.payload.answerId]
                    })
                }
            } else {
                state.results.push({
                    id: actions.payload.quizId,
                    questionAndAnswersResult: [{
                        questionId: actions.payload.questionId,
                        answerIds: [actions.payload.answerId]
                    }]
                })
            }
        },
    },
});

export default resultsSlice.reducer;
export const {updateAnswer} = resultsSlice.actions;

export type QuizzesResultsDispatch = typeof store.dispatch
export const useQuizzesResultDispatch = () => useDispatch<QuizzesResultsDispatch>()
