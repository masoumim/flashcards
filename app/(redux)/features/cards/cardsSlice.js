// cardsSlice.js - This file creates a Cards 'slice' including the corresponding Reducer and Action Creators

import { createSlice } from "@reduxjs/toolkit";

// Create Slice
export const cardsSlice = createSlice({    
    name: 'cards',
    initialState: { cards: {} },
    reducers: {
        addCard: (state, action) => {            
            state.cards[action.payload.cardId] = action.payload;
        }
    }
})

// Export action creator(s)
export const { addCard } = cardsSlice.actions;

// Export the selectors
export const selectCards = (state) => state.cards;
export const selectCard = (state, cardId) => state.cards.cards[cardId];

// Export reducer
export default cardsSlice.reducer;