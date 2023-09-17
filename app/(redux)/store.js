// store.js - This file is the main source of state for the app
// Each of the app's slice's reducers are imports, combined and exported as a single reducer.
// The resulting reducer is imported into layout.js so that state can be accesses from anywhere in the app.

import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "./features/topics/topicsSlice.js";
import quizzesReducer from "./features/quizzes/quizzesSlice.js";

export const store = configureStore({
    reducer: {
        topics: topicsReducer,
        quizzes: quizzesReducer
    }
})