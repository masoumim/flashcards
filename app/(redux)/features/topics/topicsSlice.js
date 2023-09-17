// topicSlice.js - This file creates a topic 'slice' and the corresponding Action Creators

import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({    
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {            
            state.topics[action.payload.topicId] = action.payload;
        }
    }
})

// Export action creators
export const { addTopic } = topicsSlice.actions;

// Export the selector
export const selectTopics = (state) => state.topics;

// Export reducer
export default topicsSlice.reducer;