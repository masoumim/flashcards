// topics.js - This file gets the list of topics from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each topic's page.

import React from "react";
import Link from "next/link";
import { getTopics } from "@/app/utilities.js";

export default function Topics() {
    // Get an array of each individual topic Object
    const topics = getTopics();

    // Render / display each of the topics
    // Clicking a Topic will take you to that Topic's page showing all Quizzes for that Topic
    return (
        <>
            {topics.map((topic) => {
                return <Link href={`/topics/${topic.topicId}`} key={topic.topicId}>{topic.topicName}</Link>
            })}
            <br />
            <Link href={"/topics/add-topic"}>Create New Topic</Link>
        </>
    )
}