// cardsSlice.js - This file creates a Cards 'slice' including the corresponding Reducer and Action Creators

import { createSlice } from "@reduxjs/toolkit";

// Create Slice
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: { quizCards: {}, newCards: {} },
    reducers: {
        addQuizCard: (state, action) => {            
            state.quizCards[action.payload.cardId] = action.payload;
        },
        removeQuizCard: (state, action) => {
            delete state.quizCards[action.payload.cardId];
        },
        addNewCard: (state, action) => {
            state.newCards[action.payload.cardId] = action.payload;
        },
        removeNewCard: (state, action) => {            
            delete state.newCards[action.payload.cardId];
        }
    }
})

// Export action creator(s)
export const { addQuizCard } = cardsSlice.actions;
export const { addNewCard } = cardsSlice.actions;
export const { removeQuizCard } = cardsSlice.actions;
export const { removeNewCard } = cardsSlice.actions;

// Export the selectors
export const selectQuizCards = (state) => state.cards.quizCards;
export const selectNewCards = (state) => state.cards.newCards;

// Export reducer
export default cardsSlice.reducer;