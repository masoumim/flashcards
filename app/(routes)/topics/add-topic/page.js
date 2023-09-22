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

            // Set the feedback msg
            setFeedBackMsg(`${topicName} topic created!`);
        }
    }

    return (
        <div className="bg-purple-100 w-fit mx-auto h-52 mt-16 px-10 drop-shadow-lg">
            <form onSubmit={handleSubmit}>                
                <input className="outline-none text-center h-12 mr-10 mt-20" type="text" id="topic" name="topic" placeholder="enter topic name" value={topicName} onChange={(e) => setTopicName(e.currentTarget.value)} required />
                <button className="rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300">Add Topic</button>
                <p className="font-bold text-orange-500 text-center mt-5">{feedBackMsg}</p>
            </form>
        </div>
    )
}
