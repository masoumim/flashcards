// topicsSlice.js - This file creates a topic 'slice' including the corresponding Reducer and Action Creators

import { createSlice } from "@reduxjs/toolkit";

// Create Slice
export const topicsSlice = createSlice({    
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {            
            state.topics[action.payload.topicId] = action.payload;
        }
    }
})

// Export action creator(s)
export const { addTopic } = topicsSlice.actions;

// Export the selector
export const selectTopics = (state) => state.topics;

// Export reducer
export default topicsSlice.reducer;