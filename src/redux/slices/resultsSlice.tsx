import {createSlice} from '@reduxjs/toolkit';

// todo simplify the code, move types

export interface QuizItem {
    questionId: string,
    answerIds: string[]
}

export interface QuizResult {
    quizId: string
    items: QuizItem[]
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
            const quizIndex = state.results.findIndex(q => q.quizId === actions.payload.quizId)
            if (quizIndex >= 0) {
                const questionAndAnswersIndex = state.results[quizIndex].items.findIndex(question => question.questionId === actions.payload.questionId)
                if (questionAndAnswersIndex >= 0) {
                    if (actions.payload.multipleChoice) {
                        const answerIdIndex =
                            state.results[quizIndex].items[questionAndAnswersIndex].answerIds.findIndex(id => id === actions.payload.answerId)
                        if (answerIdIndex < 0) {
                            state.results[quizIndex].items[questionAndAnswersIndex].answerIds.push(actions.payload.answerId)
                        } else {
                            state.results[quizIndex].items[questionAndAnswersIndex].answerIds.splice(answerIdIndex, 1);
                        }
                    } else {
                        state.results[quizIndex].items[questionAndAnswersIndex].answerIds = [actions.payload.answerId]
                    }
                } else {
                    state.results[quizIndex].items.push({
                        questionId: actions.payload.questionId,
                        answerIds: [actions.payload.answerId]
                    })
                }
            } else {
                state.results.push({
                    quizId: actions.payload.quizId,
                    items: [{
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
