// topics.js - This file gets the list of topics from the store's state via the useSelector() hook
// It then iterates over them, creating a link to that topic's page showing all associated Quizzes.
// Below the list of Topics is a link to create new Topics.

import React from "react";
import Link from "next/link";
import { useSelector } from 'react-redux'
import { selectTopics } from "./topicsSlice.js";

export default function Topics() {
    const topics = useSelector(selectTopics);    
    const topicList = Object.values(topics.topics);
    
    // TODO: Make each topic a link
    return (
        <>  
            {topicList.map((topic) => {
                return <p key={topic.topicId}>{topic.topicName}</p>
            })}
            <Link href={"/topics/add-topic"}>Create New Topic</Link>
        </>
    )
}