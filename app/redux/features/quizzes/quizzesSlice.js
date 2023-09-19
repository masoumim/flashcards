// quizzesSlice.js - This file creates a Quizzes 'slice' including the corresponding Reducer and Action Creators

import { createSlice } from "@reduxjs/toolkit";

// Create Slice
export const quizzesSlice = createSlice({    
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {            
            state.quizzes[action.payload.quizId] = action.payload;
        }
    }
})

// Export action creator(s)
export const { addQuiz } = quizzesSlice.actions;

// Export the selector
export const selectQuizzes = (state) => state.quizzes;

// Export reducer
export default quizzesSlice.reducer;