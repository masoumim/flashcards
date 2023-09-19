/*
utilities.js - This file handles a variety of utility functions to help:
- cut down on repeating code 
- adhering to the D.R.Y. principle,
- prevent other files and components from becoming too large.
*/

import { useSelector } from "react-redux";
import { selectTopics } from "./redux/features/topics/topicsSlice";
import { selectQuizzes } from "./redux/features/quizzes/quizzesSlice";

// Return a list of topics from the store
export function getTopics() {
    // Get the topics Object
    const topics = useSelector(selectTopics);

    // return an array of each individual topic Object
    return Object.values(topics.topics);
}

// Return a list of ALL quizzes OR quizzes by topic
export function getQuizzes(topicId = null) {
    // Get the quizzes Object
    const quizzes = useSelector(selectQuizzes);

    // Get an array of each individual quiz Object
    const quizzesList = Object.values(quizzes.quizzes);

    if (topicId) {
        // get quizzes by Topic
        const topicQuizzes = quizzesList.filter((quiz) => quiz.topicId === topicId);

        return topicQuizzes;
    }
    else {
        // return all quizzes
        return quizzesList;
    }
}

// Return a topic name by topicId
export function getTopicName(topicId) {
    let topicName;
    const topics = getTopics();
    topics.forEach((topic) => { if (topic.topicId === topicId) { topicName = topic.topicName; } });
    return topicName;
}