"use client";
// topics/add-topic/page.js - This file establishes the route segment '/topics/add-topic'
// The JSX contains a simple form which when submitted, will create a new topic and update the 
// store's state accordingly using the 'useDispatch' hook.

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTopic } from "@/app/redux/features/topics/topicsSlice";
import { getTopics } from "@/app/utilities";
import { v4 as uuidv4 } from 'uuid'; // create a unique id

export default function AddTopicPage() {
    // store hook in variable so it can be used in the body of
    // functions other than Component Functions
    const dispatch = useDispatch();

    // State variable to store user input for new topic name
    const [topicName, setTopicName] = useState("");

    // State variable to store the feedback message
    const [feedBackMsg, setFeedBackMsg] = useState("");

    // Get a list of all the topics
    const topics = getTopics();

    // Submit Handler - uses the useDispatch hook to call the Action Creator 'addTopic'
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if topic already exists               
        const topicExists = topics.some((topic) => topic.topicName === topicName);
        if (topicExists) {            
            setFeedBackMsg("sorry that topic already exists!");            
        }
        else {            
            // Add the topic to store
            dispatch(addTopic({
                topicId: uuidv4(),
                topicName: topicName,
                quizIds: []
            }));
            
            // Clear the input field
            setTopicName("");

            // Clear the feedback msg
            setFeedBackMsg("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" name="topic" value={topicName} onChange={(e) => setTopicName(e.currentTarget.value)} required />
            <button>Add Topic</button>
            <p>{feedBackMsg}</p>
        </form>
    )
}
