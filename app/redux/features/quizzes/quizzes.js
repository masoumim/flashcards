// quizzes.js - This file gets the list of quizzes from the store's state via the useSelector() hook
// It then iterates over them, creating a link to each quiz.

import React from "react";
import Link from "next/link";
import { getQuizzes } from "@/app/utilities";

export default function Quizzes() {
    // Get a list of all quizzes
    const quizzesList = getQuizzes();

    // Render / display each of the Quizzes    
    return (
        <>
            <div className="flex flex-col items-center bg-purple-100 w-96 p-10 mx-auto mt-16 gap-4 drop-shadow-lg">
                <b className="text-xl text-purple-800">Quizzes:</b>
                {quizzesList.map((quiz) => {
                    return <Link className="text-2xl underline underline-offset-8 font-bold text-orange-500 hover:text-orange-400 transition ease-in duration-200" href={`/quizzes/${quiz.quizId}`} key={quiz.quizId}>{quiz.quizName}</Link>
                })}
                <br />
                <Link href={"/quizzes/add-quiz"} className="rounded-2xl p-3 text-purple-200 bg-purple-800 font-bold hover:bg-purple-600 hover:text-white transition ease-in duration-300">Create New Quiz</Link>
            </div>
        </>
    )
}