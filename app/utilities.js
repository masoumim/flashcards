/*
utilities.js - This file handles a variety of utility functions to help:
- cut down on repeating code 
- adhering to the D.R.Y. principle,
- prevent other files and components from becoming too large.
*/

import { useSelector } from "react-redux";
import { selectTopics } from "./redux/features/topics/topicsSlice";
import { selectQuizzes } from "./redux/features/quizzes/quizzesSlice";

// Return a list of: all topics or topic by topicId
// *Using 'named function parameters'
export function getTopics({topicId = null} = {}) {
    // Get the topics Object
    const topics = useSelector(selectTopics);

    // return an array of each individual topic Object
    const topicsList = Object.values(topics.topics);

    if(topicId){
        // Get topic by topicId
        const topicById = topicsList.filter((topic) => topic.topicId === topicId);
        return topicById[0];
    }
    else{
        // get all topics
        return topicsList;
    }
}

// Return a list of: all quizzes, quizzes by topicId or quiz by quizId
// *Using 'named function parameters'
export function getQuizzes({ quizId = null, topicId = null } = {}) {
    // Get the quizzes Object
    const quizzes = useSelector(selectQuizzes);

    // Get an array of each individual quiz Object
    const quizzesList = Object.values(quizzes.quizzes);

    if (quizId) {
        // get quizzes by quizId
        const quizById = quizzesList.filter((quiz) => quiz.quizId === quizId);
        return quizById[0];
    }
    else if (topicId) {
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
    const topic = getTopics({topicId: topicId});    
    return topic.topicName;
}

// Return a quiz name by quizId
export function getQuizName(quizId) {
    const quiz = getQuizzes({ quizId: quizId });
    return quiz.quizName;
}

// Return a list of cards by quizId
export function getCardList(quizId) {
    const quiz = getQuizzes({ quizId: quizId });    
    return quiz.cardsIds;
}