"use client";
// topics/[topic]/page.js - This file establishes the route segment '/topics/[topic]' and renders a list of quizzes for this topic

import { getQuizzes } from "@/app/utilities";
import { getTopicName } from "@/app/utilities";

export default function TopicPage({ params }) {
    // note: params.topic = topicId

    // Get quizzes for this topic by topicId
    const topicQuizzes = getQuizzes(params.topic);

    // Get topic name by topicId
    const topicName = getTopicName(params.topic);

    return (
        <>
            <h1>{topicName}</h1>
            {/* List all Quizzes with this topic */}
            {topicQuizzes.map((quiz) => {
                // TODO: MAKE EACH QUIZ NAME A LINK TO THAT QUIZ
                return <p key={quiz.quizId}>{quiz.quizName}</p>
            })}
        </>
    )
}