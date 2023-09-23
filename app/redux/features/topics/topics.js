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
            <div className="flex flex-col items-center bg-purple-100 w-96 p-10 mx-auto mt-16 gap-4 drop-shadow-lg">
                <b className="text-xl text-purple-800">Topics:</b>
                {topics.map((topic) => {
                    return <Link className="text-2xl underline underline-offset-8 font-bold text-orange-500 hover:text-orange-400 transition ease-in duration-200" href={`/topics/${topic.topicId}`} key={topic.topicId}>{topic.topicName}</Link>
                })}
                <br />
                <Link href={"/topics/add-topic"} className="rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300">Create New Topic</Link>
            </div>
        </>
    )
}

