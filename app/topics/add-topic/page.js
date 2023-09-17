"use client";
// topics/add-topic/page.js - This file establishes the route segment '/topics/add-topic'
// The JSX contains a simple form which when submitted, will create a new topic and update the 
// store's state accordingly using the 'useDispatch' hook.

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTopic } from "@/app/(redux)/features/topics/topicsSlice";
import { v4 as uuidv4 } from 'uuid'; // create a unique id

export default function AddTopicPage() {    
    const dispatch = useDispatch();
    
    // State variable to store user input for new topic name
    const [topicName, setTopicName] = useState("");

    // Submit Handler - uses the callDispatch method to call the Action Creator 'addTopic'
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTopic({
            topicId: uuidv4(),
            topicName: topicName,
            quizIds: []
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" name="topic" onChange={(e) => setTopicName(e.currentTarget.value)} />
            <button>Add Topic</button>
        </form>
    )
}
