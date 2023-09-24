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
    if (topicQuizzes === undefined || topicName === undefined) {
        return (<p>Sorry, that topic doesn't exist!</p>);
    }

    return (
        <>
            <div className="flex flex-col items-center bg-purple-100 w-80 p-10 mx-auto mt-16 gap-4 drop-shadow-lg sm:w-96">
                <h1 className="text-xl text-purple-800 font-bold">'{topicName}' Quizzes:</h1>
                {/* List all Quizzes with this topic */}
                {topicQuizzes.map((quiz) => {
                    return <Link className="text-2xl underline underline-offset-8 font-bold text-orange-500 hover:text-orange-400 transition ease-in duration-200" href={`/quizzes/${quiz.quizId}`} key={quiz.quizId}>{quiz.quizName}</Link>
                })}
            </div>
        </>
    )
}