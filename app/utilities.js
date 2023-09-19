/*
utilities.js - This file handles a variety of utility functions to help:
- cut down on repeating code 
- adhering to the D.R.Y. principle,
- prevent other files and components from becoming too large.
*/

import { useSelector } from "react-redux";
import { selectTopics } from "./redux/features/topics/topicsSlice";

// Return a list of topics from the store
export function getTopics() {
    // Get the topics Object
    const topics = useSelector(selectTopics);

    // return an array of each individual topic Object
    return Object.values(topics.topics);
}