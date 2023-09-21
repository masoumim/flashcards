"use client";
// page.js - This file establishes the route segment '/topics/[topic]' and renders a list of quizzes for this topic

import Link from "next/link";
import { getQuizzes } from "@/app/utilities";
import { getTopicName } from "@/app/utilities";

export default function TopicPage({ params }) {
    // note: params.topic = topicId

    // Get quizzes for this topic by topicId
    const topicQuizzes = getQuizzes({ topicId: params.topic });

    // Get topic name by topicId
    const topicName = getTopicName(params.topic);

    // Check if this topic exists
    if(topicQuizzes === undefined || topicName === undefined){
        return(<p>Sorry, that topic doesn't exist!</p>);
    }

    return (
        <>
            <h1>{topicName}</h1>
            {/* List all Quizzes with this topic */}
            {topicQuizzes.map((quiz) => {
                return <Link href={`/quizzes/${quiz.quizId}`} key={quiz.quizId}>{quiz.quizName}</Link>
            })}
        </>
    )
}