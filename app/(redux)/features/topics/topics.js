// topics.js - This file gets the list of topics from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each topic's page.

import React from "react";
import Link from "next/link";
import { useSelector } from 'react-redux'
import { selectTopics } from "./topicsSlice.js";

export default function Topics() {
    // Get the topics Object
    const topics = useSelector(selectTopics);    
    
    // Get an array of each individual topic Object
    const topicList = Object.values(topics.topics);
    
    // Render / display each of the topics
    // TODO: Clicking a Topic will take you to that Topic's page showing all Quizzes for that Topic
    return (
        <>  
            {topicList.map((topic) => {
                return <p key={topic.topicId}>{topic.topicName}</p>
            })}
            <Link href={"/topics/add-topic"}>Create New Topic</Link>
        </>
    )
}